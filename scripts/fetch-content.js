// STATICA — Content Fetcher
// Fetches game deals from CheapShark API and gaming news from RSS feeds.
// Generates data.json for the frontend.
//
// Run: node scripts/fetch-content.js
// Output: data.json (in project root)

const https = require('https');
const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const DATA_FILE = path.join(__dirname, '..', 'data.json');

// ---- CheapShark Store IDs to names ----
const STORE_MAP = {
  "1": "Steam", "2": "GamersGate", "3": "GMG", "4": "Amazon",
  "5": "GameStop", "6": "Direct2Drive", "7": "GOG", "8": "Origin",
  "11": "Humble", "13": "Uplay", "15": "IndieGala", "17": "Fanatical",
  "21": "Epic", "24": "Humble", "25": "Epic", "27": "Voidu",
  "29": "Epic", "30": "GOG", "31": "Steam", "32": "Epic"
};

const PREFERRED_STORES = ["Steam", "Epic", "GOG", "GMG", "Humble", "Fanatical"];

// ---- HTTP helper (returns Promise) ----
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'STATICA/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(data);
        else reject(new Error(`HTTP ${res.statusCode}: ${url}`));
      });
    }).on('error', reject);
  });
}

// ---- CheapShark: fetch deals ----
async function fetchDeals() {
  console.log('[STATICA] Fetching deals from CheapShark...');
  const url = 'https://www.cheapshark.com/api/1.0/deals?' +
    'storeID=1,3,7,11,17,21,25,30,31,32' +
    '&onSale=1' +
    '&metacriticScore=60' +
    '&pageSize=15' +
    '&sortBy=DealRating';

  const raw = await fetch(url);
  const items = JSON.parse(raw);
  console.log(`[STATICA] Got ${items.length} deals from CheapShark`);

  const games = [];
  const seen = new Set();

  for (const d of items) {
    const storeName = STORE_MAP[d.storeID] || d.storeID;
    if (!PREFERRED_STORES.includes(storeName)) continue;
    if (seen.has(d.steamAppID || d.internalName)) continue;
    seen.add(d.steamAppID || d.internalName);

    const title = d.title || d.external || d.internalName;
    if (!title) continue;

    const salePrice = parseFloat(d.salePrice);
    const normalPrice = parseFloat(d.normalPrice);
    if (isNaN(salePrice) || isNaN(normalPrice)) continue;

    const existing = games.find(g => g.title === title || g.steamAppId == d.steamAppID);
    if (existing) {
      existing.deals.push({
        store: storeName,
        price: salePrice,
        original: normalPrice,
        url: d.dealID ? `https://www.cheapshark.com/redirect?dealID=${d.dealID}` : '#'
      });
      continue;
    }

    const game = {
      id: 'g' + (games.length + 1),
      steamAppId: parseInt(d.steamAppID) || null,
      rating: Math.min(5, Math.round((parseInt(d.metacriticScore) || 70) / 20)),
      title: title,
      desc: generateDesc(title, storeName),
      descEN: generateDescEN(title, storeName),
      deals: [{
        store: storeName,
        price: salePrice,
        original: normalPrice,
        url: d.dealID ? `https://www.cheapshark.com/redirect?dealID=${d.dealID}` : '#'
      }]
    };
    games.push(game);
  }

  // Get game descriptions from CheapShark game info
  for (const g of games) {
    if (g.steamAppId) {
      try {
        const gameUrl = `https://www.cheapshark.com/api/1.0/games?id=${g.steamAppId}`;
        const raw2 = await fetch(gameUrl);
        const info = JSON.parse(raw2);
        if (info && info.info && info.info.title) {
          // Use CheapShark's own title
        }
      } catch { /* use generated description */ }
    }
  }

  console.log(`[STATICA] Compiled ${games.length} games with deals`);
  return games.slice(0, 12);
}

