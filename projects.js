/* ============================================================================
   projects.js — obsah podstránky projekty.html
   Zoznam verejných GitHub projektov Alexa Poliaka. Rovnaký princíp ako
   content.js: texty sú páry { sk, en }, meniť stačí tento súbor.

   Polia jedného projektu:
     name     — názov tak, ako sa má zobraziť
     repo     — URL repozitára na GitHube (povinné)
     live     — URL bežiacej stránky/appky, ak existuje
     group    — kľúč kategórie (viď GROUPS nižšie)
     year     — rok, kedy projekt vznikol
     lang     — hlavný jazyk podľa GitHubu
     featured — true = vypichnutý, dostane akcentový rám
     short    — jedna veta do zoznamu
     desc     — dlhší popis, čo projekt naozaj robí
     tags     — technológie a kľúčové vlastnosti
   ============================================================================ */

window.PROJECTS_DATA = {

  meta: {
    title: { sk: "Projekty — Alex Poliak", en: "Projects — Alex Poliak" },
    heading: { sk: "Projekty", en: "Projects" },
    lead: {
      sk: "Všetko, čo mám verejne na GitHube — weby, desktopové nástroje pre Windows, hry aj AI pomôcky. Každý projekt je moja vlastná práca, nie fork.",
      en: "Everything I have public on GitHub — websites, Windows desktop tools, games and AI utilities. Every project is my own work, not a fork."
    },
    description: {
      sk: "Verejné GitHub projekty Alexa Poliaka — weby bez frameworku, Windows nástroje v Pythone a PowerShelli, hry a AI pomôcky.",
      en: "Public GitHub projects by Alex Poliak — framework-free websites, Windows tools in Python and PowerShell, games and AI utilities."
    },
    backLabel: { sk: "Späť na životopis", en: "Back to CV" },
    profileUrl: "https://github.com/Apoliak7777"
  },

  /* Kategórie — poradie tu určuje poradie skupín na stránke. */
  groups: [
    { key: "web",     label: { sk: "Weby a webové aplikácie", en: "Websites & Web Apps" } },
    { key: "windows", label: { sk: "Nástroje pre Windows",    en: "Windows Tools" } },
    { key: "ai",      label: { sk: "AI a produktivita",       en: "AI & Productivity" } },
    { key: "fun",     label: { sk: "Hry a zábava",            en: "Games & Fun" } }
  ],

  projects: [
    /* ---------------------------------------------------------------- weby */
    {
      name: "Apoliak — hlavný web",
      repo: "https://github.com/Apoliak7777/Apoliak-MAIN_WEB",
      live: "https://apoliak.online/",
      group: "web", year: 2026, lang: "HTML", featured: true,
      short: {
        sk: "Môj freelance web na tvorbu stránok pre malé podniky, s galériou dvadsiatich preklikateľných ukážok.",
        en: "My freelance site for building websites for small businesses, with a gallery of twenty clickable demos."
      },
      desc: {
        sk: "Statická prezentácia služby a zároveň dôkaz práce: okrem samotného webu obsahuje galériu dvadsiatich hotových ukážkových stránok, ktoré si klient môže preklikať ešte pred objednávkou. Celé je to čisté HTML, CSS a vanilla JavaScript — bez frameworku, bez build stepu, bežiace na vlastnej doméne.",
        en: "A static service presentation that doubles as proof of work: besides the site itself it holds a gallery of twenty finished demo pages a client can click through before ordering. All plain HTML, CSS and vanilla JavaScript — no framework, no build step, running on its own domain."
      },
      tags: ["HTML", "CSS", "JavaScript", "20 ukážok", "Vlastná doména"]
    },
    {
      name: "ConsoleDex",
      repo: "https://github.com/Apoliak7777/ConsoleDex",
      live: "https://apoliak7777.github.io/ConsoleDex/",
      group: "web", year: 2026, lang: "JavaScript", featured: true,
      short: {
        sk: "Databáza všetkých herných konzol, čo kedy vyšli — 70 konzol od 24 výrobcov, roky 1972 až 2026.",
        en: "A database of every game console ever made — 70 consoles from 24 makers, 1972 to 2026."
      },
      desc: {
        sk: "Prehľadný katalóg, v ktorom sa dajú konzoly filtrovať, porovnávať a triediť podľa výrobcu, generácie či roku vydania. Dáta pokrývajú 70 konzol od 24 výrobcov naprieč päťdesiatimi rokmi. Celé rozhranie je dvojjazyčné (EN/SK) a beží bez servera.",
        en: "A catalogue where consoles can be filtered, compared and sorted by maker, generation or release year. The data covers 70 consoles from 24 makers across five decades. The whole interface is bilingual (EN/SK) and runs without a server."
      },
      tags: ["JavaScript", "Dvojjazyčné", "70 konzol", "GitHub Pages"]
    },
    {
      name: "Odrátané hodiny",
      repo: "https://github.com/Apoliak7777/odratane-hodiny",
      live: "https://apoliak7777.github.io/odratane-hodiny/",
      group: "web", year: 2026, lang: "HTML", featured: true,
      short: {
        sk: "Appka na evidenciu odpracovaných šichiet a kontrolu výplaty. Jedna stránka, funguje offline.",
        en: "An app for logging worked shifts and checking your payslip. One page, works offline."
      },
      desc: {
        sk: "Zapíšeš si šichtu — dátum, od–do, pauzu — a appka dopočíta hodiny aj mzdu vrátane príplatkov za soboty a nedele. Sviatky pozná sama a označí ich. Rozumie aj rýchlemu zápisu textom typu „11:00-20:15 pauza 30\". Všetko sa ukladá priamo v prehliadači, takže funguje bez internetu a bez účtu; dáta sa dajú zálohovať do súboru alebo vyexportovať do CSV.",
        en: "You log a shift — date, from–to, break — and the app works out the hours and the pay, including weekend rates. It knows public holidays on its own and marks them. It also understands quick text entry like \"11:00-20:15 break 30\". Everything is stored in the browser, so it works offline and without an account; data can be backed up to a file or exported to CSV."
      },
      tags: ["Vanilla JS", "Offline-first", "PWA", "Bez závislostí", "CSV export"]
    },
    {
      name: "Apoliak CV online",
      repo: "https://github.com/Apoliak7777/Apoliak-CV-online",
      live: "https://apoliak7777.github.io/Apoliak-CV-online/",
      group: "web", year: 2026, lang: "HTML",
      short: {
        sk: "Toto portfólio — dvojjazyčné online CV, ktoré si viem vytlačiť do PDF v rovnakom dizajne.",
        en: "This portfolio — a bilingual online CV that prints to PDF in the same design."
      },
      desc: {
        sk: "Celý obsah životopisu žije v jedinom objekte v content.js, stránka sa z neho poskladá za behu. Prepínanie SK/EN nepotrebuje reload, SEO metadáta aj JSON-LD sa generujú v JavaScripte a tlačový štýl zmení stránku na hotové PDF bez toho, aby z nej spravil holý text.",
        en: "The entire CV content lives in a single object in content.js and the page assembles itself from it at runtime. Switching SK/EN needs no reload, the SEO metadata and JSON-LD are generated in JavaScript, and the print stylesheet turns the page into a finished PDF without reducing it to plain text."
      },
      tags: ["HTML", "CSS", "JavaScript", "SK/EN", "Tlač do PDF", "Open Source"]
    },
    {
      name: "Git Portfolio",
      repo: "https://github.com/Apoliak7777/git-portfolio",
      live: "https://apoliak7777.github.io/git-portfolio/",
      group: "web", year: 2026, lang: "HTML",
      short: {
        sk: "Vývojárske portfólio v tmavom glassmorphism dizajne.",
        en: "A developer portfolio in a dark glassmorphism design."
      },
      desc: {
        sk: "Jednostránkové portfólio postavené na presklených kartách a tmavej téme — cvičenie v tom, ako ďaleko sa dá dotiahnuť vizuál bez akéhokoľvek frameworku.",
        en: "A single-page portfolio built on frosted-glass cards and a dark theme — an exercise in how far the visuals can be pushed without any framework."
      },
      tags: ["Glassmorphism", "Dark mode", "JavaScript", "Portfolio"]
    },
    {
      name: "aivisible",
      repo: "https://github.com/Apoliak7777/aivisible-web",
      live: "https://apoliak7777.github.io/aivisible-web/",
      group: "web", year: 2026, lang: "HTML",
      short: {
        sk: "Šesťstránkový marketingový web pre službu AI viditeľnosti, bez frameworku a bez buildu.",
        en: "A six-page marketing site for an AI visibility service, no framework and no build step."
      },
      desc: {
        sk: "Kompletná statická prezentácia služby — domov, služby, cenník, o nás, kontakt a blog. Tmavý dizajn, jednotný layout naprieč stránkami a nulové závislosti, takže sa nasadí kamkoľvek jednoduchým skopírovaním súborov.",
        en: "A complete static service presentation — home, services, pricing, about, contact and blog. A dark design, a consistent layout across pages and zero dependencies, so it deploys anywhere by simply copying the files."
      },
      tags: ["HTML", "CSS", "6 stránok", "Bez buildu"]
    },
    {
      name: "AI učenie",
      repo: "https://github.com/Apoliak7777/ai-ucenie",
      live: "https://apoliak7777.github.io/ai-ucenie/",
      group: "web", year: 2026, lang: "HTML",
      short: {
        sk: "Rezervačná stránka na súkromné online hodiny práce s AI.",
        en: "A booking page for private online lessons on working with AI."
      },
      desc: {
        sk: "Stránka, cez ktorú si záujemca vyberie termín a objedná si individuálnu hodinu. Beží na vlastnej subdoméne ai.apoliak.online.",
        en: "A page where someone picks a slot and books an individual lesson. It runs on its own subdomain, ai.apoliak.online."
      },
      tags: ["HTML", "CSS", "Rezervácie", "Vlastná subdoména"]
    },
    {
      name: "Minecraft Hosting",
      repo: "https://github.com/Apoliak7777/Hosting_Website",
      live: "https://apoliak7777.github.io/Hosting_Website/",
      group: "web", year: 2026, lang: "JavaScript",
      short: {
        sk: "Web pre hosting Minecraft serverov, postavený v Reacte a Vite.",
        en: "A Minecraft server hosting website, built with React and Vite."
      },
      desc: {
        sk: "Prezentácia hostingovej služby s balíčkami a cenníkom. Na rozdiel od mojich ostatných webov je tento postavený na Reacte a zbalený cez Vite — vyskúšal som si na ňom komponentový prístup a build pipeline.",
        en: "A hosting service presentation with plans and pricing. Unlike my other sites this one is built on React and bundled with Vite — I used it to try out a component-based approach and a build pipeline."
      },
      tags: ["React", "Vite", "JavaScript", "Komponenty"]
    },
    {
      name: "IP info",
      repo: "https://github.com/Apoliak7777/apoliakipinfo",
      live: "https://ipinfo.apoliak.online/",
      group: "web", year: 2026, lang: "HTML",
      short: {
        sk: "Zistí tvoju verejnú IP adresu a vyhľadá údaje k akejkoľvek IPv4 alebo doméne.",
        en: "Shows your public IP address and looks up details for any IPv4 or domain."
      },
      desc: {
        sk: "Ukáže tvoju verejnú IP hneď po otvorení a k tomu geolokáciu, poskytovateľa a ďalšie údaje. Do poľa sa dá zadať aj cudzia IP alebo doména. Napísané vo vanilla JavaScripte, beží na vlastnej subdoméne.",
        en: "It shows your public IP straight away, along with geolocation, provider and other details. You can also type in someone else's IP or a domain. Written in vanilla JavaScript, running on its own subdomain."
      },
      tags: ["Vanilla JS", "API", "Geolokácia", "Vlastná subdoména"]
    },
    {
      name: "Maintenance stránka",
      repo: "https://github.com/Apoliak7777/maintenance-website",
      live: "https://apoliak7777.github.io/maintenance-website/",
      group: "web", year: 2026, lang: "HTML",
      short: {
        sk: "Odstávková stránka, ktorá sa hodí na web počas údržby.",
        en: "A maintenance page to put up while a site is down for work."
      },
      desc: {
        sk: "Hotová stránka „pracujeme na tom\", ktorá sa dá nasadiť na akýkoľvek web počas odstávky, aby návštevník nevidel chybu servera.",
        en: "A ready-made \"we are working on it\" page that can be deployed to any site during downtime, so a visitor does not hit a server error."
      },
      tags: ["HTML", "CSS", "PHP", "Šablóna"]
    },

    /* ------------------------------------------------------------- windows */
    {
      name: "ApoliakOS",
      repo: "https://github.com/Apoliak7777/ApoliakOS",
      group: "windows", year: 2026, lang: "PowerShell", featured: true,
      short: {
        sk: "Osobný optimalizátor Windows 11 — branding, súkromie a výkon v jednom programe.",
        en: "A personal Windows 11 optimizer — branding, privacy and performance in one program."
      },
      desc: {
        sk: "Jeden nástroj, ktorý pozbiera nastavenia Windows 11 rozhádzané po systéme a dá ich na jedno miesto: vypnutie telemetrie a sledovania, vyladenie výkonu a vlastný branding systému. Celé napísané v PowerShelli s vlastným launcherom.",
        en: "One tool that gathers the Windows 11 settings scattered across the system into one place: turning off telemetry and tracking, tuning performance and applying custom system branding. Written entirely in PowerShell with its own launcher."
      },
      tags: ["PowerShell", "Windows 11", "Súkromie", "Výkon", "MIT"]
    },
    {
      name: "FileFlow",
      repo: "https://github.com/Apoliak7777/FileFlow",
      group: "windows", year: 2026, lang: "Python", featured: true,
      short: {
        sk: "Triedič súborov, ktorý roztriedi Downloads do kategórií a priebežne stráži priečinky.",
        en: "A file organizer that sorts Downloads into categories and watches folders as you go."
      },
      desc: {
        sk: "Roztriedi stiahnuté súbory do kategórií podľa typu, vie priečinok sledovať naživo a upratovať nové súbory hneď po pridaní, a k tomu prečistí odpad z celého počítača. Rozhranie je v CustomTkinteri, hotová verzia sa distribuuje ako .exe cez Releases.",
        en: "It sorts downloaded files into categories by type, can watch a folder live and tidy new files the moment they appear, and cleans junk from the whole PC. The interface is built in CustomTkinter and the finished version ships as an .exe via Releases."
      },
      tags: ["Python", "CustomTkinter", "Sledovanie priečinkov", ".exe", "GPL-3.0"]
    },
    {
      name: "Apoliak Vitals",
      repo: "https://github.com/Apoliak7777/apoliak-vitals",
      group: "windows", year: 2026, lang: "Python",
      short: {
        sk: "Kontrola zdravia počítača, ktorá len číta — na stroji nič nemení.",
        en: "A PC health check that only reads — it changes nothing on the machine."
      },
      desc: {
        sk: "Prejde stav počítača a dá mu priehľadné skóre 0–100: opotrebenie diskov a batérie, stav ochrany Windows a ďalšie ukazovatele. Zámerne je celý read-only, takže sa dá spustiť aj na cudzom počítači bez rizika, že niečo prestaví.",
        en: "It walks through the machine's state and gives it a transparent 0–100 score: drive and battery wear, Windows protection status and other indicators. It is deliberately read-only, so it can be run on someone else's PC with no risk of changing anything."
      },
      tags: ["Python", "Windows", "Diagnostika", "Read-only"]
    },
    {
      name: "Apoliak Optimalizer",
      repo: "https://github.com/Apoliak7777/Apoliak-Optimalizer",
      group: "windows", year: 2026, lang: "Python",
      short: {
        sk: "Herný optimalizátor Windows 10/11 aj s generátorom configov pre CS2, Fortnite a Minecraft.",
        en: "A Windows 10/11 gaming optimizer with config generators for CS2, Fortnite and Minecraft."
      },
      desc: {
        sk: "Robí skutočné systémové úpravy pre hranie a k tomu vygeneruje configy priamo pre CS2, Fortnite a Minecraft, takže si hráč nemusí hľadať nastavenia po fórach. Postavené v Pythone s rozhraním vo Flete.",
        en: "It applies real system tweaks for gaming and generates configs for CS2, Fortnite and Minecraft, so a player does not have to hunt for settings on forums. Built in Python with a Flet interface."
      },
      tags: ["Python", "Flet", "Gaming", "CS2", "Fortnite", "Minecraft"]
    },
    {
      name: "ClipDeck",
      repo: "https://github.com/Apoliak7777/ClipDeck",
      group: "windows", year: 2026, lang: "Python",
      short: {
        sk: "Nahrávač okamžitých záznamov — beží na pozadí a jednou klávesou uloží posledných N sekúnd.",
        en: "An instant-replay recorder — runs in the background and saves the last N seconds with one hotkey."
      },
      desc: {
        sk: "Tichý pomocník pre hráčov: celý čas drží v pamäti posledných pár sekúnd diania a keď sa niečo podarí, jedna klávesová skratka to uloží ako klip. Žiadne nahrávanie celej relácie a prehrabávanie sa hodinovým súborom.",
        en: "A quiet helper for gamers: it keeps the last few seconds of action in memory the whole time, and when something good happens one hotkey saves it as a clip. No recording of the entire session and no digging through an hour-long file."
      },
      tags: ["Python", "Windows", "Klávesové skratky", "Nahrávanie"]
    },
    {
      name: "CursorKeep",
      repo: "https://github.com/Apoliak7777/CursorKeep",
      group: "windows", year: 2026, lang: "Python",
      short: {
        sk: "Udrží počítač bdelý nenápadnými pohybmi kurzora.",
        en: "Keeps the PC awake with unobtrusive cursor movements."
      },
      desc: {
        sk: "Malá appka, ktorá zabráni uspaniu počítača a prepnutiu stavu na „preč\" tým, že kurzorom hýbe po plynulých, sotva viditeľných dráhach. Rozhranie v Tkinteri, distribuované ako .exe cez PyInstaller.",
        en: "A small app that stops the PC from sleeping or flipping your status to \"away\" by moving the cursor along smooth, barely visible paths. A Tkinter interface, shipped as an .exe via PyInstaller."
      },
      tags: ["Python", "Tkinter", "PyInstaller", "MIT"]
    },

    /* ------------------------------------------------------------------ ai */
    {
      name: "AI Prompt Manager",
      repo: "https://github.com/Apoliak7777/AI-Promt-Manager",
      group: "ai", year: 2026, lang: "Python", featured: true,
      short: {
        sk: "Lokálna appka na organizovanie AI promptov a projektov — bez cloudu a bez účtu.",
        en: "A local app for organizing AI prompts and projects — no cloud, no account."
      },
      desc: {
        sk: "Miesto, kde si človek udrží poriadok v promptoch: ukladanie, triedenie do projektov a rýchle vyhľadávanie. Celé to beží lokálne nad SQLite databázou, takže žiadny prompt neodchádza z počítača. Rozhranie v CustomTkinteri, hotová verzia ako .exe.",
        en: "A place to keep prompts in order: saving, sorting into projects and quick search. It all runs locally on top of an SQLite database, so no prompt ever leaves the machine. A CustomTkinter interface, shipped as an .exe."
      },
      tags: ["Python", "SQLite", "CustomTkinter", "Lokálne", "GPL-3.0"]
    },

    /* ----------------------------------------------------------------- fun */
    {
      name: "Gloworm",
      repo: "https://github.com/Apoliak7777/gloworm",
      group: "fun", year: 2026, lang: "TypeScript", featured: true,
      short: {
        sk: "Neónová multiplayerová aréna so „snakeom\" v prehliadači, v reálnom čase a v 3D.",
        en: "A real-time neon multiplayer snake arena in the browser, in 3D."
      },
      desc: {
        sk: "Môj technicky najnáročnejší projekt: hra pre viacerých hráčov naraz, ktorá beží priamo v prehliadači. 3D scéna stojí na Three.js cez React Three Fiber, hráči sú synchronizovaní cez Socket.IO a celé je to napísané v TypeScripte.",
        en: "My most technically demanding project: a game for several players at once, running straight in the browser. The 3D scene is built on Three.js via React Three Fiber, players are synchronised over Socket.IO, and it is all written in TypeScript."
      },
      tags: ["TypeScript", "Three.js", "React Three Fiber", "Socket.IO", "WebGL", "Multiplayer"]
    },
    {
      name: "APOLIAK NEON VOID",
      repo: "https://github.com/Apoliak7777/APOLIAK-NEON-VOID",
      group: "fun", year: 2026, lang: "Resource pack",
      short: {
        sk: "Súťažný resource pack do Minecraftu pre PvP — kompaktné itemy a jasné farby tímov.",
        en: "A competitive Minecraft PvP resource pack — compact items and clear team colours."
      },
      desc: {
        sk: "Textúrový balík ladený na kompetitívne hranie na Hypixeli: zmenšené itemy, aby neprekážali vo výhľade, a výrazné farby tímov, aby bolo v boji hneď jasné, kto je kto. Ostáva kompatibilný s vanilla Minecraftom Java 26.2.",
        en: "A texture pack tuned for competitive play on Hypixel: shrunken items so they do not block the view, and strong team colours so it is instantly clear who is who in a fight. It stays compatible with vanilla Minecraft Java 26.2."
      },
      tags: ["Minecraft", "Resource pack", "PvP", "Hypixel", "BedWars"]
    },
    {
      name: "Vianočný odpočet",
      repo: "https://github.com/Apoliak7777/Christmas-timer",
      live: "https://apoliak7777.github.io/Christmas-timer/",
      group: "fun", year: 2026, lang: "CSS",
      short: {
        sk: "Odpočítavanie do Vianoc s vlastnou animovanou atmosférou.",
        en: "A countdown to Christmas with its own animated atmosphere."
      },
      desc: {
        sk: "Malá stránka, ktorá odpočítava dni do Vianoc. Ide v nej hlavne o CSS — animácie a sviatočnú atmosféru bez jediného obrázka navyše.",
        en: "A small page counting down the days to Christmas. It is mostly a CSS exercise — animations and a festive mood without a single extra image."
      },
      tags: ["CSS", "Animácie", "Odpočet"]
    },
    {
      name: "Navždy spolu",
      repo: "https://github.com/Apoliak7777/love-website",
      live: "https://apoliak7777.github.io/love-website/",
      group: "fun", year: 2025, lang: "CSS",
      short: {
        sk: "Osobná stránka s odpočtom — spravená ako darček.",
        en: "A personal countdown page — made as a gift."
      },
      desc: {
        sk: "Najstarší projekt v tomto zozname a zároveň jediný, ktorý nevznikol ako cvičenie ani zákazka, ale ako darček. Odpočet spoločného času s vlastnými animáciami v CSS.",
        en: "The oldest project on this list and the only one that was not an exercise or a commission but a gift. A countdown of shared time with custom CSS animations."
      },
      tags: ["CSS", "Animácie", "Osobný projekt"]
    }
  ]
};
