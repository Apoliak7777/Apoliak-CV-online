# Online CV — Alex Poliak

Dva súbory, jeden princíp: **obsah upravuješ v `content.js`, dizajn je hotový v `index.html`.**

- `index.html` — samotná stránka (dizajn + logika, nič tu netreba meniť)
- `content.js` — všetky tvoje dáta (jediný súbor, ktorý bežne upravuješ)
- `og-image.svg` — náhľad pri zdieľaní linku (LinkedIn, WhatsApp…)
- `robots.txt` — pre vyhľadávače

---

## Ako to dať online (zadarmo)

Najjednoduchšie cez **Netlify Drop**: choď na https://app.netlify.com/drop a pretiahni tam celý priečinok s oboma súbormi. O pár sekúnd dostaneš odkaz. Funguje aj GitHub Pages, Vercel alebo akýkoľvek hosting cez FTP — stačí nahrať oba súbory do jedného priečinka.

---

## Ako upravovať obsah

Otvor `content.js` v ľubovoľnom editore a prepisuj texty. Všetko je dvojjazyčné vo formáte `{ sk: "...", en: "..." }` — vyplň obe verzie a návštevník si prepne jazyk tlačidlom SK / EN.

Po úprave súbor ulož a znova nahraj na hosting (na Netlify znova pretiahneš priečinok). Hotovo.

### Pridanie položky

Skopíruj existujúci blok v danom poli a uprav ho. Napríklad nová **skúsenosť**:

```js
{
  when:    { sk: "Rok", en: "Year" },
  title:   { sk: "Pozícia", en: "Position" },
  company: { sk: "Firma, Mesto", en: "Company, City" },
  desc:    { sk: "Čo si robil.", en: "What you did." }
}
```

Nový **certifikát** (automaticky sa zoskupí k rovnakému `issuer`):

```js
{ issuer: "Anthropic", when: { sk: "Máj 2026", en: "May 2026" }, title: "Názov certifikátu" }
```

---

## Prispôsobenie

- **Farby:** hore v `content.js` v `meta` zmeníš `accent`, `accent2`, `accent3` — prejaví sa to na celej stránke (odznaky, akcenty, monogram, favicon).
- **Fotka:** do `meta.photo` vlož URL obrázka. Ak necháš prázdne, zobrazí sa monogram z iniciálok (napr. „AP").
- **PDF životopis:** do `meta.cvFile` vlož odkaz na svoje PDF a v hlavičke pribudne tlačidlo „Stiahnuť CV (PDF)". Prípadne si stránku ulož ako PDF cez prehliadač (Ctrl / Cmd + P → Uložiť ako PDF) — má na to pripravený tlačový štýl.
- **SEO a zdieľanie:** po nasadení vyplň `meta.siteUrl` (plná URL stránky, napr. `https://tvoje-meno.netlify.app`). Automaticky sa doplní canonical link, Open Graph náhľad (`og-image.svg`) a JSON-LD pre Google.
- **Certifikáty:** dlhé skupiny sa zbalia (zobrazí sa prvých 5, zvyšok po kliknutí). Voliteľné pole `url` pri certifikáte pridá odkaz na overenie.
- **Projekty:** pole `featured: true` zvýrazní hlavný projekt; `url` spraví kartu klikateľnú.
- **Sekcie:** v `sections` zapneš/vypneš sekciu (`show: true/false`), premenuješ ju (`label`) a zmeníš poradie (`order`).
- **Štatistiky** v hlavičke (počet skúseností, certifikátov, projektov) sa počítajú automaticky z dát — netreba ich udržiavať ručne.
