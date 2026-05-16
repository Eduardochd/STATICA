// ---- Game Deals Data ----
const GAMES = [
  {
    id: "g1", steamAppId: 1091500, rating: 5, releaseDate: "2020-12-10",
    title: "Cyberpunk 2077",
    desc: "RPG de mundo abierto en la distópica Night City. Personaliza tu personaje, elige tu camino y descubre un futuro oscuro lleno de decisiones que importan.",
    descEN: "Open-world RPG set in the dystopian Night City. Customize your character, choose your path, and discover a dark future full of meaningful choices.",
    deals: [
      { store: "GOG", price: 29.99, original: 59.99, url: "https://www.gog.com/en/game/cyberpunk_2077" },
      { store: "Steam", price: 35.99, original: 59.99, url: "https://store.steampowered.com/app/1091500" },
      { store: "Epic", price: 39.99, original: 59.99, url: "https://store.epicgames.com/p/cyberpunk-2077" },
      { store: "GMG", price: 32.49, original: 59.99, url: "https://www.greenmangaming.com/games/cyberpunk-2077" }
    ]
  },
  {
    id: "g2", steamAppId: 1086940, rating: 5, releaseDate: "2023-08-03",
    title: "Baldur's Gate 3",
    desc: "RPG aclamado basado en Dungeons & Dragons. Forja tu aventura en los Reinos Olvidados con un elenco de personajes inolvidables y decisiones que moldean el mundo.",
    descEN: "Acclaimed RPG based on Dungeons & Dragons. Forge your adventure in the Forgotten Realms with unforgettable characters and world-shaping choices.",
    deals: [
      { store: "Steam", price: 47.99, original: 59.99, url: "https://store.steampowered.com/app/1086940" },
      { store: "GOG", price: 47.99, original: 59.99, url: "https://www.gog.com/en/game/baldurs_gate_3" },
      { store: "Fanatical", price: 44.99, original: 59.99, url: "https://www.fanatical.com/en/game/baldurs-gate-3" }
    ]
  },
  {
    id: "g3", steamAppId: 1245620, rating: 5, releaseDate: "2022-02-25",
    title: "Elden Ring",
    desc: "Action RPG de FromSoftware. Explora las Tierras Intermedias, un vasto mundo lleno de misterios, peligros y criaturas colosales.",
    descEN: "Action RPG from FromSoftware. Explore the Lands Between, a vast world full of mysteries, dangers, and colossal creatures.",
    deals: [
      { store: "Steam", price: 35.99, original: 59.99, url: "https://store.steampowered.com/app/1245620" },
      { store: "GMG", price: 33.74, original: 59.99, url: "https://www.greenmangaming.com/games/elden-ring" },
      { store: "Fanatical", price: 34.49, original: 59.99, url: "https://www.fanatical.com/en/game/elden-ring" },
      { store: "Humble", price: 35.99, original: 59.99, url: "https://www.humblebundle.com/store/elden-ring" }
    ]
  },
  {
    id: "g4", steamAppId: 1174180, rating: 5, releaseDate: "2019-12-05",
    title: "Red Dead Redemption 2",
    desc: "Épico western de Rockstar. Vive la historia de Arthur Morgan y la banda Van der Linde en un mundo abierto increíblemente detallado del salvaje oeste.",
    descEN: "Epic western from Rockstar. Live the story of Arthur Morgan and the Van der Linde gang in an incredibly detailed open-world Wild West.",
    deals: [
      { store: "Steam", price: 19.79, original: 59.99, url: "https://store.steampowered.com/app/1174180" },
      { store: "Epic", price: 19.79, original: 59.99, url: "https://store.epicgames.com/p/red-dead-redemption-2" },
      { store: "GMG", price: 20.39, original: 59.99, url: "https://www.greenmangaming.com/games/red-dead-redemption-2" },
      { store: "Fanatical", price: 19.79, original: 59.99, url: "https://www.fanatical.com/en/game/red-dead-redemption-2" }
    ]
  },
  {
    id: "g5", steamAppId: 292030, rating: 5, releaseDate: "2015-05-19",
    title: "The Witcher 3: Wild Hunt",
    desc: "RPG de fantasía aclamado. Encarna a Geralt de Rivia, cazador de monstruos, en un mundo épico donde tus decisiones forjan el destino de los reinos del norte.",
    descEN: "Acclaimed fantasy RPG. Become Geralt of Rivia, a monster hunter, in an epic world where your decisions shape the fate of the northern kingdoms.",
    deals: [
      { store: "Steam", price: 9.99, original: 39.99, url: "https://store.steampowered.com/app/292030" },
      { store: "GOG", price: 7.49, original: 39.99, url: "https://www.gog.com/en/game/the_witcher_3_wild_hunt" },
      { store: "Epic", price: 9.99, original: 39.99, url: "https://store.epicgames.com/p/the-witcher-3-wild-hunt" },
      { store: "GMG", price: 8.99, original: 39.99, url: "https://www.greenmangaming.com/games/the-witcher-3-wild-hunt" },
      { store: "Humble", price: 9.99, original: 39.99, url: "https://www.humblebundle.com/store/the-witcher-3-wild-hunt" }
    ]
  },
  {
    id: "g6", steamAppId: 990080, rating: 4, releaseDate: "2023-02-10",
    title: "Hogwarts Legacy",
    desc: "Sumérgete en el mundo mágico de Harry Potter. Explora Hogwarts, aprende hechizos y descubre secretos ocultos en una aventura de acción y rol.",
    descEN: "Immerse yourself in the wizarding world of Harry Potter. Explore Hogwarts, learn spells, and uncover hidden secrets in an action RPG adventure.",
    deals: [
      { store: "Steam", price: 20.99, original: 59.99, url: "https://store.steampowered.com/app/990080" },
      { store: "Epic", price: 17.99, original: 59.99, url: "https://store.epicgames.com/p/hogwarts-legacy" },
      { store: "Fanatical", price: 19.49, original: 59.99, url: "https://www.fanatical.com/en/game/hogwarts-legacy" },
      { store: "GMG", price: 20.39, original: 59.99, url: "https://www.greenmangaming.com/games/hogwarts-legacy" }
    ]
  },
  {
    id: "g7", steamAppId: 1593500, rating: 5, releaseDate: "2022-01-14",
    title: "God of War",
    desc: "Kratos y Atreus se embarcan en una aventura épica a través de los reinos nórdicos. Combate visceral, una historia conmovedora y un mundo impresionante.",
    descEN: "Kratos and Atreus embark on an epic journey through the Norse realms. Visceral combat, a heartfelt story, and a stunning world.",
    deals: [
      { store: "Steam", price: 24.99, original: 49.99, url: "https://store.steampowered.com/app/1593500" },
      { store: "Epic", price: 24.99, original: 49.99, url: "https://store.epicgames.com/p/god-of-war" },
      { store: "GMG", price: 22.49, original: 49.99, url: "https://www.greenmangaming.com/games/god-of-war" }
    ]
  },
  {
    id: "g8", steamAppId: 1817070, rating: 4, releaseDate: "2022-08-12",
    title: "Marvel's Spider-Man Remastered",
    desc: "Ponte el traje de Spider-Man y protege la ciudad de Nueva York. Balanceo, combate acrobático y una historia original del trepamuros favorito.",
    descEN: "Put on the Spider-Man suit and protect New York City. Swinging, acrobatic combat, and an original story from the world's favorite wall-crawler.",
    deals: [
      { store: "Steam", price: 29.99, original: 59.99, url: "https://store.steampowered.com/app/1817070" },
      { store: "Epic", price: 29.99, original: 59.99, url: "https://store.epicgames.com/p/marvels-spider-man-remastered" },
      { store: "GMG", price: 26.99, original: 59.99, url: "https://www.greenmangaming.com/games/marvels-spider-man-remastered" }
    ]
  },
  {
    id: "g9", steamAppId: 2050650, rating: 5, releaseDate: "2023-03-24",
    title: "Resident Evil 4 Remake",
    desc: "Reimaginación del clásico survival horror. Sigue a Leon S. Kennedy en una misión de rescate en un pueblo europeo infestado de horrores.",
    descEN: "Reimagining of the classic survival horror. Follow Leon S. Kennedy on a rescue mission in a European village infested with horrors.",
    deals: [
      { store: "Steam", price: 19.99, original: 59.99, url: "https://store.steampowered.com/app/2050650" },
      { store: "Epic", price: 19.99, original: 59.99, url: "https://store.epicgames.com/p/resident-evil-4" },
      { store: "GMG", price: 17.99, original: 59.99, url: "https://www.greenmangaming.com/games/resident-evil-4" },
      { store: "Fanatical", price: 18.74, original: 59.99, url: "https://www.fanatical.com/en/game/resident-evil-4" }
    ]
  },
  {
    id: "g10", steamAppId: 2070690, rating: 5, releaseDate: "2023-10-27",
    title: "Alan Wake 2",
    desc: "Thriller psicológico de survival horror de Remedy. Alterna entre dos realidades mientras un escritor atrapado intenta escapar de una pesadilla.",
    descEN: "Psychological survival horror thriller from Remedy. Switch between two realities as a trapped writer tries to escape a nightmare.",
    deals: [
      { store: "Epic", price: 26.99, original: 59.99, url: "https://store.epicgames.com/p/alan-wake-2" },
      { store: "GMG", price: 28.79, original: 59.99, url: "https://www.greenmangaming.com/games/alan-wake-2" },
      { store: "Fanatical", price: 25.49, original: 59.99, url: "https://www.fanatical.com/en/game/alan-wake-2" }
    ]
  },
  {
    id: "g11", steamAppId: 1627720, rating: 5, releaseDate: "2023-09-19",
    title: "Lies of P",
    desc: "Soulslike ambientado en la Belle Époque. Eres Pinocho en una oscura reinterpretación del cuento clásico. Combate desafiante y atmósfera fascinante.",
    descEN: "Soulslike set in the Belle Époque. You are Pinocchio in a dark reinterpretation of the classic tale. Challenging combat and fascinating atmosphere.",
    deals: [
      { store: "Steam", price: 29.99, original: 59.99, url: "https://store.steampowered.com/app/1627720" },
      { store: "GMG", price: 26.99, original: 59.99, url: "https://www.greenmangaming.com/games/lies-of-p" },
      { store: "Fanatical", price: 25.49, original: 59.99, url: "https://www.fanatical.com/en/game/lies-of-p" }
    ]
  },
  {
    id: "g12", steamAppId: 1623730, rating: 4, releaseDate: "2024-01-19",
    title: "Palworld",
    desc: "Aventura de mundo abierto con criaturas coleccionables. Construye, lucha y explora junto a tus Pals en este fenómeno viral.",
    descEN: "Open-world adventure with collectible creatures. Build, fight, and explore alongside your Pals in this viral phenomenon.",
    deals: [
      { store: "Steam", price: 22.49, original: 29.99, url: "https://store.steampowered.com/app/1623730" },
      { store: "GMG", price: 20.99, original: 29.99, url: "https://www.greenmangaming.com/games/palworld" },
      { store: "Fanatical", price: 21.74, original: 29.99, url: "https://www.fanatical.com/en/game/palworld" }
    ]
  }
];

