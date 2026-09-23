/* ============================================================================
   content.js — Alex Poliak Portfolio
   Jediný súbor, ktorý meníš pri úprave obsahu. Bez admin panelu.
   Texty sú dvojjazyčné: { sk: "...", en: "..." }. Farby a poradie sekcií nižšie.
   ============================================================================ */

window.CV_DATA = {

  meta: {
    name: "Alex Poliak",
    accent:  "#d6ff4b",   // hlavná farba (limetková)
    accent2: "#ff9d54",   // doplnková farba (oranžová)
    accent3: "#7cc5ff",   // treťia farba (jemná modrá — použitá pri certifikátoch)
    photo: "",            // vlož URL fotky; ak je prázdne, zobrazí sa monogram "AP"
    cvFile: "",           // odkaz na hotové PDF; ak je prázdne, tlačidlo "Stiahnuť CV (PDF)" vytlačí túto stránku
    siteUrl: "https://apoliak7777.github.io/Apoliak-CV-online/",  // plná URL stránky — pre OG náhľad a SEO
    ogImage: "og-image.svg",
    location: { sk: "Nová Dedinka, Slovensko", en: "Nová Dedinka, Slovakia" },
    locality: "Nová Dedinka",     // obec pre JSON-LD (schema.org PostalAddress)
    birth: { sk: "25. 8. 2008", en: "25 Aug 2008" },
    birthISO: "2008-08-25",       // strojovo čitateľný dátum pre JSON-LD
    title: { sk: "Alex Poliak — Portfólio", en: "Alex Poliak — Portfolio" },
    description: { sk: "Študent elektrotechniky so záujmom o programovanie, web development a umelú inteligenciu. Hľadám brigádu alebo junior pozíciu.", en: "Electrical engineering student interested in programming, web development and AI. Looking for an internship or junior position." }
  },

  hero: {
    available: true,
    status: { sk: "dostupný pre brigádu / junior pozíciu", en: "available for internship / junior role" },
    role: { sk: "Študent elektrotechniky • Web & AI", en: "Electrical Engineering Student • Web & AI" },
    bio: { sk: "Som komunikatívny a zodpovedný študent so záujmom o techniku, programovanie a umelú inteligenciu. Rád tvorím webové projekty a testujem nové AI modely. Hľadám brigádu, kde môžem získať praktické skúsenosti a prispieť tímu svojou spoľahlivosťou a pracovným prístupom.", en: "Communicative and responsible student interested in technology, programming and AI. I enjoy building web projects and testing new AI models. Looking for an internship where I can gain hands-on experience and contribute to a team with reliability and a solid work ethic." }
  },

  links: [
    { label: { sk: "e-mail", en: "email" }, url: "mailto:alexpoliak21@gmail.com" },
    { label: { sk: "telefón", en: "phone" }, url: "tel:+421918223478" },
    { label: { sk: "GitHub", en: "GitHub" }, url: "https://github.com/Apoliak7777" }
  ],

  sections: {
    order: ["experience", "projects", "skills", "education", "certificates", "interests"],
    experience:   { show: true, label: { sk: "Skúsenosti", en: "Experience" } },
    projects:     { show: true, label: { sk: "Projekty", en: "Projects" },
                    /* odkaz pod sekciou na podstránku so všetkými projektami */
                    more: { url: "projekty.html", count: 21,
                            label: { sk: "Pozrieť všetky projekty", en: "See all projects" } } },
    skills:       { show: true, label: { sk: "Schopnosti", en: "Skills" } },
    education:    { show: true, label: { sk: "Vzdelanie", en: "Education" } },
    certificates: { show: true, label: { sk: "Certifikáty", en: "Certificates" } },
    interests:    { show: true, label: { sk: "Záujmy", en: "Interests" } }
  },

  experience: [
    {
      current: true,
      when: { sk: "Január 2026 — teraz", en: "January 2026 — present" },
      title: { sk: "Zamestnanec", en: "Employee" },
      company: { sk: "Cinema City Slovakia — Eurovea, Bratislava", en: "Cinema City Slovakia — Eurovea, Bratislava" },
      desc: { sk: "Zákaznícky servis, predaj lístkov a starostlivosť o návštevníkov. Rozvíjam komunikačné a organizačné zručnosti v rýchlom prostredí.", en: "Customer service, ticket sales and guest care. Developing communication and organizational skills in a fast-paced environment." }
    },
    {
      when: { sk: "Máj – Jún 2026", en: "May – June 2026" },
      title: { sk: "Erazmus stáž — Servisný technik", en: "Erasmus Internship — Service Technician" },
      company: { sk: "Penax — Petr Sýba s.r.o., Teplice-Kladruby, Česko", en: "Penax — Petr Sýba s.r.o., Teplice-Kladruby, Czech Republic" },
      desc: { sk: "Praktická stáž v servise. Získavanie skúseností s technickou prácou, náradím a riešením problémov.", en: "Practical service internship. Gaining hands-on experience with technical work, tools and problem solving." }
    },
    {
      when: { sk: "November 2025", en: "November 2025" },
      title: { sk: "Web Developer (projektová spolupráca)", en: "Web Developer (project collaboration)" },
      company: { sk: "wireadvise, Miami, USA", en: "wireadvise, Miami, USA" },
      desc: { sk: "Kompletný vývoj a realizácia webovej stránky na mieru. Zabezpečenie technickej správy a pravidelnej údržby firemných webových portálov, optimalizácia výkonu a používateľského prostredia pre vyššiu stabilitu webu.", en: "Full custom website development and deployment. Technical maintenance and regular updates of company web portals, performance and UX optimization for better site stability." }
    },
    {
      when: { sk: "November 2024 – November 2025", en: "November 2024 – November 2025" },
      title: { sk: "Zamestnanec", en: "Crew Member" },
      company: { sk: "McDonald's — DH Gastronomy s. r. o., Bratislava", en: "McDonald's — DH Gastronomy s. r. o., Bratislava" },
      desc: { sk: "Práca v tíme, obsluha zákazníkov a dodržiavanie štandardov. Rozvíjal som schopnosť pracovať pod tlakom a v tíme.", en: "Team work, customer service and following standards. Developed the ability to work under pressure and in a team." }
    }
  ],

  projects: [
    {
      featured: true,
      title: { sk: "wireadvise.net — firemný web (USA)", en: "wireadvise.net — Business Website (USA)" },
      desc: { sk: "Kompletný vývoj a nasadenie responzívnej webovej stránky pre americkú spoločnosť wireadvise. Frontend, optimalizácia rýchlosti, technická údržba a priebežné aktualizácie.", en: "Full development and deployment of a responsive website for US company wireadvise. Frontend, performance optimization, technical maintenance and ongoing updates." },
      url: "https://www.wireadvise.net/",
      tags: ["HTML", "CSS", "Responsive", "Client Project", "Live"]
    },
    {
      title: { sk: "Toto portfólio (cvonline)", en: "This Portfolio (cvonline)" },
      desc: { sk: "Statické dvojjazyčné CV/portfólio bez frameworku — obsah v jednom súbore, tmavý dizajn, SEO, tlač do PDF a pripravené na bezplatný hosting.", en: "Static bilingual CV/portfolio without a framework — content in a single file, dark design, SEO, print-to-PDF and ready for free hosting." },
      url: "https://github.com/Apoliak7777/Apoliak-CV-online",
      tags: ["HTML", "CSS", "JavaScript", "Open Source"]
    },
    {
      featured: true,
      title: { sk: "apoliak.online — môj freelance web", en: "apoliak.online — My Freelance Site" },
      desc: { sk: "Web mojej služby tvorby stránok pre malé podniky, aj s galériou dvadsiatich preklikateľných ukážkových webov. Čisté HTML, CSS a vanilla JavaScript na vlastnej doméne.", en: "The site for my web-building service for small businesses, including a gallery of twenty clickable demo sites. Plain HTML, CSS and vanilla JavaScript on my own domain." },
      url: "https://apoliak.online/",
      tags: ["HTML", "CSS", "JavaScript", "20 ukážok", "Vlastná doména"]
    },
    {
      title: { sk: "Gloworm — multiplayer hra v prehliadači", en: "Gloworm — Browser Multiplayer Game" },
      desc: { sk: "Neónová 3D aréna pre viacerých hráčov naraz, priamo v prehliadači. Three.js cez React Three Fiber, synchronizácia hráčov cez Socket.IO, celé v TypeScripte.", en: "A neon 3D arena for several players at once, right in the browser. Three.js via React Three Fiber, player sync over Socket.IO, all in TypeScript." },
      url: "https://github.com/Apoliak7777/gloworm",
      tags: ["TypeScript", "Three.js", "Socket.IO", "WebGL", "Multiplayer"]
    },
    {
      title: { sk: "ConsoleDex — databáza herných konzol", en: "ConsoleDex — Game Console Database" },
      desc: { sk: "Katalóg všetkých herných konzol, čo kedy vyšli — 70 konzol od 24 výrobcov od roku 1972. Filtrovanie, porovnávanie a dvojjazyčné rozhranie bez servera.", en: "A catalogue of every game console ever made — 70 consoles from 24 makers since 1972. Filtering, comparison and a bilingual interface with no server." },
      url: "https://apoliak7777.github.io/ConsoleDex/",
      tags: ["JavaScript", "Dvojjazyčné", "70 konzol", "Live"]
    },
    {
      title: { sk: "Odrátané hodiny — evidencia šichiet", en: "Odrátané hodiny — Shift Tracker" },
      desc: { sk: "Appka na zapisovanie odpracovaných šichiet a kontrolu výplaty. Dopočíta príplatky, pozná sviatky, rozumie rýchlemu zápisu textom a funguje úplne offline.", en: "An app for logging worked shifts and checking your payslip. It calculates weekend rates, knows public holidays, understands quick text entry and works fully offline." },
      url: "https://apoliak7777.github.io/odratane-hodiny/",
      tags: ["Vanilla JS", "Offline-first", "PWA", "Live"]
    },
    {
      title: { sk: "ApoliakOS & FileFlow — nástroje pre Windows", en: "ApoliakOS & FileFlow — Windows Tools" },
      desc: { sk: "Dva desktopové nástroje: ApoliakOS je optimalizátor Windows 11 v PowerShelli (súkromie, výkon, branding), FileFlow je Python triedič súborov so sledovaním priečinkov, distribuovaný ako .exe.", en: "Two desktop tools: ApoliakOS is a Windows 11 optimizer in PowerShell (privacy, performance, branding), FileFlow is a Python file organizer with live folder watching, shipped as an .exe." },
      url: "https://github.com/Apoliak7777/FileFlow",
      tags: ["Python", "PowerShell", "CustomTkinter", "Windows"]
    },
    {
      title: { sk: "Toto portfólio (cvonline)", en: "This Portfolio (cvonline)" },
      desc: { sk: "Statické dvojjazyčné CV/portfólio bez frameworku — obsah v jednom súbore, tmavý dizajn, SEO, tlač do PDF a pripravené na bezplatný hosting.", en: "Static bilingual CV/portfolio without a framework — content in a single file, dark design, SEO, print-to-PDF and ready for free hosting." },
      url: "https://github.com/Apoliak7777/Apoliak-CV-online",
      tags: ["HTML", "CSS", "JavaScript", "Open Source"]
    },
    {
      title: { sk: "AI Prompt Engineering & vlastní AI asistenti", en: "AI Prompt Engineering & Custom AI Assistants" },
      desc: { sk: "Intenzívne testovanie a tvorba efektívnych promptov pre ChatGPT a Claude. Vlastní AI asistenti, workflow automatizácia a 20+ certifikátov z oblasti AI.", en: "Intensive testing and creation of effective prompts for ChatGPT and Claude. Custom AI assistants, workflow automation and 20+ AI certificates." },
      url: "https://github.com/Apoliak7777/AI-Promt-Manager",
      tags: ["AI", "Prompt Engineering", "Claude", "GPTs", "MCP"]
    }
  ],

  skills: [
    { name: { sk: "Web Development", en: "Web Development" }, detail: { sk: "HTML5, CSS3, responzívny dizajn, základný JavaScript", en: "HTML5, CSS3, responsive design, basic JavaScript" } },
    { name: { sk: "Programovanie", en: "Programming" }, detail: { sk: "Základy programovania a algoritmického myslenia (kurz IT Step Academy)", en: "Programming fundamentals and algorithmic thinking (IT Step Academy course)" } },
    { name: { sk: "Umelá inteligencia", en: "Artificial Intelligence" }, detail: { sk: "Prompt Engineering, tvorba Custom GPTs a Claude projektov, AI workflow", en: "Prompt Engineering, Custom GPTs, Claude projects, AI workflows" } },
    { name: { sk: "Technické nástroje", en: "Technical Tools" }, detail: { sk: "Linux OS, Microsoft Office (Word, Excel, PowerPoint)", en: "Linux OS, Microsoft Office suite (Word, Excel, PowerPoint)" } },
    { name: { sk: "Jazyky", en: "Languages" }, detail: { sk: "Slovenčina (C2 – rodný), Angličtina (B1 – mierne pokročilý)", en: "Slovak (C2 – native), English (B1 – intermediate)" } }
  ],

  education: [
    {
      current: true,
      when: { sk: "September 2023 — doteraz", en: "September 2023 — present" },
      title: { sk: "Elektrotechnika v doprave a telekomunikáciách", en: "Electrical Engineering in Transport and Telecommunications" },
      place: { sk: "Stredná priemyselná škola dopravná, Kvačalova 20, Bratislava", en: "Secondary Industrial School of Transport, Kvačalova 20, Bratislava" },
      desc: { sk: "Štúdium zamerané na elektrotechniku, telekomunikácie a technické systémy v doprave.", en: "Studies focused on electrical engineering, telecommunications and technical systems in transport." }
    },
    {
      when: { sk: "September 2019 – September 2023", en: "September 2019 – September 2023" },
      title: { sk: "Programovací kurz – STEP IT Academy Junior", en: "Programming Course – STEP IT Academy Junior" },
      place: { sk: "IT Step Academy, Bratislava", en: "IT Step Academy, Bratislava" },
      desc: { sk: "Viacročný kurz programovania a základov IT pre mladých.", en: "Multi-year programming and IT fundamentals course for youth." }
    }
  ],

  /* Certifikáty — v render sa automaticky zoskupia podľa poľa "issuer".
     Poradie skupín = poradie prvého výskytu vydavateľa v tomto zozname.
     img = originál certifikátu (otvorí sa vo veľkom), náhľad je certifikaty/nahlady/<názov>.webp,
     w/h = rozmery náhľadu, url = overovací odkaz vydavateľa (tlačidlo „Overiť certifikát"). */
  certificates: [
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude 101", img: "certifikaty/claude-101.jpg", w: 560, h: 424, url: "https://verify.skilljar.com/c/uq8homniz6fr" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude Code 101", img: "certifikaty/claude-code-101.jpg", w: 560, h: 417 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude Code in Action", img: "certifikaty/claude-code-in-action.jpg", w: 560, h: 415, url: "https://verify.skilljar.com/c/ru8sua8vsdww" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Introduction to Claude Cowork", img: "certifikaty/claude-cowork.jpg", w: 560, h: 416 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency: Framework & Foundations", img: "certifikaty/ai-fluency-framework-foundations.jpg", w: 560, h: 415 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude with the Anthropic API", img: "certifikaty/claude-anthropic-api.jpg", w: 560, h: 420, url: "https://verify.skilljar.com/c/gsan9wqwnmam" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency: AI Capabilities & Limitations", img: "certifikaty/ai-fluency-capabilities-limitations.jpg", w: 560, h: 423 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Introduction to Subagents", img: "certifikaty/subagents.jpg", w: 560, h: 408 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Introduction to Agent Skills", img: "certifikaty/agent-skills.jpg", w: 560, h: 426 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency for Nonprofits", img: "certifikaty/ai-fluency-nonprofits.jpg", w: 560, h: 414 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency for Students", img: "certifikaty/ai-fluency-students.jpg", w: 560, h: 417 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency for Educators", img: "certifikaty/ai-fluency-educators.jpg", w: 560, h: 418 },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Model Context Protocol: Advanced Topics", img: "certifikaty/mcp-advanced-topics.jpg", w: 560, h: 418, url: "https://verify.skilljar.com/c/f8zjfiwfvasv" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Introduction to Model Context Protocol", img: "certifikaty/mcp-introduction.jpg", w: 560, h: 421, url: "https://verify.skilljar.com/c/jadk83o69zeh" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude with Google Vertex AI", img: "certifikaty/claude-google-vertex-ai.jpg", w: 560, h: 413, url: "https://verify.skilljar.com/c/k9tphskgvvax" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude with Amazon Bedrock", img: "certifikaty/claude-amazon-bedrock.jpg", w: 560, h: 425, url: "https://verify.skilljar.com/c/e6nupvti8u4d" },
    { issuer: "Anthropic", when: { sk: "September 2026", en: "September 2026" }, title: "Claude Platform 101", img: "certifikaty/claude-platform-101.jpg", w: 560, h: 422 },
    { issuer: "Anthropic", when: { sk: "September 2026", en: "September 2026" }, title: "AI Fluency for Builders", img: "certifikaty/ai-fluency-builders.jpg", w: 560, h: 410 },
    { issuer: "Anthropic", when: { sk: "September 2026", en: "September 2026" }, title: "AI Fluency for K-12 Educators", img: "certifikaty/ai-fluency-k12-educators.jpg", w: 560, h: 421 },
    { issuer: "Anthropic", when: { sk: "September 2026", en: "September 2026" }, title: "AI Fluency for Creative Work", img: "certifikaty/ai-fluency-creative-work.jpg", w: 560, h: 412 },

    { issuer: "Vanderbilt University · Coursera", when: { sk: "December 2025", en: "December 2025" }, title: "Prompt Engineering for ChatGPT", img: "certifikaty/coursera-prompt-engineering-chatgpt.jpg", w: 560, h: 425, url: "https://coursera.org/verify/8A5BH7JHN4SU" },

    { issuer: "Cisco Networking Academy", when: { sk: "September 2026", en: "September 2026" }, title: "Introduction to Cybersecurity", img: "certifikaty/cisco-introduction-cybersecurity.jpg", w: 560, h: 421, url: "https://www.credly.com/badges/3cd04039-59c4-49fd-9889-2e5d6ffbaf48" },

    { issuer: "STEP IT Academy", when: "2023", title: "STEP IT Academy Junior", img: "certifikaty/step-it-academy-junior.jpg", w: 560, h: 391 }
  ],

  /* Záujmy a koníčky — jednoduchý zoznam, každý s krátkym popisom */
  interests: [
    { name: { sk: "Programovanie a AI", en: "Programming & AI" }, detail: { sk: "Tvorba vlastných projektov, testovanie a porovnávanie nových AI modelov", en: "Building my own projects, testing and comparing new AI models" } },
    { name: { sk: "Šport", en: "Sport" }, detail: { sk: "Behanie, plávanie a bicyklovanie", en: "Running, swimming and cycling" } },
    { name: { sk: "YouTube tvorba", en: "YouTube Content" }, detail: { sk: "Natáčanie a strih vlastného obsahu", en: "Recording and editing my own content" } },
    { name: { sk: "Hry", en: "Gaming" }, detail: { sk: "PC hry a modding vo voľnom čase", en: "PC gaming and modding in my free time" } }
  ],

  footer: {
    email: "alexpoliak21@gmail.com"
  }
};
