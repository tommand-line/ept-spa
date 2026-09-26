# Endurance Landing Page

Landing page statica pronta per Cloudflare Pages.

## Avvio locale
Apri `index.html` nel browser oppure usa un server statico locale.

## Immagini da aggiungere in `/images`
- `background.jpg`: sfondo fisso esterno, preferibilmente 1920x1080 o superiore
- `hero.jpg`: immagine principale, preferibilmente 1800x1100
- `cta.jpg`: banner finale, preferibilmente 1800x700

Il layout funziona anche senza queste immagini grazie ai gradienti di fallback.

## Font locali
Inserisci file `.woff2` in `/fonts` e modifica le regole `@font-face` all'inizio di `css/style.css`.

## Pubblicazione Cloudflare Pages
- Framework preset: None
- Build command: lasciare vuoto
- Build output directory: `/`

Collega il repository GitHub a Cloudflare Pages. Ogni push su `main` produce un nuovo deploy.

## Prima della pubblicazione
- Sostituisci testi, email, telefono e collegamenti social.
- Aggiorna title e meta description.
- Aggiorna `sitemap.xml` e `robots.txt` con il dominio reale.
- Comprimi fotografie in WebP/AVIF se possibile.