// ---- Remote data loader ----
function loadRemoteData() {
  return fetch('data.json')
    .then(function (r) { if (!r.ok) throw new Error('Not found'); return r.json(); })
    .then(function (data) {
      if (data.games && data.games.length > 0) {
        GAMES.length = 0;
        data.games.forEach(function (g) { GAMES.push(g); });
      }
      console.log('[STATICA] Loaded remote data: ' + GAMES.length + ' games');
    })
    .catch(function () {
      console.log('[STATICA] Using embedded mock data');
    });
}

// ---- I18n ----
const i18n = {
  es: {
    loginBtn: "Iniciar sesión", settingsTitle: "Configuración",
    language: "Idioma", loginTitle: "Iniciar sesión", emailLabel: "Correo electrónico",
    passwordLabel: "Contraseña", submitBtn: "Entrar",
    formHint: "Demo: usa cualquier email y una contraseña de al menos 6 caracteres",
    loginSuccess: "Sesión iniciada", logoutBtn: "Cerrar sesión",
    noEmail: "Ingresa tu correo electrónico", shortPwd: "La contraseña debe tener al menos 6 caracteres",
    loading: "Cargando...", heroSub: "Las mejores ofertas de videojuegos, comparadas de todas las tiendas",
    buyOn: "Comprar en", best: "Mejor", off: "OFF",
    searchPlaceholder: "Buscar juegos...",
    ofertas: "Ofertas", favoritos: "Favoritos", nuevos: "Nuevos lanzamientos", catalogo: "Catálogo",
    ofertasDesc: "Las mejores ofertas del día", nuevosDesc: "Últimos lanzamientos",
    wishlistEmpty: "Tu lista de favoritos está vacía. Haz clic en ⭐ en cualquier juego para añadirlo.",
    setPrice: "Precio deseado", notifyOn: "Notificando", notifyOff: "Sin notificar",
    historicalLow: "Mín", historicalHigh: "Máx",
    addFav: "Añadir a favoritos", removeFav: "Quitar de favoritos", remove: "Quitar",
    searchNoResults: "No se encontraron juegos para", matching: "resultados para"
  },
  en: {
    loginBtn: "Sign in", settingsTitle: "Settings",
    language: "Language", loginTitle: "Sign in", emailLabel: "Email",
    passwordLabel: "Password", submitBtn: "Sign in",
    formHint: "Demo: use any email and a password of at least 6 characters",
    loginSuccess: "Signed in", logoutBtn: "Sign out",
    noEmail: "Enter your email", shortPwd: "Password must be at least 6 characters",
    loading: "Loading...", heroSub: "The best video game deals, compared across all stores",
    buyOn: "Buy on", best: "Best", off: "OFF",
    searchPlaceholder: "Search games...",
    ofertas: "Deals", favoritos: "Wishlist", nuevos: "New releases", catalogo: "Catalog",
    ofertasDesc: "Best deals of the day", nuevosDesc: "Latest releases",
    wishlistEmpty: "Your wishlist is empty. Click ⭐ on any game to add it.",
    setPrice: "Target price", notifyOn: "Notifying", notifyOff: "Not notifying",
    historicalLow: "Min", historicalHigh: "Max",
    addFav: "Add to wishlist", removeFav: "Remove from wishlist", remove: "Remove",
    searchNoResults: "No games found for", matching: "results for"
  }
};

