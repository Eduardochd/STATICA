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

// Tag mock games as seed so they are never removed
if (GAMES.length) GAMES.forEach(function(g){ if (!g.source) g.source = "seed"; });

// ---- Remote data loader ----
function loadRemoteData() {
  return fetch('data.json')
    .then(function (r) { if (!r.ok) throw new Error('Not found'); return r.json(); })
    .then(function (data) {
      if (data.games && data.games.length > 0) {
        GAMES.length = 0;
        data.games.forEach(function (g) { g.source = "seed"; GAMES.push(g); });
      }
      console.log('[STATICA] Loaded remote data: ' + GAMES.length + ' games');
    })
    .catch(function () {
      console.log('[STATICA] Using embedded mock data');
    });
}

// ---- CheapShark Client Fetcher (every 15 min) ----
var CS_API = "https://www.cheapshark.com/api/1.0/deals?storeID=1,3,7,11,17,21,25,27,30,31,32&onSale=1&metacriticScore=60&pageSize=50&sortBy=DealRating";
var CS_STORE_NAMES = { 1:"Steam", 3:"Xbox Live", 7:"GOG", 8:"Origin", 11:"Humble", 13:"Uplay", 17:"Green Man Gaming", 21:"GameBillet", 25:"Gamesplanet", 27:"Fanatical", 30:"2Game", 31:"WinGameStore", 32:"DLGamer" };
var csIdCounter = 0;

function saveGamesCache() {
  try { localStorage.setItem("stGames", JSON.stringify(GAMES)); } catch(e) {}
}

function loadGamesCache() {
  try {
    var raw = localStorage.getItem("stGames");
    if (raw) { var arr = JSON.parse(raw); if (arr && arr.length) { GAMES.length = 0; arr.forEach(function(g){ GAMES.push(g); }); return true; } }
  } catch(e) {}
  return false;
}

function csStoreUrl(steamAppId, storeId, dealId) {
  if (storeId === 1 && steamAppId) return "https://store.steampowered.com/app/" + steamAppId;
  return "https://www.cheapshark.com/redirect?dealID=" + dealId;
}

function fetchCheapSharkDeals() {
  return fetch(CS_API).then(function(r) { if (!r.ok) throw new Error("CS fetch fail"); return r.json(); });
}

function mergeDealResults(apiDeals) {
  if (!apiDeals || !apiDeals.length) return 0;
  var activeKeys = {};
  var added = 0, updated = 0, expired = 0;

  // Build map of existing games by steamAppId and title
  var gameByAppId = {}, gameByTitle = {};
  for (var i = 0; i < GAMES.length; i++) {
    var g = GAMES[i];
    if (g.steamAppId) gameByAppId[g.steamAppId] = g;
    gameByTitle[g.title.toLowerCase()] = g;
  }

  // Process each deal from API
  apiDeals.forEach(function(d) {
    var appId = d.steamAppID ? parseInt(d.steamAppID) : 0;
    var title = (d.title || "").trim();
    var storeId = parseInt(d.storeID);
    var storeName = CS_STORE_NAMES[storeId] || "Store " + storeId;
    var dealKey = appId + "-" + storeId;
    activeKeys[dealKey] = true;
    var price = parseFloat(d.salePrice);
    var original = parseFloat(d.normalPrice);
    if (!price && price !== 0) return;
    if (!original) original = price * 1.2;

    var game = appId ? gameByAppId[appId] : null;
    if (!game) game = gameByTitle[title.toLowerCase()];

    if (game) {
      var existingDeal = null;
      for (var j = 0; j < game.deals.length; j++) {
        if (game.deals[j].dealId && game.deals[j].dealId === d.dealID) {
          existingDeal = game.deals[j];
          break;
        }
      }
      if (!existingDeal && game.source === "cheapshark") {
        for (var j = 0; j < game.deals.length; j++) {
          if (!game.deals[j].dealId && game.deals[j].store === storeName) {
            existingDeal = game.deals[j];
            break;
          }
        }
      }
      if (existingDeal) {
        if (existingDeal.price !== price || existingDeal.original !== original) {
          existingDeal.price = price;
          existingDeal.original = original;
          existingDeal.url = csStoreUrl(appId, storeId, d.dealID);
          existingDeal.stale = false;
          updated++;
        } else {
          existingDeal.stale = false;
        }
      } else {
        game.deals.push({ store: storeName, price: price, original: original, url: csStoreUrl(appId, storeId, d.dealID), dealId: d.dealID, source: "cheapshark", stale: false });
        added++;
      }
    } else if (title && appId) {
      // New game from CheapShark
      csIdCounter++;
      var newGame = {
        id: "cs_" + Date.now() + "_" + csIdCounter,
        steamAppId: appId,
        rating: Math.round((d.metacriticScore || 70) / 20),
        releaseDate: "2025-01-01",
        title: title,
        desc: "Oferta destacada: " + title + " con " + Math.round((1 - price / original) * 100) + "% de descuento.",
        descEN: "Featured deal: " + title + " with " + Math.round((1 - price / original) * 100) + "% off.",
        deals: [{ store: storeName, price: price, original: original, url: csStoreUrl(appId, storeId, d.dealID), dealId: d.dealID, source: "cheapshark", stale: false }],
        source: "cheapshark"
      };
      GAMES.push(newGame);
      gameByAppId[appId] = newGame;
      gameByTitle[title.toLowerCase()] = newGame;
      added++;
    }
  });

  // Remove stale deals and games with no deals
  for (var k = GAMES.length - 1; k >= 0; k--) {
    var g = GAMES[k];
    var hadExpired = false;
    for (var j = g.deals.length - 1; j >= 0; j--) {
      var deal = g.deals[j];
      if (deal.source === "cheapshark") {
        var dk = (g.steamAppId || 0) + "-" + getStoreIdByName(deal.store);
        if (!activeKeys[dk]) {
          g.deals.splice(j, 1);
          expired++;
          hadExpired = true;
        }
      }
    }
    if (g.source === "cheapshark" && g.deals.length === 0) {
      GAMES.splice(k, 1);
    }
  }

  saveGamesCache();
  return { added: added, updated: updated, expired: expired };
}

