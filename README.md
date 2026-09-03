<div align="center">

[![Slovencina](https://img.shields.io/badge/SK-Sloven%C4%8Dina-2ea043?style=for-the-badge)](README.md) [![English](https://img.shields.io/badge/EN-English-30363d?style=for-the-badge)](README.en.md)

</div>

<div align="center">

# 🪪 Apoliak CV online

**Statické dvojjazyčné (SK/EN) online CV a portfólio — tri súbory, žiadny framework, žiadny build.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bez závislostí](https://img.shields.io/badge/závislosti-0-d6ff4b?style=flat-square)
![Bez buildu](https://img.shields.io/badge/build-žiadny-6a6e78?style=flat-square)
![Jazyky](https://img.shields.io/badge/SK%20%2F%20EN-dvojjazyčné-7cc5ff?style=flat-square)

</div>

---

## 📑 Obsah

- [🔎 Prehľad](#-prehľad)
- [✨ Funkcie](#-funkcie)
- [🚀 Rýchly štart](#-rýchly-štart)
- [📁 Štruktúra projektu](#-štruktúra-projektu)
- [⚙️ Konfigurácia](#️-konfigurácia)
- [🧱 Dátový model `content.js`](#-dátový-model-contentjs)
- [⌨️ Klávesové skratky](#️-klávesové-skratky)
- [🖨️ Tlač a PDF](#️-tlač-a-pdf)
- [🌐 Nasadenie](#-nasadenie)
- [⚠️ Známe obmedzenia](#️-známe-obmedzenia)
- [📄 Licencia](#-licencia)

---

## 🔎 Prehľad

Osobné portfólio a online životopis ako jedna statická stránka. Všetok obsah žije v obyčajnom JavaScript objekte `window.CV_DATA` v súbore `content.js`; `index.html` obsahuje kompletné markup, CSS aj renderovací JavaScript inline — prečíta dátový objekt a za behu poskladá celú stránku ako HTML reťazec.

Cieľom je nulová prevádzková réžia: nie je tu package manager, build step, backend ani databáza. Úprava životopisu = úprava jedného objektu v `content.js` a refresh prehliadača. Hosting = nahratie troch súborov (`index.html`, `content.js`, `og-image.svg`) na akýkoľvek statický hosting.

Stránka je od začiatku dvojjazyčná — každý text je pár `{ sk, en }` a prepnutie jazyka len znovu spustí `render()`, bez reloadu.

---

## ✨ Funkcie

- 🌍 **Dvojjazyčnosť SK/EN** — každé textové pole je `{ sk, en }` pár, ktorý rozbaľuje helper `t()`. Voľba jazyka sa ukladá do `localStorage` aj `sessionStorage` a obnoví sa pri ďalšej návšteve.
- 🧩 **Plne dátovo riadený render** — hero, odkazy, štatistiky, všetky sekcie aj pätička vznikajú z `window.CV_DATA`. Poradie a viditeľnosť sekcií riadi `sections.order` a `show: true/false`, prázdne sekcie sa preskočia a čísla sekcií (01, 02, ...) sa prečíslujú automaticky.
- 🎨 **Téma z dát** — `meta.accent`, `accent2` a `accent3` sa pri renderi zapisujú do CSS custom properties na `:root`, takže celá paleta sa mení z `content.js`.
- 🗂️ **Šesť typov sekcií s vlastným layoutom** — časová os skúseností (badge `teraz` pri `current: true`), mriežka projektov (`featured: true` dostane akcentový rám a badge `Hlavný`/`Featured`), riadky schopností, vzdelanie s badge `študujem`/`studying`, certifikáty a kartičky záujmov.
- 🏅 **Automatické zoskupenie certifikátov** — podľa poľa `issuer`, každá skupina má rotujúcu akcentovú farbu, rozsah dátumov, počet so správnym slovenským skloňovaním (certifikát / certifikáty / certifikátov) a tlačidlo na rozbalenie všetkého nad prvých päť. Rozsah dátumov skupiny sa počíta z jednotlivých `when` hodnôt (napr. `Október – November 2025` + `December 2025 – Január 2026` → `Október 2025 – Január 2026`).
- 📊 **Animované počítadlá** — počty skúseností, certifikátov a projektov sa odvodzujú z dát (nie sú natvrdo napísané) a odpočítavajú sa nahor s cubic easingom, keď sa dostanú do viewportu.
- 🔍 **SEO a social metadáta za behu** — `<title>`, `description`, `og:title`, `og:description`, `og:image`, `og:url`, `twitter:image`, `canonical`, `hreflang` (sk / en / x-default) a JSON-LD blok `schema.org/Person` sa vkladajú a aktualizujú pri každej zmene jazyka.
- 🎯 **Favicon z monogramu** — SVG data URI sa generuje z iniciál mena a nastavenej akcentovej farby, nahrádza fallback v `<head>`.
- 🖼️ **Fallback avatara** — pri vyplnenom `meta.photo` sa vykreslí `<img>`, inak gradientový monogram z iniciál.
- 📋 **Kopírovanie do schránky** — tlačidlo `zdieľať` skopíruje URL stránky, e-mail v pätičke skopíruje adresu; obe s toast potvrdením a fallbackom (toast s URL, resp. `mailto:`).
- 🧭 **Scroll UX** — horný progress bar, jump-nav so scroll-spy cez `IntersectionObserver` a plávajúce tlačidlo späť hore.
- 🖨️ **Tlač do PDF** — samostatný `@media print` stylesheet prepne na svetlú tému, skryje prepínač jazyka, progress bar, navigáciu, plávajúce tlačidlo aj toast a **rozbalí všetky skryté certifikáty**.
- ♿ **Prístupnosť** — skip-to-content odkaz, `role="status" aria-live="polite"` toast, `aria-label` na prepínači jazyka aj navigácii, viditeľné `:focus-visible` outliny a plný blok `prefers-reduced-motion`.
- 🛟 **Odolnosť voči chybám** — viditeľný boot stav `Načítavam CV… / Loading…`, `<noscript>` hláška, try/catch okolo štartu, ktorý chybu vypíše priamo na stránku namiesto čiernej obrazovky, fallback keď `IntersectionObserver` chýba, a poistka po 1,4 s, ktorá pridá `body.force` a natvrdo zobrazí čokoľvek zaseknuté na `opacity: 0`.

---

## 🚀 Rýchly štart

Nie je čo inštalovať — žiadny `package.json`, žiadne skripty, žiadne závislosti.

**Najjednoduchšie** — otvor `index.html` priamo v prehliadači:

```powershell
start index.html
```

**Odporúčané** — lokálny statický server (verný náhľad vrátane SEO a schránky):

```bash
python -m http.server 8000
# potom http://localhost:8000
```

```bash
npx serve .
```

> [!TIP]
> Server nie je zbytočnosť. Funkcia `getSiteUrl()` padá späť na `location.origin` len pri protokole `http:` / `https:`. Cez `file://` vráti prázdny reťazec, takže canonical URL, `og:url`, `og:image` aj JSON-LD polia `url`/`image` vyjdú prázdne a hreflang tagy sa nevygenerujú vôbec. Clipboard API navyše potrebuje secure context, takže tlačidlá `zdieľať` a kopírovanie e-mailu cez `file://` len zobrazia toast, resp. otvoria `mailto:`.

**Úprava obsahu** — meníš výhradne `content.js`, potom refresh stránky. Žiadny admin panel ani CMS.

---

## 📁 Štruktúra projektu

```text
Apoliak-CV-online/
├── index.html      # celá aplikácia: <head> s SEO placeholdermi, inline <style>
│                   # (~420 riadkov design systému) a inline <script> (~540 riadkov renderera)
├── content.js      # JEDINÝ súbor, ktorý meníš pri úprave obsahu — window.CV_DATA
├── og-image.svg    # ručne písaná 1200x630 náhľadová karta pre zdieľanie odkazu
├── README.md       # tento súbor (stránka ho nenačítava, na hosting ho netreba)
└── README.en.md    # anglický preklad tohto súboru
```

Kľúčové funkcie v inline skripte `index.html`:

| Funkcia                                                | Čo robí                                                            |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| `t(v, l)`                                              | rozbalí `{ sk, en }` pár podľa aktuálneho jazyka                   |
| `esc()` / `safeUrl()`                                  | HTML escaping textu a neutralizácia `javascript:` URL              |
| `getSiteUrl()` / `absUrl()`                            | základná URL stránky a absolútne cesty pre metadáta                |
| `render()`                                             | poskladá celý dokument a zapíše ho do `<main id="app">`            |
| `renderSection()`                                      | šesť vetiev layoutu podľa kľúča sekcie                             |
| `certRange()`                                          | rozsah dátumov skupiny certifikátov z jednotlivých `when` hodnôt   |
| `renderStats()` / `renderJumpNav()`                    | štatistiky a jump navigácia z dát                                  |
| `updateSeo()` / `updateHreflang()` / `updateFavicon()` | metadáta, JSON-LD a favicon za behu                                |
| `observeReveals()` / `observeScrollSpy()` / `observeStats()` | tri `IntersectionObserver` inštancie                         |
| `bindInteractions()`                                   | rozbalenie certifikátov, zdieľanie, kopírovanie e-mailu, späť hore |
| `setLang(l)`                                           | uloží jazyk a znovu vykreslí stránku                               |

Zámerne tu **nie je**: `package.json`, lockfile, `node_modules`, build konfigurácia, testy, CI ani `.gitignore`.

---

## ⚙️ Konfigurácia

Celá konfigurácia je v bloku `meta` v `content.js`. Žiadne premenné prostredia, žiadne config súbory.

| Kľúč                              | Predvolená hodnota | Význam                                                                                                                                                                              |
| --------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta.name`                       | `"Alex Poliak"`    | meno v hero, iniciály pre monogram a favicon                                                                                                                                        |
| `meta.accent`                     | `#d6ff4b`          | hlavná akcentová farba → CSS `--accent`                                                                                                                                             |
| `meta.accent2`                    | `#ff9d54`          | doplnková farba → `--accent-2`                                                                                                                                                      |
| `meta.accent3`                    | `#7cc5ff`          | tretia farba → `--accent-3` (skupiny certifikátov)                                                                                                                                  |
| `meta.photo`                      | prázdne            | URL fotky; prázdne = gradientový monogram                                                                                                                                           |
| `meta.cvFile`                     | prázdne            | URL na PDF; po vyplnení pribudne tlačidlo *Stiahnuť CV (PDF)*                                                                                                                       |
| `meta.siteUrl`                    | prázdne            | **doplniť po nasadení** — plná verejná URL pre SEO a OG                                                                                                                             |
| `meta.ogImage`                    | `og-image.svg`     | náhľadový obrázok, absolutizuje sa voči `siteUrl`                                                                                                                                   |
| `meta.location`                   | Bratislava         | `{ sk, en }` lokalita zobrazená v hero; v JSON-LD slúži len ako prepínač, či sa vygeneruje blok `address` — samotné `addressLocality: 'Bratislava'` a `addressCountry: 'SK'` sú natvrdo v `index.html` |
| `meta.title` / `meta.description` | `{ sk, en }`       | `<title>` a meta description podľa jazyka                                                                                                                                           |
| `hero.available`                  | `true`             | zapína pulzujúcu bodku dostupnosti vo farbe `meta.accent`                                                                                                                           |
| `sections.order`                  | pole 6 kľúčov      | poradie sekcií na stránke                                                                                                                                                           |
| `sections.<key>.show`             | `true`             | vypnutie sekcie bez mazania dát                                                                                                                                                     |

> [!NOTE]
> Hlavná ladiaca konštanta mimo `content.js` je `CERT_PREVIEW = 5` v inline skripte `index.html` — koľko certifikátov na vydavateľa sa zobrazí pred tlačidlom *Zobraziť ďalších N*. Okrem nej sú v `index.html` natvrdo aj fallback favicon (monogram „AP" a farba `#d6ff4b`), statický `<title>Portfólio</title>`, `theme-color` (statická hodnota v `<head>`, ktorú `render()` prepíše vypočítaným pozadím `body`), `og:locale` (`sk_SK`), rozmery OG obrázka, JSON-LD adresa a celá `:root` fallback paleta, ktorej `--accent` / `--accent-2` / `--accent-3` duplikujú hodnoty z `content.js`.

---

## 🧱 Dátový model `content.js`

| Kľúč          | Typ     | Obsah                                                                                     |
| ------------- | ------- | ----------------------------------------------------------------------------------------- |
| `meta`        | objekt  | nastavenia vyššie                                                                         |
| `hero`        | objekt  | `available`, `status`, `role`, `bio`                                                      |
| `links`       | pole    | `{ label: {sk,en}, url }` — externé odkazy dostanú `target="_blank" rel="noopener"` a šípku |
| `sections`    | objekt  | `order` + `{ show, label }` pre každú sekciu                                               |
| `experience`  | pole    | `current`, `when`, `title`, `company`, `desc`                                              |
| `projects`    | pole    | `featured`, `title`, `desc`, `url`, `tags[]`                                               |
| `skills`      | pole    | `name`, `detail`                                                                           |
| `education`   | pole    | `current`, `when`, `title`, `place`, `desc`                                                |
| `certificates`| pole    | `issuer`, `when`, `title`, voliteľne `url`                                                 |
| `interests`   | pole    | `name`, `detail`                                                                           |
| `footer`      | objekt  | `email`                                                                                    |

---

## ⌨️ Klávesové skratky

Stránka registruje jediný `keydown` listener s dvomi skratkami:

| Klávesa | Akcia                    |
| ------- | ------------------------ |
| `S`     | prepnutie na slovenčinu  |
| `E`     | prepnutie na angličtinu  |

Skratky sú potlačené, kým je fokus v `INPUT`, `TEXTAREA` alebo `SELECT`.

> [!WARNING]
> Listener nekontroluje modifikátory, takže `Ctrl` + `S` (resp. `Cmd` + `S`) popri natívnom dialógu na uloženie stránky prepne jazyk na slovenčinu. To isté platí pre `Ctrl` + `E`.

---

## 🖨️ Tlač a PDF

Export do PDF nie je funkcia aplikácie, ale natívna funkcia prehliadača: `Ctrl` + `P` (resp. `Cmd` + `P`) → *Uložiť ako PDF*. Aplikácia k nej dodáva len `@media print` stylesheet, ktorý pre tlač prepne na svetlú tému, skryje ovládacie prvky a rozbalí všetky skryté certifikáty.

---

## 🌐 Nasadenie

Nahraj tri súbory — `index.html`, `content.js` a `og-image.svg` — tak, ako sú, na akýkoľvek statický hosting: GitHub Pages, Netlify, Vercel, obyčajný nginx alebo Apache. `README.md` a `README.en.md` môžeš nahrať tiež, stránka ich nepoužíva. Žiadne PHP, žiadna databáza, žiadne prostredie.

Pred nasadením:

1. Nastav `meta.siteUrl` v `content.js` na finálnu verejnú URL.
2. Aktualizuj `og-image.svg`, ak si menil meno alebo rolu (obrázok si dáta nečíta).
3. Zváž nahradenie `og-image.svg` za PNG 1200x630 a úpravu `meta.ogImage` — pozri obmedzenia nižšie.

---

## ⚠️ Známe obmedzenia

> [!WARNING]
> **`og:image` ukazuje na SVG.** Facebook, LinkedIn, X ani Slack SVG náhľady nevykresľujú — na reálne zobrazenie náhľadovej karty treba PNG alebo JPG v rozmere 1200x630. Toto je najpravdepodobnejšia vec, ktorá v produkcii ticho nebude fungovať.

- **`meta.siteUrl` je prázdne** v commitnutých dátach. Na `http(s)` hostingu to nevadí — `getSiteUrl()` padne späť na `location.origin`, takže canonical, `og:url`, `og:image` aj JSON-LD `url`/`image` fungujú. Cez `file://` však vyjdú prázdne a všetky tri hreflang tagy sa nevygenerujú vôbec. Doplniť `siteUrl` sa aj tak oplatí kvôli kanonickej doméne (napr. apex vs. `www`).
- **`og-image.svg` sa negeneruje z dát.** Meno, rola, text o dostupnosti, e-mail aj mesto sú v ňom napísané natvrdo. Zmena `content.js` ho nechá zastaraný, treba ho upraviť ručne.
- **Statické OG tagy sa pri prepnutí jazyka neaktualizujú.** `updateSeo()` prepisuje len `og:title`, `og:description`, `og:image` a `og:url`. `og:type`, `og:locale`, `og:locale:alternate` a rozmery obrázka zostávajú tak, ako sú v `index.html` — `og:locale` teda hlási `sk_SK` aj v anglickej verzii.
- **JavaScript je povinný.** Crawler, ktorý JS nespúšťa, uvidí statický fallback `<title>Portfólio</title>`, prázdny `<meta name="description">` a `<main>`, v ktorom je len `<noscript>` hláška plus zvyšný boot text `Načítavam CV… / Loading…` — teda nič z reálneho obsahu CV. Rovnaké dva texty vidí aj používateľ s vypnutým JavaScriptom, pretože boot element odstráni až `render()`.
- **Skrytá vetva `?preview=1`.** Inline skript pri tomto parametri nahradí `window.CV_DATA` obsahom `localStorage` kľúča `cv_admin_draft` (podľa komentára ide o náhľad z admin panelu). Žiadny admin panel v tomto repozitári nie je, takže funkcia je tu nedostupná — ale znamená to, že čokoľvek s prístupom k `localStorage` domény vie pri návšteve s `?preview=1` ovládať vykreslený obsah.
- **Obsah je dôveryhodný z definície.** Stránka sa skladá cez `innerHTML` a reťazcovú konkatenáciu; `esc()` a `safeUrl()` stačia na dáta, ktoré píše autor, ale renderer nikdy nenapájaj na obsah od používateľov alebo tretích strán bez ďalšieho zabezpečenia.
- **Osobné kontaktné údaje sú v repozitári v plaintexte** (`content.js` aj `og-image.svg`). Pri forku ako šablónu ich treba všetky vymeniť.
- **Google Fonts je externá požiadavka** (Space Grotesk, JetBrains Mono). Načítava sa neblokujúco cez `media="print"` s prepnutím na `all`, takže stránka je plne použiteľná aj offline so systémovým fontom — fonty sa dajú bez straty funkčnosti self-hostovať.
- **`index.html` a `content.js` musia zostať v rovnakom priečinku** — script tag používa holú relatívnu cestu bez fallbacku. Ak `content.js` chýba alebo má syntaktickú chybu, stránka namiesto prázdna vypíše `Obsah sa nepodarilo načítať.`
- **Žiadne testy, linting ani CI.** Správnosť úpravy obsahu sa dá overiť len otvorením stránky v prehliadači.
- **Prepnutie jazyka je úplný re-render** — rozbalené skupiny certifikátov sa zbalia a animácia počítadiel sa prehrá odznova.

---

## 📄 Licencia

V repozitári **nie je žiadny LICENSE súbor** a ani jeden zdrojový súbor neobsahuje licenčnú hlavičku. Dielo je preto štandardne „all rights reserved" — nikomu sa neudeľujú práva na použitie, úpravu ani ďalšie šírenie.

> [!NOTE]
> `content.js` označuje tento projekt tagom `Open Source` a odkazuje na verejný GitHub repozitár. Ak je open source skutočným zámerom, treba doplniť licenčný súbor (napr. MIT).

---

<div align="center">

Vytvoril **Alex Poliak** — [GitHub](https://github.com/Apoliak7777) — [alexpoliak21@gmail.com](mailto:alexpoliak21@gmail.com)

</div>