function t(key) {
  var lang = localStorage.getItem("lang") || "es";
  return i18n[lang] && i18n[lang][key] || key;
}

// ---- Helpers ----
var STORE_LOGOS = {
  Steam: "#1b2838", Epic: "#2a2a2a", GOG: "#522b5c",
  Humble: "#cb2026", GMG: "#121212", Fanatical: "#1a1a2e"
};
var STORE_TEXT = {
  Steam: "#66c0f4", Epic: "#ffffff", GOG: "#ffffff",
  Humble: "#ffffff", GMG: "#76b900", Fanatical: "#e94560"
};

function getDiscount(original, price) {
  return Math.round((1 - price / original) * 100);
}

function getBestDeal(deals) {
  var best = deals[0];
  for (var i = 1; i < deals.length; i++) {
    if (deals[i].price < best.price) best = deals[i];
  }
  return best;
}

function getSteamImageUrl(appId) {
  return "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/" + appId + "/header.jpg";
}

function getStoreLogo(store) {
  var letter = store === "GMG" ? "G" : store.charAt(0);
  var bg = STORE_LOGOS[store] || "#333";
  var color = STORE_TEXT[store] || "#fff";
  return '<span class="store-logo" style="background:' + bg + ";color:" + color + '">' + letter + '</span>';
}