function getStoreIdByName(name) {
  for (var id in CS_STORE_NAMES) {
    if (CS_STORE_NAMES[id] === name) return parseInt(id);
  }
  return 0;
}

function initCheapSharkFetcher() {
  fetchCheapSharkDeals().then(function(deals) {
    var r = mergeDealResults(deals);
    if (r.added || r.updated || r.expired) console.log("[STATICA] CS update: +" + r.added + " ~" + r.updated + " -" + r.expired);
    // Re-render active section
    var active = document.querySelector(".section.active");
    if (active) {
      var currentLang = localStorage.getItem("lang") || "es";
      renderSection(active.id, active, currentLang);
    }
  }).catch(function(e) { console.log("[STATICA] CS fetch error:", e); });
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
    searchNoResults: "No se encontraron juegos para", matching: "resultados para",
    registerTitle: "Crear cuenta", registerBtn: "Crear cuenta", confirmLabel: "Confirmar contraseña",
    registerSuccess: "Cuenta creada correctamente", accountExists: "Ya existe una cuenta con este correo",
    passwordsDontMatch: "Las contraseñas no coinciden", account: "Cuenta",
    emailNotif: "Notificaciones por correo", emailjsConfig: "Configurar EmailJS",
    saveEmailjs: "Guardar", emailjsHint: "Obtén estos datos desde emailjs.com (gratis)",
    emailjsSaved: "Configuración guardada",
    testNotif: "Enviar notificación de prueba",
    notifSent: "Notificación de prueba enviada",
    registerWelcome: "¡Bienvenido! Ahora puedes recibir alertas de ofertas en tu correo.",
    emailOn: "Notificaciones activadas", emailOff: "Notificaciones desactivadas",
    googleSignIn: "Iniciar sesión con Google", googleConfig: "Configurar Google Client ID",
    saveGoogle: "Guardar", googleHint: "1) Ve a console.cloud.google.com 2) Crea un proyecto 3) APIs > Credenciales > Crear ID de cliente OAuth 2.0 (tipo Aplicación web) 4) Agrega tu origen como Authorized JavaScript origin",
    googleConfigured: "Configurado", googleNotConfigured: "No configurado",
    or: "o",     signInGoogle: "Iniciar sesión con Google",
    notifPrefLabel: "Preferencias de notificaciones",
    notifWishlist: "Solo ofertas de mi lista de deseos",
    notifAll: "Ofertas de todos los juegos",
    notifScope: "Recibir ofertas",
    notifWishlistShort: "Lista de deseos",
    notifAllShort: "Todos los juegos",
    welcomeSubject: "¡Bienvenido a STATICA!",
    welcomeMsg: "¡Gracias por registrarte en STATICA! Ahora recibirás alertas automáticas cuando los juegos que te interesan estén en oferta.\n\nPuedes cambiar tus preferencias en Configuración > Notificaciones.\n\n¡Que encuentres grandes ofertas!",
    welcomeMsgAll: "¡Gracias por registrarte en STATICA! Ahora recibirás alertas automáticas de las mejores ofertas en todos los juegos.\n\nPuedes cambiar tus preferencias en Configuración > Notificaciones.\n\n¡Que encuentres grandes ofertas!",
    dealSubjectWishlist: "¡Ofertas en tus juegos favoritos!",
    dealSubjectAll: "¡Las mejores ofertas de videojuegos!",
    dealBodyWishlist: "Estos juegos de tu lista de favoritos están en oferta:\n\n",
    dealBodyAll: "Estas son las mejores ofertas disponibles ahora:\n\n",
    dealFooter: "\n\nVisita STATICA para más detalles.",
    noNotifsToday: "No hay nuevas ofertas en este momento"
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
    searchNoResults: "No games found for", matching: "results for",
    registerTitle: "Create account", registerBtn: "Create account", confirmLabel: "Confirm password",
    registerSuccess: "Account created successfully", accountExists: "An account with this email already exists",
    passwordsDontMatch: "Passwords do not match", account: "Account",
    emailNotif: "Email notifications", emailjsConfig: "Configure EmailJS",
    saveEmailjs: "Save", emailjsHint: "Get these from emailjs.com (free)",
    emailjsSaved: "Settings saved",
    testNotif: "Send test notification",
    notifSent: "Test notification sent",
    registerWelcome: "Welcome! Now you can receive deal alerts in your email.",
    emailOn: "Notifications enabled", emailOff: "Notifications disabled",
    googleSignIn: "Sign in with Google", googleConfig: "Configure Google Client ID",
    saveGoogle: "Save", googleHint: "1) Go to console.cloud.google.com 2) Create a project 3) APIs > Credentials > Create OAuth 2.0 Client ID (Web application type) 4) Add your origin as Authorized JavaScript origin",
    googleConfigured: "Configured", googleNotConfigured: "Not configured",
    or: "or",     signInGoogle: "Sign in with Google",
    notifPrefLabel: "Notification preferences",
    notifWishlist: "Only deals from my wishlist",
    notifAll: "Deals on all games",
    notifScope: "Get deals",
    notifWishlistShort: "My wishlist",
    notifAllShort: "All games",
    welcomeSubject: "Welcome to STATICA!",
    welcomeMsg: "Thank you for registering at STATICA! You will now receive automatic alerts when your favorite games go on sale.\n\nYou can change your preferences in Settings > Notifications.\n\nHappy deal hunting!",
    welcomeMsgAll: "Thank you for registering at STATICA! You will now receive automatic alerts for the best deals on all games.\n\nYou can change your preferences in Settings > Notifications.\n\nHappy deal hunting!",
    dealSubjectWishlist: "Deals on your favorite games!",
    dealSubjectAll: "Best video game deals!",
    dealBodyWishlist: "These games from your wishlist are now on sale:\n\n",
    dealBodyAll: "Here are the best deals available right now:\n\n",
    dealFooter: "\n\nVisit STATICA for more details.",
    noNotifsToday: "No new deals at this time"
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

function findGame(id) {
  for (var i = 0; i < GAMES.length; i++) {
    if (GAMES[i].id === id) return GAMES[i];
  }
  return null;
}

function getThreshold(gameId) {
  var wl = JSON.parse(localStorage.getItem("wishlist") || "[]");
  for (var i = 0; i < wl.length; i++) {
    if (wl[i].id === gameId) return wl[i].threshold;
  }
  return 0;
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
  if (best.price === 0) {
    html += '<div class="deal-badge badge-free">FREE</div>';
  } else if (discount > 75) {
    html += '<div class="deal-badge badge-big">>75%</div>';
  } else if (discount > 0) {
    html += '<div class="deal-badge">-' + discount + '% ' + t("off") + '</div>';
  }
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
  if (best.price === 0) {
    html += '<span class="catalog-discount badge-free">FREE</span>';
  } else if (discount > 75) {
    html += '<span class="catalog-discount badge-big">>75%</span>';
  } else if (discount > 0) {
    html += '<span class="catalog-discount">-' + discount + '%</span>';
  }
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
  if (!loadGamesCache()) { await loadRemoteData(); }
  else { console.log("[STATICA] Loaded " + GAMES.length + " games from cache"); }
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

  // ---- Account System (Login / Register) ----
  var loginBtn = document.getElementById("loginBtn");
  var loginModal = document.getElementById("loginModal");
  var loginOverlay = document.getElementById("loginOverlay");
  var loginClose = document.getElementById("loginClose");
  var loginForm = document.getElementById("loginForm");
  var loginError = document.getElementById("loginError");
  var registerForm = document.getElementById("registerForm");
  var regError = document.getElementById("regError");
  var loginSuccess = document.getElementById("loginSuccess");
  var loginSuccessEmail = document.getElementById("loginSuccessEmail");
  var logoutBtn = document.getElementById("logoutBtn");
  var loginEmail = document.getElementById("loginEmail");
  var loginPassword = document.getElementById("loginPassword");
  var regEmail = document.getElementById("regEmail");
  var regPassword = document.getElementById("regPassword");
  var regConfirm = document.getElementById("regConfirm");
  var loginSubmitBtn = document.getElementById("loginSubmitBtn");
  var loginTabs = document.querySelectorAll(".login-tab");
  var loginModalTitle = document.getElementById("loginModalTitle");
  var settingsAccountRow = document.getElementById("settingsAccountRow");
  var settingsAccountEmail = document.getElementById("settingsAccountEmail");
  var settingsNotifRow = document.getElementById("settingsNotifRow");
  var settingsNotifScopeRow = document.getElementById("settingsNotifScopeRow");
  var notifScopeSelect = document.getElementById("notifScopeSelect");
  var emailNotifToggle = document.getElementById("emailNotifToggle");
  var emailjsDetails = document.getElementById("emailjsDetails");
  var emailjsServiceId = document.getElementById("emailjsServiceId");
  var emailjsTemplateId = document.getElementById("emailjsTemplateId");
  var emailjsPublicKey = document.getElementById("emailjsPublicKey");
  var emailjsSaveBtn = document.getElementById("emailjsSaveBtn");
  var googleClientIdInput = document.getElementById("googleClientId");
  var googleClientIdSaveBtn = document.getElementById("googleClientIdSaveBtn");
  var googleClientIdStatus = document.getElementById("googleClientIdStatus");
  var gSignInWrapper = document.getElementById("gSignInWrapper");
  var gSignInWrapperReg = document.getElementById("gSignInWrapperReg");
  var googleLoginBtn = document.getElementById("googleLoginBtn");
  var googleRegisterBtn = document.getElementById("googleRegisterBtn");

  function currLang() { return localStorage.getItem("lang") || "es"; }

  function getAccounts() { return JSON.parse(localStorage.getItem("accounts") || "[]"); }
  function saveAccounts(a) { localStorage.setItem("accounts", JSON.stringify(a)); }

  function openLogin() {
    loginModal.classList.add("open");
    loginOverlay.classList.add("open");
    updateLoginUI();
  }

  function closeLogin() {
    loginModal.classList.remove("open");
    loginOverlay.classList.remove("open");
    loginError.classList.remove("show");
    regError.classList.remove("show");
  }

  function accountExists(email) {
    var accounts = getAccounts();
    return accounts.some(function (a) { return a.email === email; });
  }

  function updateLoginUI() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      loginForm.style.display = "none";
      registerForm.style.display = "none";
      document.querySelector(".login-tabs").style.display = "none";
      loginSuccess.classList.add("show");
      loginSuccessEmail.textContent = user.email;
      loginBtn.classList.add("logged-in");
      loginBtn.querySelector(".btn-text").textContent = user.email;
      settingsAccountRow.style.display = "flex";
      settingsAccountEmail.textContent = user.email;
      updateNotifUI();
      gSignInWrapper.style.display = "none";
      gSignInWrapperReg.style.display = "none";
    } else {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
      document.querySelector(".login-tabs").style.display = "flex";
      loginSuccess.classList.remove("show");
      loginBtn.classList.remove("logged-in");
      loginBtn.querySelector(".btn-text").textContent = i18n[currLang()].loginBtn;
      settingsAccountRow.style.display = "none";
      settingsNotifRow.style.display = "none";
      settingsNotifScopeRow.style.display = "none";
      emailjsDetails.style.display = "none";
      showGoogleButtons();
    }
  }

  var GOOGLE_CLIENT_ID = "869571684624-gv9hpt2klpsod6vse09pahaictu7b0qo.apps.googleusercontent.com";

  function getGoogleClientId() {
    return localStorage.getItem("googleClientId") || GOOGLE_CLIENT_ID;
  }

  function showGoogleButtons() {
    var clientId = getGoogleClientId();
    if (!clientId) {
      gSignInWrapper.style.display = "none";
      gSignInWrapperReg.style.display = "none";
      return;
    }
    gSignInWrapper.style.display = "block";
    gSignInWrapperReg.style.display = "block";
    initGoogleGIS(clientId);
  }

  function updateNotifUI() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (!user) { settingsNotifRow.style.display = "none"; settingsNotifScopeRow.style.display = "none"; emailjsDetails.style.display = "none"; return; }
    settingsNotifRow.style.display = "flex";
    settingsNotifScopeRow.style.display = "flex";
    emailjsDetails.style.display = "block";
    var prefs = JSON.parse(localStorage.getItem("notifPrefs_" + user.email) || "{}");
    emailNotifToggle.checked = prefs.enabled || false;
    notifScopeSelect.value = prefs.scope || "wishlist";
    var cfg = JSON.parse(localStorage.getItem("emailjsConfig") || "{}");
    emailjsServiceId.value = cfg.serviceId || "";
    emailjsTemplateId.value = cfg.templateId || "";
    emailjsPublicKey.value = cfg.publicKey || "";
  }

  // ---- Google Sign-In ----
  function initGoogleGIS(clientId) {
    if (window.googleInitDone) return;
    if (typeof google === "undefined" || typeof google.accounts === "undefined") {
      loadGIScript(function () { renderGoogleButtons(clientId); });
    } else {
      renderGoogleButtons(clientId);
    }
  }

  function loadGIScript(cb) {
    if (document.querySelector('script[src*="accounts.google.com/gsi/client"]')) { cb(); return; }
    var s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.onload = cb;
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }

  function renderGoogleButtons(clientId) {
    if (window.googleInitDone) return;
    window.googleInitDone = true;
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleGoogleCredential
    });
    google.accounts.id.renderButton(googleLoginBtn, {
      type: "standard", shape: "rectangular",
      theme: "outline", size: "large",
      text: "signin_with", logo_alignment: "left",
      width: googleLoginBtn.clientWidth || 280
    });
    google.accounts.id.renderButton(googleRegisterBtn, {
      type: "standard", shape: "rectangular",
      theme: "outline", size: "large",
      text: "signup_with", logo_alignment: "left",
      width: googleRegisterBtn.clientWidth || 280
    });
  }

  function handleGoogleCredential(response) {
    var payload = decodeJwt(response.credential);
    if (!payload || !payload.email) return;
    var email = payload.email;
    var name = payload.name || email;
    var accounts = getAccounts();
    if (!accounts.some(function (a) { return a.email === email; })) {
      accounts.push({ email: email, password: "", google: true });
      saveAccounts(accounts);
      var prefs = { enabled: true, scope: "wishlist" };
      localStorage.setItem("notifPrefs_" + email, JSON.stringify(prefs));
      trySendWelcomeEmail(email, "wishlist");
    }
    localStorage.setItem("user", JSON.stringify({ email: email, name: name, google: true }));
    closeLogin();
    updateLoginUI();
  }

  function decodeJwt(token) {
    try {
      var parts = token.split(".");
      var payload = parts[1];
      payload = payload.replace(/-/g, "+").replace(/_/g, "/");
      while (payload.length % 4) payload += "=";
      return JSON.parse(atob(payload));
    } catch (e) {
      return null;
    }
  }

  // Google Client ID settings
  googleClientIdSaveBtn.addEventListener("click", function () {
    var val = googleClientIdInput.value.trim();
    localStorage.setItem("googleClientId", val);
    updateGoogleClientIdStatus();
    window.googleInitDone = false;
    var l = currLang();
    googleClientIdSaveBtn.textContent = i18n[l].emailjsSaved;
    setTimeout(function () { googleClientIdSaveBtn.textContent = i18n[l].saveGoogle; }, 2000);
  });

  function updateGoogleClientIdStatus() {
    var val = localStorage.getItem("googleClientId") || "";
    var l = currLang();
    googleClientIdInput.value = val;
    googleClientIdStatus.textContent = val ? i18n[l].googleConfigured : "Pre-configurado";
  }

  updateGoogleClientIdStatus();

  loginBtn.addEventListener("click", openLogin);
  loginClose.addEventListener("click", closeLogin);
  loginOverlay.addEventListener("click", closeLogin);

  // Tab switching
  loginTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      loginTabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var isLogin = tab.dataset.tab === "login";
      loginForm.style.display = isLogin ? "block" : "none";
      registerForm.style.display = isLogin ? "none" : "block";
      loginError.classList.remove("show");
      regError.classList.remove("show");
      loginForm.reset();
      registerForm.reset();
      var l = currLang();
      loginSubmitBtn.textContent = i18n[l][isLogin ? "loginTitle" : "registerTitle"];
      loginModalTitle.textContent = i18n[l][isLogin ? "loginTitle" : "registerTitle"];
      if (getGoogleClientId()) {
        gSignInWrapper.style.display = isLogin ? "block" : "none";
        gSignInWrapperReg.style.display = isLogin ? "none" : "block";
      }
    });
  });

  // Login
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = loginEmail.value.trim();
    var password = loginPassword.value;
    var l = currLang();
    if (!email) { loginError.textContent = i18n[l].noEmail; loginError.classList.add("show"); return; }
    if (password.length < 6) { loginError.textContent = i18n[l].shortPwd; loginError.classList.add("show"); return; }
    loginError.classList.remove("show");
    if (!accountExists(email)) {
      loginError.textContent = i18n[l].accountExists;
      loginError.classList.add("show");
      return;
    }
    var accounts = getAccounts();
    var acct = accounts.find(function (a) { return a.email === email; });
    if (acct.password !== password) {
      loginError.textContent = i18n[l].shortPwd;
      loginError.classList.add("show");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email: email }));
    loginForm.reset();
    updateLoginUI();
  });

  // Register
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = regEmail.value.trim();
    var password = regPassword.value;
    var confirmPwd = regConfirm.value;
    var l = currLang();
    if (!email) { regError.textContent = i18n[l].noEmail; regError.classList.add("show"); return; }
    if (password.length < 6) { regError.textContent = i18n[l].shortPwd; regError.classList.add("show"); return; }
    if (password !== confirmPwd) { regError.textContent = i18n[l].passwordsDontMatch; regError.classList.add("show"); return; }
    regError.classList.remove("show");
    if (accountExists(email)) {
      regError.textContent = i18n[l].accountExists;
      regError.classList.add("show");
      return;
    }
    var accounts = getAccounts();
    accounts.push({ email: email, password: password });
    saveAccounts(accounts);
    var prefInput = document.querySelector('input[name="notifPref"]:checked');
    var notifScope = prefInput ? prefInput.value : "wishlist";
    var prefs = { enabled: true, scope: notifScope };
    localStorage.setItem("notifPrefs_" + email, JSON.stringify(prefs));
    localStorage.setItem("user", JSON.stringify({ email: email }));
    registerForm.reset();
    updateLoginUI();
    closeLogin();
    trySendWelcomeEmail(email, notifScope);
  });

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("user");
    updateLoginUI();
  });

  // Email notification toggle
  emailNotifToggle.addEventListener("change", function () {
    var user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    var prefs = JSON.parse(localStorage.getItem("notifPrefs_" + user.email) || "{}");
    prefs.enabled = emailNotifToggle.checked;
    localStorage.setItem("notifPrefs_" + user.email, JSON.stringify(prefs));
  });

  // Notification scope change
  notifScopeSelect.addEventListener("change", function () {
    var user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    var prefs = JSON.parse(localStorage.getItem("notifPrefs_" + user.email) || "{}");
    prefs.scope = notifScopeSelect.value;
    localStorage.setItem("notifPrefs_" + user.email, JSON.stringify(prefs));
  });

  // EmailJS config save
  emailjsSaveBtn.addEventListener("click", function () {
    var cfg = {
      serviceId: emailjsServiceId.value.trim(),
      templateId: emailjsTemplateId.value.trim(),
      publicKey: emailjsPublicKey.value.trim()
    };
    localStorage.setItem("emailjsConfig", JSON.stringify(cfg));
    var l = currLang();
    emailjsSaveBtn.textContent = i18n[l].emailjsSaved;
    setTimeout(function () { emailjsSaveBtn.textContent = i18n[l].saveEmailjs; }, 2000);
  });

  updateLoginUI();

  // ---- EmailJS helpers ----
  function trySendEmail(email, subject, message) {
    var cfg = JSON.parse(localStorage.getItem("emailjsConfig") || "{}");
    if (!cfg.serviceId || !cfg.templateId || !cfg.publicKey) return;
    if (typeof emailjs === "undefined") {
      loadEmailJS(function () { doSendEmail(email, subject, message, cfg); });
    } else {
      doSendEmail(email, subject, message, cfg);
    }
  }

  function doSendEmail(email, subject, message, cfg) {
    emailjs.init(cfg.publicKey);
    emailjs.send(cfg.serviceId, cfg.templateId, {
      to_email: email,
      subject: subject,
      message: message
    }).then(function () {
      console.log("[STATICA] Email sent to " + email);
    }, function (err) {
      console.error("[STATICA] Email send failed", err);
    });
  }

  function loadEmailJS(cb) {
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = cb;
    document.head.appendChild(s);
  }

  // ---- Welcome email ----
  function trySendWelcomeEmail(email, scope) {
    var l = currLang();
    var subject = i18n[l].welcomeSubject;
    var message = scope === "all" ? i18n[l].welcomeMsgAll : i18n[l].welcomeMsg;
    trySendEmail(email, subject, message);
  }

  // ---- Deal notification checker ----
  function checkDealNotifications() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    var prefs = JSON.parse(localStorage.getItem("notifPrefs_" + user.email) || "{}");
    if (!prefs.enabled) return;
    var cfg = JSON.parse(localStorage.getItem("emailjsConfig") || "{}");
    if (!cfg.serviceId || !cfg.templateId || !cfg.publicKey) return;
    var l = currLang();
    var notifSent = JSON.parse(localStorage.getItem("notifSent_" + user.email) || "{}");
    var newNotifs = [];

    if (prefs.scope === "all") {
      var candidates = [];
      for (var i = 0; i < GAMES.length; i++) {
        var g = GAMES[i];
        var best = getBestDeal(g.deals);
        var discount = getDiscount(best.original, best.price);
        if (discount >= 20 && !notifSent[g.id]) {
          candidates.push({ game: g, price: best.price, store: best.store, discount: discount });
          notifSent[g.id] = true;
        }
      }
      candidates.sort(function (a, b) { return b.discount - a.discount; });
      newNotifs = candidates.slice(0, 6);
    } else {
      var wishlist = getWishlist();
      wishlist.forEach(function (gameId) {
        var game = findGame(gameId);
        if (!game) return;
        var threshold = getThreshold(gameId);
        var best = getBestDeal(game.deals);
        if (best.price <= threshold && !notifSent[gameId]) {
          newNotifs.push({ game: game, price: best.price, store: best.store, threshold: threshold });
          notifSent[gameId] = true;
        }
      });
    }

    if (newNotifs.length === 0) return;
    localStorage.setItem("notifSent_" + user.email, JSON.stringify(notifSent));
    var subject = prefs.scope === "all" ? i18n[l].dealSubjectAll : i18n[l].dealSubjectWishlist;
    var bodyPrefix = prefs.scope === "all" ? i18n[l].dealBodyAll : i18n[l].dealBodyWishlist;
    var gameList = newNotifs.map(function (g) {
      return g.game.title + " - $" + g.price.toFixed(2) + " en " + g.store;
    }).join("\n");
    var message = bodyPrefix + gameList + i18n[l].dealFooter;
    trySendEmail(user.email, subject, message);
  }

  // Run notification check after initial render
  setTimeout(checkDealNotifications, 5000);

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

  // ---- CheapShark auto-fetcher (every 15 min) ----
  setTimeout(function csFirst() {
    initCheapSharkFetcher();
    setInterval(initCheapSharkFetcher, 15 * 60 * 1000);
  }, 3000);
});
