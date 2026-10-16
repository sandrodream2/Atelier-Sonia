# Atelier Sonia

Prototipo di vetrina virtuale per piccola oggettistica firmata, dedicata a una persona speciale e a occasioni speciali (anniversari, compleanni, matrimoni, ricorrenze e ringraziamenti).

## Descrizione

Atelier Sonia è una web app React con un'estetica editoriale e minimalista ispirata ai principi del design di lusso:

- palette neutra e desaturata (avorio, sabbia, tortora, pietra);
- spazio negativo abbondante e tipografia serif per i titoli;
- intestazione con effetto "frosted glass" (blur e traslucenza);
- animazioni lente e discrete (framer-motion);
- vetrina virtuale con filtri per occasione;
- borsa virtuale (carrello) con aggiunta e rimozione articoli, senza pagamenti attivi.

## Stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [framer-motion](https://motion.dev/)

## Avvio del progetto

```bash
npm install
npm run dev
```

L'applicazione sarà disponibile all'indirizzo indicato nel terminale (di norma http://localhost:5173).

## Build di produzione

```bash
npm run build
npm run preview
```

## Struttura

```
atelier-sonia/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── index.css
    └── App.jsx
```

## Note

- Le immagini dei prodotti sono segnaposto in tinte neutre: sostituirle con fotografie editoriali reali.
- La borsa è virtuale: nessun pagamento è attivo. Il prototipo è predisposto per il futuro collegamento a un backend e-commerce (Shopify headless oppure Medusa con Stripe).
- Marchio e contenuti sono originali; il progetto non utilizza materiale di terze parti.