function getGradientColor(id) {
  var colors = {
    g1: "#1a1a2e,#16213e", g2: "#2d1b4e,#1a1a2e", g3: "#3d1a1a,#1a1a2e",
    g4: "#1a2e1a,#16213e", g5: "#1a2e2e,#16213e", g6: "#2e1a2e,#16213e",
    g7: "#2e2e1a,#16213e", g8: "#1a1a3e,#16213e", g9: "#3e1a1a,#16213e",
    g10: "#1a1a2e,#2e1a1a", g11: "#2e1a2e,#1a1a2e", g12: "#1a2e1a,#2e2e1a"
  };
  return colors[id] || "#1a1a2e,#16213e";
}

function getRatingStars(rating) {
  var s = "";
  for (var i = 0; i < 5; i++) s += i < rating ? "★" : "☆";
  return s;
}

// ---- Wishlist ----
var WL_KEY = "statica_wishlist";

function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WL_KEY)) || {}; } catch (e) { return {}; }
}

function saveWishlist(wl) {
  localStorage.setItem(WL_KEY, JSON.stringify(wl));
}

function isFav(gameId) {
  return !!getWishlist()[gameId];
}

function toggleFav(gameId) {
  var wl = getWishlist();
  if (wl[gameId]) {
    delete wl[gameId];
    saveWishlist(wl);
    return false;
  } else {
    wl[gameId] = { threshold: null, addedAt: new Date().toISOString() };
    saveWishlist(wl);
    return true;
  }
}

function setThreshold(gameId, value) {
  var wl = getWishlist();
  if (wl[gameId]) {
    wl[gameId].threshold = Math.round(value * 100) / 100;
    saveWishlist(wl);
  }
}

function getHistoricalLow(game) {
  var best = getBestDeal(game.deals);
  return Math.round(best.price * 0.7 * 100) / 100;
}

function getHistoricalHigh(game) {
  var max = 0;
  for (var i = 0; i < game.deals.length; i++) {
    if (game.deals[i].original > max) max = game.deals[i].original;
  }
  return max;
}

function getDefaultThreshold(game) {
  return getBestDeal(game.deals).price;
}

function getGameById(id) {
  for (var i = 0; i < GAMES.length; i++) {
    if (GAMES[i].id === id) return GAMES[i];
  }
  return null;
}

// ---- Sorting ----
function sortByDiscount(games) {
  return games.slice().sort(function (a, b) {
    return getDiscount(getBestDeal(b.deals).original, getBestDeal(b.deals).price) -
           getDiscount(getBestDeal(a.deals).original, getBestDeal(a.deals).price);
  });
}

function sortByDate(games) {
  return games.slice().sort(function (a, b) {
    return new Date(b.releaseDate) - new Date(a.releaseDate);
  });
}

