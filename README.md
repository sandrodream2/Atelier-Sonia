# Atelier Sonia

Sito web statico di Atelier Sonia, boutique di piccola ogettistica firmata per la persona speciale e per occasioni speciali. Stile editoriale di lusso minimal (palette avorio/carbone/oro, tipografia Cormorant Garamond + Jost), ispirato al linguaggio estetico dei siti fashion di alta gamma.

## Struttura del repository

- `index.html` — versione italiana completa (file singolo autonomo: HTML, CSS e JavaScript inline).
- `en.html` — versione inglese completa (file singolo autonomo, stessa struttura).
- `README.md` — questo documento.
- `.gitignore` — esclusioni per lo sviluppo locale.

## Caratteristiche

- Sezioni: hero, dichiarazione, filosofia, storia, valori, vetrina con 12 prodotti, occasioni, approccio, metodo, atelier, ambiente, citazione, contatti con modulo, prenotazione su appuntamento, footer.
- Selettore lingua IT/EN nel menu di navigazione (desktop e mobile) che collega `index.html` ed `en.html`.
- Shop vetrina virtuale con filtri per categoria e carrello virtuale (aggiunta, quantità, rimozione, subtotale, persistenza in `localStorage`).
- Animazioni allo scroll, barra di navigazione con effetto glass, layout completamente responsive, supporto `prefers-reduced-motion`.

## Utilizzo

Aprire `index.html` (italiano) o `en.html` (inglese) direttamente in un browser: non è richiesto alcun processo di build o server. Le immagini sono ospitate su Unsplash e richiedono una connessione internet.

## Pubblicazione

Ospitare il file `index.html` su un qualunque servizio di hosting statico (GitHub Pages, Netlify, Cloudflare Pages) selezionando il ramo `main` come sorgente.
