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
    cvFile: "",           // vlož odkaz na svoje PDF CV (napr. https://.../Alex_Poliak_CV.pdf) a pribudne tlačidlo na stiahnutie
    siteUrl: "",          // po nasadení: plná URL stránky (napr. https://alexpoliak.netlify.app) — pre OG náhľad a SEO
    ogImage: "og-image.svg",
    location: { sk: "Bratislava, Slovensko", en: "Bratislava, Slovakia" },
    title: { sk: "Alex Poliak — Portfólio", en: "Alex Poliak — Portfolio" },
    description: { sk: "Študent elektrotechniky so záujmom o programovanie, web development a umelú inteligenciu. Hľadám brigádu alebo junior pozíciu.", en: "Electrical engineering student interested in programming, web development and AI. Looking for an internship or junior position." }
  },

  hero: {
    available: true,
    status: { sk: "dostupný pre brigádu / junior pozíciu", en: "available for internship / junior role" },
    role: { sk: "Študent elektrotechniky • Web & AI", en: "Electrical Engineering Student • Web & AI" },
    bio: { sk: "Som komunikatívny a zodpovedný študent so záujmom o techniku, programovanie a umelú inteligenciu. Rád tvorím webové projekty a testujem nové AI modely. Hľadám brigádu, kde môžem získať praktické skúsenosti a prispieť tímu.", en: "Communicative and responsible student interested in technology, programming and AI. I enjoy building web projects and testing new AI models. Looking for an internship where I can gain hands-on experience and contribute to a team." }
  },

  links: [
    { label: { sk: "e-mail", en: "email" }, url: "mailto:alexpoliak21@gmail.com" },
    { label: { sk: "LinkedIn", en: "LinkedIn" }, url: "https://www.linkedin.com/in/alex-poliak/" },
    { label: { sk: "GitHub", en: "GitHub" }, url: "https://github.com/Apoliak7777" }
  ],

  sections: {
    order: ["experience", "projects", "skills", "education", "certificates"],
    experience:   { show: true, label: { sk: "Skúsenosti", en: "Experience" } },
    projects:     { show: true, label: { sk: "Projekty", en: "Projects" } },
    skills:       { show: true, label: { sk: "Schopnosti", en: "Skills" } },
    education:    { show: true, label: { sk: "Vzdelanie", en: "Education" } },
    certificates: { show: true, label: { sk: "Certifikáty", en: "Certificates" } }
  },

  experience: [
    {
      current: true,
      when: { sk: "Január 2026 — teraz", en: "January 2026 — present" },
      title: { sk: "Zamestnanec", en: "Employee" },
      company: { sk: "Cinema City Slovakia, Bratislava", en: "Cinema City Slovakia, Bratislava" },
      desc: { sk: "Zákaznícky servis, predaj lístkov a starostlivosť o návštevníkov. Rozvíjam komunikačné a organizačné zručnosti v rýchlom prostredí.", en: "Customer service, ticket sales and guest care. Developing communication and organizational skills in a fast-paced environment." }
    },
    {
      when: { sk: "Máj – Jún 2026", en: "May – June 2026" },
      title: { sk: "Erazmus stáž – Servisný technik", en: "Erasmus Internship – Service Technician" },
      company: { sk: "Penax s.r.o., Česká republika", en: "Penax s.r.o., Czech Republic" },
      desc: { sk: "Praktická stáž v servise. Získavanie skúseností s technickou prácou, náradím a riešením problémov.", en: "Practical service internship. Gaining hands-on experience with technical work, tools and problem solving." }
    },
    {
      when: { sk: "November 2025", en: "November 2025" },
      title: { sk: "Web Developer (projektová spolupráca)", en: "Web Developer (project collaboration)" },
      company: { sk: "wireadvise, Miami, USA", en: "wireadvise, Miami, USA" },
      desc: { sk: "Kompletný vývoj a nasadenie webovej stránky na mieru. Technická správa, údržba a optimalizácia výkonu a používateľského prostredia.", en: "Full custom website development and deployment. Technical maintenance, updates and performance optimization." }
    },
    {
      when: { sk: "November 2024 – November 2025", en: "November 2024 – November 2025" },
      title: { sk: "Zamestnanec", en: "Crew Member" },
      company: { sk: "McDonald's, Bratislava", en: "McDonald's, Bratislava" },
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
      title: { sk: "AI Prompt Engineering & vlastní AI asistenti", en: "AI Prompt Engineering & Custom AI Assistants" },
      desc: { sk: "Intenzívne testovanie a tvorba efektívnych promptov pre ChatGPT a Claude. Vlastní AI asistenti, workflow automatizácia a 17+ certifikátov z oblasti AI.", en: "Intensive testing and creation of effective prompts for ChatGPT and Claude. Custom AI assistants, workflow automation and 17+ AI certificates." },
      url: "",
      tags: ["AI", "Prompt Engineering", "Claude", "GPTs", "MCP"]
    }
  ],

  skills: [
    { name: { sk: "Web Development", en: "Web Development" }, detail: { sk: "HTML5, CSS3, responzívny dizajn, základný JavaScript", en: "HTML5, CSS3, responsive design, basic JavaScript" } },
    { name: { sk: "Umelá inteligencia", en: "Artificial Intelligence" }, detail: { sk: "Prompt Engineering, tvorba Custom GPTs a Claude projektov, AI workflow", en: "Prompt Engineering, Custom GPTs, Claude projects, AI workflows" } },
    { name: { sk: "Technické nástroje", en: "Technical Tools" }, detail: { sk: "Linux OS, Microsoft Office (Word, Excel, PowerPoint)", en: "Linux OS, Microsoft Office suite" } },
    { name: { sk: "Jazyky", en: "Languages" }, detail: { sk: "Slovenčina (C2 – rodný), Angličtina (B1 – mierne pokročilý)", en: "Slovak (C2 – native), English (B1 – intermediate)" } }
  ],

  education: [
    {
      current: true,
      when: { sk: "September 2023 — doteraz", en: "September 2023 — present" },
      title: { sk: "Elektrotechnika v doprave a telekomunikáciách", en: "Electrical Engineering in Transport and Telecommunications" },
      place: { sk: "Stredná priemyselná škola dopravná, Bratislava", en: "Secondary Industrial School of Transport, Bratislava" },
      desc: { sk: "Štúdium zamerané na elektrotechniku, telekomunikácie a technické systémy v doprave.", en: "Studies focused on electrical engineering, telecommunications and technical systems in transport." }
    },
    {
      when: { sk: "2019 – 2023", en: "2019 – 2023" },
      title: { sk: "Programovací kurz – STEP IT Academy Junior", en: "Programming Course – STEP IT Academy Junior" },
      place: { sk: "IT Step Academy, Bratislava", en: "IT Step Academy, Bratislava" },
      desc: { sk: "Viacročný kurz programovania a základov IT pre mladých.", en: "Multi-year programming and IT fundamentals course for youth." }
    }
  ],

  /* Certifikáty — v render sa automaticky zoskupia podľa poľa "issuer".
     Poradie skupín = poradie prvého výskytu vydavateľa v tomto zozname. */
  certificates: [
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude 101" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude Code in Action" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Introduction to Claude Cowork" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency: Framework & Foundations" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude with the Anthropic API" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency: AI Capabilities & Limitations" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Introduction to Subagents" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency for Nonprofits" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency for Students" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "AI Fluency for Educators" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Model Context Protocol: Advanced Topics" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Introduction to Model Context Protocol" },
    { issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Claude with Google Vertex AI" },

    { issuer: "Vanderbilt University · Coursera", when: { sk: "December 2025", en: "December 2025" }, title: "Prompt Engineering for ChatGPT" },
    { issuer: "Vanderbilt University · Coursera", when: { sk: "December 2025", en: "December 2025" }, title: "Advanced Prompt Engineering for Everyone" },
    { issuer: "Vanderbilt University · Coursera", when: { sk: "December 2025", en: "December 2025" }, title: "OpenAI GPTs: Creating Your Own Custom AI Assistants" },
    { issuer: "Vanderbilt University · Coursera", when: { sk: "December 2025", en: "December 2025" }, title: "ChatGPT: Master Free AI Tools to Supercharge Productivity" }
  ],

  footer: {
    email: "alexpoliak21@gmail.com"
  }
};