// ---- Fallback descriptions (since CheapShark doesn't provide descriptions) ----
function generateDesc(title, store) {
  const templates = [
    `Aprovecha la oferta de ${title} en ${store}. Un gran juego a un precio increíble, disponible por tiempo limitado.`,
    `Encuentra ${title} al mejor precio en ${store}. No dejes pasar esta oportunidad única de añadirlo a tu colección.`,
    `${title} está en oferta en ${store}. Consigue este título a un precio rebajado y disfruta de horas de diversión.`,
    `Oferta especial de ${title} en ${store}. Un juego imprescindible que no puede faltar en tu biblioteca.`
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateDescEN(title, store) {
  const templates = [
    `Take advantage of the ${title} deal on ${store}. A great game at an incredible price, available for a limited time.`,
    `Find ${title} at the best price on ${store}. Don't miss this unique opportunity to add it to your collection.`,
    `${title} is on sale on ${store}. Get this title at a reduced price and enjoy hours of fun.`,
    `Special offer for ${title} on ${store}. An essential game that shouldn't be missing from your library.`
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

// ---- RSS News Fetcher ----
async function fetchNews() {
  console.log('[STATICA] Fetching gaming news from RSS feeds...');

  const feeds = [
    'https://www.eurogamer.net/feed',
    'https://www.rockpapershotgun.com/feed',
    'https://www.pcgamer.com/rss/'
  ];

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_'
  });

  const allNews = [];
  const seenTitles = new Set();

  for (const feedUrl of feeds) {
    try {
      const xml = await fetch(feedUrl);
      const parsed = parser.parse(xml);
      const items = parsed?.rss?.channel?.item || parsed?.feed?.entry || [];

      const list = Array.isArray(items) ? items : [items];

      for (const item of list) {
        const title = (item.title || '').trim();
        if (!title || seenTitles.has(title.toLowerCase())) continue;
        seenTitles.add(title.toLowerCase());

        const desc = (item.description || item.summary || item.contentSnippet || '')
          .replace(/<[^>]+>/g, '').trim().substring(0, 250);

        const date = item.pubDate || item.published || item['dc:date'] || '';
        const dateStr = date ? new Date(date).toLocaleDateString('es-ES', {
          day: 'numeric', month: 'long', year: 'numeric'
        }) : new Date().toLocaleDateString('es-ES', {
          day: 'numeric', month: 'long', year: 'numeric'
        });

        allNews.push({
          id: 'n' + (allNews.length + 1),
          title: title,
          titleEN: title,
          desc: desc || 'Lee la noticia completa en la fuente original.',
          descEN: desc || 'Read the full story at the original source.',
          date: dateStr,
          source: new URL(feedUrl).hostname.replace('www.', ''),
          tag: categorize(title, desc)
        });
      }
    } catch (err) {
      console.log(`[STATICA] RSS feed failed: ${feedUrl} — ${err.message}`);
    }
  }

  console.log(`[STATICA] Got ${allNews.length} news items`);
  return allNews.slice(0, 12);
}

function categorize(title, desc) {
  const text = (title + ' ' + desc).toLowerCase();
  if (text.includes('expansion') || text.includes('dlc') || text.includes('ampliación')) return 'Expansión';
  if (text.includes('sale') || text.includes('descuento') || text.includes('offer') || text.includes('gratis') || text.includes('free')) return 'Ofertas';
  if (text.includes('record') || text.includes('récord') || text.includes('million') || text.includes('millón')) return 'Récord';
  if (text.includes('nintendo') || text.includes('playstation') || text.includes('xbox') || text.includes('hardware')) return 'Hardware';
  if (text.includes('award') || text.includes('premio') || text.includes('bafta') || text.includes('game of the year')) return 'Premios';
  if (text.includes('update') || text.includes('actualización') || text.includes('parche') || text.includes('patch')) return 'Actualización';
  if (text.includes('announce') || text.includes('anuncia') || text.includes('reveal') || text.includes('presenta')) return 'Noticia';
  return 'Noticia';
}

// ---- Main ----
async function main() {
  console.log('=== STATICA Content Fetcher ===\n');

  let games, news;
  try {
    games = await fetchDeals();
  } catch (err) {
    console.error('[STATICA] Failed to fetch deals:', err.message);
    games = [];
  }

  try {
    news = await fetchNews();
  } catch (err) {
    console.error('[STATICA] Failed to fetch news:', err.message);
    news = [];
  }

  const output = {
    generatedAt: new Date().toISOString(),
    games: games,
    news: news
  };

  fs.writeFileSync(DATA_FILE, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`\n[STATICA] Written to data.json: ${games.length} games, ${news.length} news items`);
}

main().catch(err => {
  console.error('[STATICA] Fatal error:', err);
  process.exit(1);
});