// ---- Deal Card Renderer ----
function createDealCard(game, lang) {
  var isES = lang === "es";
  var title = game.title;
  var desc = isES ? game.desc : game.descEN;
  var best = getBestDeal(game.deals);
  var imgUrl = getSteamImageUrl(game.steamAppId);
  var stars = getRatingStars(game.rating);
  var isFavGame = isFav(game.id);
  var favStar = isFavGame ? ' class="fav-btn is-fav"' : ' class="fav-btn"';
  var favLabel = isFavGame ? t("removeFav") : t("addFav");

  var html = '<article class="deal-card" data-game-id="' + game.id + '">';
  html += '<div class="deal-image">';
  html += '<img src="' + imgUrl + '" alt="' + title + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">';
  html += '<div class="deal-image-fallback" style="display:none;background:linear-gradient(135deg,' + getGradientColor(game.id) + ')">' + title + '</div>';
  html += '<button' + favStar + ' data-game-id="' + game.id + '" aria-label="' + favLabel + '"><svg viewBox="0 0 24 24" width="16" height="16" fill="' + (isFavGame ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button>';
  var discount = getDiscount(best.original, best.price);
  if (discount > 0) html += '<div class="deal-badge">-' + discount + '% ' + t("off") + '</div>';
  html += '</div>';
  html += '<div class="deal-body">';
  html += '<div class="deal-meta"><span class="deal-store">' + best.store + '</span><span class="deal-rating">' + stars + '</span></div>';
  html += '<h3 class="deal-title">' + title + '</h3>';
  html += '<p class="deal-desc">' + desc + '</p>';
  html += '<div class="deal-prices">';
  for (var i = 0; i < game.deals.length; i++) {
    var d = game.deals[i];
    var isBest = d === best;
    html += '<div class="price-row' + (isBest ? " best" : "") + '">';
    html += getStoreLogo(d.store);
    html += '<span class="store-name">' + d.store + '</span>';
    html += '<span class="price-old">$' + d.original.toFixed(2) + '</span>';
    html += '<span class="price-new">$' + d.price.toFixed(2) + '</span>';
    if (isBest) html += '<span class="best-tag">' + t("best") + '</span>';
    html += "</div>";
  }
  html += '</div>';
  html += '<a href="' + best.url + '" class="deal-cta" target="_blank" rel="noopener">' + t("buyOn") + " " + best.store + " →</a>";
  html += "</div></article>";
  return html;
}

// ---- Section Renderers ----
function renderDealSection(el, items, lang) {
  if (!items || items.length === 0) {
    el.innerHTML = '<div class="loading">' + t("loading") + "</div>";
    return;
  }
  var grid = document.createElement("div");
  grid.className = "deal-grid";
  for (var i = 0; i < items.length; i++) {
    grid.innerHTML += createDealCard(items[i], lang);
  }
  el.innerHTML = "";
  el.appendChild(grid);
}

function renderOfertas(el, lang) {
  var top = sortByDiscount(GAMES).slice(0, 12);
  el.innerHTML = '<div class="section-heading">🔥 ' + t("ofertas") + '</div>';
  renderDealSection(el, top, lang);
}

function createCatalogCard(game, lang) {
  var best = getBestDeal(game.deals);
  var imgUrl = getSteamImageUrl(game.steamAppId);
  var discount = getDiscount(best.original, best.price);

  var html = '<article class="catalog-card" data-game-id="' + game.id + '">';
  html += '<div class="catalog-image">';
  html += '<img src="' + imgUrl + '" alt="' + game.title + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">';
  html += '<div class="catalog-fallback" style="display:none;background:linear-gradient(135deg,' + getGradientColor(game.id) + ')">' + game.title + '</div>';
  html += '</div>';
  html += '<div class="catalog-info">';
  html += '<div class="catalog-title">' + game.title + '</div>';
  html += '<div class="catalog-row">';
  html += '<span class="catalog-price">$' + best.price.toFixed(2) + '</span>';
  if (discount > 0) html += '<span class="catalog-discount">-' + discount + '%</span>';
  html += '</div>';
  html += '<div class="catalog-store">' + best.store + '</div>';
  html += '</div>';
  html += '<a href="' + best.url + '" class="catalog-overlay-link" target="_blank" rel="noopener"></a>';
  html += '</article>';
  return html;
}

function renderCatalogo(el, lang) {
  var html = '<div class="section-heading">📋 ' + t("catalogo") + '</div>';
  html += '<div class="catalog-grid">';
  for (var i = 0; i < GAMES.length; i++) {
    html += createCatalogCard(GAMES[i], lang);
  }
  html += '</div>';
  el.innerHTML = html;
}

function renderNuevos(el, lang) {
  var sorted = sortByDate(GAMES);
  el.innerHTML = '<div class="section-heading">🆕 ' + t("nuevos") + '</div>';
  renderDealSection(el, sorted, lang);
}

function renderFavoritos(el, lang) {
  var wishlist = getWishlist();
  var keys = Object.keys(wishlist);
  if (keys.length === 0) {
    el.innerHTML = '<div class="loading">' + t("wishlistEmpty") + '</div>';
    return;
  }

  var html = '<div class="fav-list">';
  for (var i = 0; i < keys.length; i++) {
    var game = getGameById(keys[i]);
    if (!game) continue;
    var best = getBestDeal(game.deals);
    var imgUrl = getSteamImageUrl(game.steamAppId);
    var histLow = getHistoricalLow(game);
    var histHigh = getHistoricalHigh(game);
    var threshold = wishlist[keys[i]].threshold;
    if (threshold === null || threshold === undefined) threshold = getDefaultThreshold(game);
    var isNotifActive = best.price <= threshold;

    html += '<div class="fav-card" data-game-id="' + game.id + '">';
    html += '<div class="fav-card-image">';
    html += '<img src="' + imgUrl + '" alt="' + game.title + '" loading="lazy" onerror="this.style.display=\'none\';this.parentElement.style.background=\'linear-gradient(135deg,' + getGradientColor(game.id) + ')\'">';
    html += '</div>';
    html += '<div class="fav-card-body">';
    html += '<div class="fav-card-top">';
    html += '<div class="fav-card-title">' + game.title + '</div>';
    html += '<div class="fav-card-price">$' + best.price.toFixed(2) + '</div>';
    html += '</div>';
    html += '<div class="fav-card-store">' + best.store + '</div>';
    html += '<div class="fav-card-slider-row">';
    html += '<label>' + t("setPrice") + '</label>';
    html += '<input type="range" class="fav-card-slider" data-game-id="' + game.id + '" min="' + histLow + '" max="' + histHigh + '" step="0.01" value="' + threshold + '">';
    html += '<span class="fav-card-slider-val" data-game-id="' + game.id + '">$' + threshold.toFixed(2) + '</span>';
    html += '</div>';
    html += '<div class="fav-price-range"><span>' + t("historicalLow") + ': $' + histLow.toFixed(2) + '</span><span>' + t("historicalHigh") + ': $' + histHigh.toFixed(2) + '</span></div>';
    html += '<div class="fav-card-bottom">';
    html += '<div class="fav-card-notif-status' + (isNotifActive ? ' active' : '') + '"><span class="dot"></span> ' + (isNotifActive ? t("notifyOn") : t("notifyOff")) + '</div>';
    html += '<button class="fav-card-remove" data-game-id="' + game.id + '">' + t("remove") + '</button>';
    html += '</div></div></div>';
  }
  html += '</div>';
  el.innerHTML = html;
}

// ---- Nav ----
function switchSection(sectionName) {
  var section = document.getElementById(sectionName);
  if (!section) return;
  document.querySelectorAll(".section").forEach(function (s) { s.classList.remove("active"); });
  section.classList.add("active");
  // Render if empty
  if (section.innerHTML === "") {
    renderSection(sectionName, section, localStorage.getItem("lang") || "es");
  }
  // Update nav active state
  document.querySelectorAll(".nav-link, .nav-dropdown-menu button").forEach(function (b) { b.classList.remove("active"); });
  if (sectionName === "ofertas" || sectionName === "favoritos" || sectionName === "nuevos") {
    document.getElementById("inicioToggle").classList.add("active");
    var menuBtn = document.querySelector('.nav-dropdown-menu button[data-section="' + sectionName + '"]');
    if (menuBtn) menuBtn.classList.add("active");
  } else {
    document.querySelector('.nav-link[data-section="' + sectionName + '"]').classList.add("active");
  }
  // Close dropdown
  document.getElementById("inicioMenu").classList.remove("open");
  // Close search
  document.getElementById("navSearchResults").classList.remove("open");
}

function renderSection(sectionName, el, lang) {
  el.innerHTML = '<div class="loading"><div class="spinner"></div> <span>' + t("loading") + "</span></div>";
  setTimeout(function () {
    switch (sectionName) {
      case "ofertas": renderOfertas(el, lang); break;
      case "favoritos": renderFavoritos(el, lang); break;
      case "nuevos": renderNuevos(el, lang); break;
      case "catalogo": renderCatalogo(el, lang); break;
    }
  }, 150);
}

// ---- Init ----
document.addEventListener("DOMContentLoaded", async function () {
  await loadRemoteData();
  var lang = localStorage.getItem("lang") || "es";

  // Language
  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.dataset.i18n;
      var val = i18n[lang] && i18n[lang][key];
      if (key === "searchPlaceholder" && val) { el.placeholder = val; return; }
      if (val) el.textContent = val;
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    localStorage.setItem("lang", lang);
  }

  applyLang(lang);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var newLang = btn.dataset.lang;
      applyLang(newLang);
      var active = document.querySelector(".section.active");
      if (active) {
        var id = active.id;
        renderSection(id, active, newLang);
      }
      var loginText = document.querySelector(".btn-text");
      if (loginText && !document.querySelector(".btn-login.logged-in")) {
        loginText.textContent = i18n[newLang].loginBtn;
      }
    });
  });

  // ---- Nav ----
  // Dropdown toggle
  document.getElementById("inicioToggle").addEventListener("click", function (e) {
    e.stopPropagation();
    document.getElementById("inicioMenu").classList.toggle("open");
  });

  // Dropdown items
  document.querySelectorAll(".nav-dropdown-menu button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      switchSection(btn.dataset.section);
    });
  });

  // Direct nav links
  document.querySelectorAll(".nav-link[data-section]").forEach(function (link) {
    link.addEventListener("click", function () {
      switchSection(link.dataset.section);
    });
  });

  // Close dropdown on outside click
  document.addEventListener("click", function () {
    document.getElementById("inicioMenu").classList.remove("open");
  });

  // ---- Search AI ----
  var navSearch = document.getElementById("navSearch");
  var searchResults = document.getElementById("navSearchResults");
  var searchTimer = null;

  function doSearch() {
    var q = navSearch.value.trim().toLowerCase();
    if (!q || q.length < 2) {
      searchResults.classList.remove("open");
      return;
    }

    var isES = (localStorage.getItem("lang") || "es") === "es";
    var matches = [];
    for (var i = 0; i < GAMES.length; i++) {
      var g = GAMES[i];
      var desc = isES ? g.desc : g.descEN;
      if (g.title.toLowerCase().indexOf(q) !== -1 || desc.toLowerCase().indexOf(q) !== -1) {
        matches.push(g);
      }
    }

    var html = "";
    if (matches.length === 0) {
      html = '<div class="nav-search-empty">' + t("searchNoResults") + ' "' + q + '"</div>';
    } else {
      html = '<div class="nav-search-empty" style="padding:0.5rem 0.85rem;text-align:left;font-size:0.72rem;color:var(--text-muted)">' + matches.length + ' ' + t("matching") + ' "' + q + '"</div>';
      for (var j = 0; j < Math.min(matches.length, 8); j++) {
        var g = matches[j];
        var best = getBestDeal(g.deals);
        var img = getSteamImageUrl(g.steamAppId);
        html += '<div class="nav-search-item" data-game-id="' + g.id + '">';
        html += '<img src="' + img + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">';
        html += '<div class="nav-search-item-info">';
        html += '<div class="nav-search-item-title">' + g.title + '</div>';
        html += '<div class="nav-search-item-price">$' + best.price.toFixed(2) + ' <span class="nav-search-item-store">' + best.store + '</span></div>';
        html += '</div></div>';
      }
    }

    searchResults.innerHTML = html;
    searchResults.classList.add("open");
  }

  navSearch.addEventListener("input", function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(doSearch, 250);
  });

  navSearch.addEventListener("focus", function () {
    if (navSearch.value.trim().length >= 2) doSearch();
  });

  // Click search result → switch to game offer
  searchResults.addEventListener("click", function (e) {
    var item = e.target.closest(".nav-search-item");
    if (!item) return;
    var gameId = item.dataset.gameId;
    // Switch to ofertas section and scroll to game card
    switchSection("ofertas");
    navSearch.value = "";
    searchResults.classList.remove("open");
    // Scroll to the game card after render
    setTimeout(function () {
      var card = document.querySelector('.deal-card[data-game-id="' + gameId + '"]');
      if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  });

  // Close search on outside click
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-search")) {
      searchResults.classList.remove("open");
    }
  });

  // ---- Wishlist Event Delegation ----
  document.addEventListener("click", function (e) {
    var favBtn = e.target.closest(".fav-btn");
    if (favBtn) {
      var gameId = favBtn.dataset.gameId;
      if (!gameId) return;
      e.preventDefault();
      var added = toggleFav(gameId);
      if (added) {
        favBtn.classList.add("is-fav");
        favBtn.querySelector("svg").setAttribute("fill", "currentColor");
        favBtn.setAttribute("aria-label", t("removeFav"));
      } else {
        favBtn.classList.remove("is-fav");
        favBtn.querySelector("svg").setAttribute("fill", "none");
        favBtn.setAttribute("aria-label", t("addFav"));
      }
      return;
    }

    var removeBtn = e.target.closest(".fav-card-remove");
    if (removeBtn) {
      var gameId = removeBtn.dataset.gameId;
      if (!gameId) return;
      toggleFav(gameId);
      var favSection = document.getElementById("favoritos");
      if (favSection && favSection.classList.contains("active")) {
        renderFavoritos(favSection, currLang());
      }
      document.querySelectorAll('.deal-card[data-game-id="' + gameId + '"] .fav-btn').forEach(function (btn) {
        btn.classList.remove("is-fav");
        btn.querySelector("svg").setAttribute("fill", "none");
        btn.setAttribute("aria-label", t("addFav"));
      });
      return;
    }
  });

  document.addEventListener("input", function (e) {
    var slider = e.target.closest(".fav-card-slider");
    if (!slider) return;
    var gameId = slider.dataset.gameId;
    var val = parseFloat(slider.value);
    setThreshold(gameId, val);
    var valDisplay = document.querySelector('.fav-card-slider-val[data-game-id="' + gameId + '"]');
    if (valDisplay) valDisplay.textContent = "$" + val.toFixed(2);
    var game = getGameById(gameId);
    if (game) {
      var best = getBestDeal(game.deals);
      var statusEl = document.querySelector('.fav-card[data-game-id="' + gameId + '"] .fav-card-notif-status');
      if (statusEl) {
        var isActive = best.price <= val;
        statusEl.classList.toggle("active", isActive);
        statusEl.innerHTML = '<span class="dot"></span> ' + (isActive ? t("notifyOn") : t("notifyOff"));
      }
    }
  });

  // ---- Settings ----
  var settingsBtn = document.getElementById("settingsBtn");
  var settingsPanel = document.getElementById("settingsPanel");
  var settingsOverlay = document.getElementById("settingsOverlay");
  var settingsClose = document.getElementById("settingsClose");

  function openSettings() { settingsPanel.classList.add("open"); settingsOverlay.classList.add("open"); }
  function closeSettings() { settingsPanel.classList.remove("open"); settingsOverlay.classList.remove("open"); }

  settingsBtn.addEventListener("click", openSettings);
  settingsClose.addEventListener("click", closeSettings);
  settingsOverlay.addEventListener("click", closeSettings);

  // ---- Login ----
  var loginBtn = document.getElementById("loginBtn");
  var loginModal = document.getElementById("loginModal");
  var loginOverlay = document.getElementById("loginOverlay");
  var loginClose = document.getElementById("loginClose");
  var loginForm = document.getElementById("loginForm");
  var loginError = document.getElementById("loginError");
  var loginSuccess = document.getElementById("loginSuccess");
  var loginSuccessEmail = document.getElementById("loginSuccessEmail");
  var logoutBtn = document.getElementById("logoutBtn");
  var loginEmail = document.getElementById("loginEmail");
  var loginPassword = document.getElementById("loginPassword");

  function currLang() { return localStorage.getItem("lang") || "es"; }

  function openLogin() {
    loginModal.classList.add("open");
    loginOverlay.classList.add("open");
    updateLoginUI();
  }

  function closeLogin() {
    loginModal.classList.remove("open");
    loginOverlay.classList.remove("open");
    loginError.classList.remove("show");
  }

  function updateLoginUI() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      loginForm.style.display = "none";
      loginSuccess.classList.add("show");
      loginSuccessEmail.textContent = user.email;
      loginBtn.classList.add("logged-in");
      loginBtn.querySelector(".btn-text").textContent = user.email;
    } else {
      loginForm.style.display = "block";
      loginSuccess.classList.remove("show");
      loginBtn.classList.remove("logged-in");
      loginBtn.querySelector(".btn-text").textContent = i18n[currLang()].loginBtn;
    }
  }

  loginBtn.addEventListener("click", openLogin);
  loginClose.addEventListener("click", closeLogin);
  loginOverlay.addEventListener("click", closeLogin);

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = loginEmail.value.trim();
    var password = loginPassword.value;
    var l = currLang();
    if (!email) { loginError.textContent = i18n[l].noEmail; loginError.classList.add("show"); return; }
    if (password.length < 6) { loginError.textContent = i18n[l].shortPwd; loginError.classList.add("show"); return; }
    loginError.classList.remove("show");
    localStorage.setItem("user", JSON.stringify({ email: email }));
    loginForm.reset();
    updateLoginUI();
  });

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("user");
    updateLoginUI();
  });

  updateLoginUI();

  // ---- Render default (Ofertas) ----
  var defaultSection = document.getElementById("ofertas");
  renderSection("ofertas", defaultSection, lang);
  switchSection("ofertas");

  // Preload other sections
  var catSection = document.getElementById("catalogo");
  var nuevosSection = document.getElementById("nuevos");
  var favSection = document.getElementById("favoritos");
  renderSection("catalogo", catSection, lang);
  renderSection("nuevos", nuevosSection, lang);
  renderSection("favoritos", favSection, lang);

  // ---- Auto Refresh ----
  var refreshInterval = 5 * 60 * 1000;
  var lastUpdated = new Date();

  function getTimeAgo(date) {
    var diff = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diff < 60) return lang === "es" ? "recién actualizado" : "just updated";
    if (diff < 3600) {
      var m = Math.floor(diff / 60);
      return lang === "es" ? "hace " + m + " min" : m + " min ago";
    }
    var h = Math.floor(diff / 3600);
    return lang === "es" ? "hace " + h + "h" : h + "h ago";
  }

  function addRefreshBadge() {
    var mainEl = document.querySelector("main");
    if (!mainEl) return;
    var existing = document.querySelector(".refresh-badge");
    if (existing) existing.remove();
    var badge = document.createElement("div");
    badge.className = "refresh-badge";
    badge.innerHTML = '<span class="dot"></span> ' + getTimeAgo(lastUpdated);
    mainEl.insertBefore(badge, mainEl.firstChild);
  }

  addRefreshBadge();

  setInterval(function () {
    lastUpdated = new Date();
    var badge = document.querySelector(".refresh-badge");
    if (badge) badge.innerHTML = '<span class="dot"></span> ' + getTimeAgo(lastUpdated);
    var activeSection = document.querySelector(".section.active");
    if (activeSection) {
      var currentLang = localStorage.getItem("lang") || "es";
      var id = activeSection.id;
      renderSection(id, activeSection, currentLang);
    }
  }, refreshInterval);
});
