# Atelier Sonia — Sito web

Sito web statico completo per Atelier Sonia: piccola oggettistica firmata e regali per persone speciali e occasioni speciali.

## Struttura

L'intero sito è contenuto in un unico file autonomo:

- `index.html` — documento HTML completo con CSS e JavaScript inline (nessuna dipendenza da build, npm o bundler).

## Sezioni del sito

- Hero con parallasse e invito all'azione.
- Dichiarazione (statement) e filosofia del brand, con storia, firma della fondatrice e valori.
- Vetrina con 12 prodotti, filtri per categoria (Casa, Scrivania, Persona, Confezioni) e contatore oggetti.
- Sezione Occasioni, Approccio (metodo in 4 fasi), Ambiente dell'atelier e citazioni.
- Contatti con modulo (demo) e sezione prenotazione su appuntamento.
- Carrello virtuale (drawer laterale) con quantità, rimozione articoli, subtotale e toast di conferma.
- Menu mobile, animazioni reveal allo scroll, barra di navigazione con effetto frosted glass, supporto `prefers-reduced-motion`.

## Note tecniche

- Tipografia: Cormorant Garamond e Jost via Google Fonts; immagini da Unsplash. Il sito richiede una connessione internet per caricare questi asset esterni.
- Il carrello e il modulo contatti sono dimostrativi: nessun pagamento e nessun invio dati sono attivi.
- Il sito è pronto per il deployment statico: GitHub Pages, Netlify, Vercel o Cloudflare Pages, senza alcuna build.

## Avvio locale

Aprire semplicemente `index.html` in un browser.

## Note

- Marchio e contenuti sono originali; il progetto non utilizza materiale di terze parti.
- Evoluzione futura possibile: collegamento del carrello a un backend e-commerce reale (Shopify headless o Medusa con Stripe).
