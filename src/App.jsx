import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PALETTE = {
  fondo: "#F7F4EF",
  carta: "#EFEAE2",
  inchiostro: "#2B2824",
  sabbia: "#D8CFBF",
  tortora: "#8A7D6B",
  pietra: "#B5AC9E",
};

const prodotti = [
  { id: 1, nome: "Scatola in legno e velluto", prezzo: "€ 120", tinta: "#D8CFBF", dettaglio: "Intarsio a mano, per anelli e ricordi", occasione: "Anniversario" },
  { id: 2, nome: "Candela profumata artigianale", prezzo: "€ 65", tinta: "#C9BFAF", dettaglio: "Cera d'api, note di fico e cedro", occasione: "Ricorrenze" },
  { id: 3, nome: "Portagioie in ceramica smaltata", prezzo: "€ 98", tinta: "#E3DCCE", dettaglio: "Tinta tortora, finitura lucida", occasione: "Compleanno" },
  { id: 4, nome: "Biglietti dipinti a mano", prezzo: "€ 30", tinta: "#CEC5B4", dettaglio: "Tiratura limitata, busta in tela", occasione: "Ricorrenze" },
  { id: 5, nome: "Cornice in ottone brunito", prezzo: "€ 145", tinta: "#BFB39F", dettaglio: "Per una fotografia preziosa", occasione: "Anniversario" },
  { id: 6, nome: "Profumatore in vetro soffiato", prezzo: "€ 88", tinta: "#D6CCB9", dettaglio: "Aroma di talco e iris", occasione: "Compleanno" },
  { id: 7, nome: "Set per tè in porcellana", prezzo: "€ 210", tinta: "#C5BBA9", dettaglio: "Due tazze e lattiera, decoro a mano", occasione: "Matrimonio" },
  { id: 8, nome: "Miniatura dipinta su commissione", prezzo: "€ 260", tinta: "#DACFBB", dettaglio: "Ritratto su avorio vegetale", occasione: "Matrimonio" },
];

function Logo() {
  return (
    <span className="font-serif text-lg md:text-xl tracking-[0.35em] uppercase" style={{ color: PALETTE.inchiostro }}>
      Atelier Sonia
    </span>
  );
}

function SezioneImmagine({ tinta, altezza, etichetta }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: altezza,
        background: `linear-gradient(160deg, ${PALETTE.carta} 0%, ${tinta} 55%, ${PALETTE.pietra} 100%)`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-sm tracking-[0.5em] uppercase opacity-40" style={{ color: PALETTE.inchiostro }}>
          {etichetta}
        </span>
      </div>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.5), transparent 60%)" }} />
    </div>
  );
}

function Intestazione({ carrello, apriCarrello }) {
  const voci = ["Vetrina", "Occasioni", "L'Atelier", "Regali"];
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: "rgba(247, 244, 239, 0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(43, 40, 36, 0.08)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8">
        <nav className="hidden items-center gap-8 md:flex">
          {voci.map((v) => (
            <button
              key={v}
              className="text-[11px] uppercase tracking-[0.25em] transition-opacity hover:opacity-60"
              style={{ color: PALETTE.inchiostro }}
            >
              {v}
            </button>
          ))}
        </nav>
        <div className="mx-auto md:mx-0">
          <Logo />
        </div>
        <div className="flex items-center gap-7">
          <button className="text-[11px] uppercase tracking-[0.25em] transition-opacity hover:opacity-60" style={{ color: PALETTE.inchiostro }}>
            Account
          </button>
          <button
            onClick={apriCarrello}
            className="relative text-[11px] uppercase tracking-[0.25em] transition-opacity hover:opacity-60"
            style={{ color: PALETTE.inchiostro }}
          >
            Borsa
            <span
              className="absolute -right-5 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-[9px]"
              style={{ background: PALETTE.tortora, color: "#F7F4EF" }}
            >
              {carrello.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(155deg, #E9E2D6 0%, ${PALETTE.sabbia} 45%, #9C9184 100%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.55), transparent 55%)" }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 text-[11px] uppercase tracking-[0.5em]"
          style={{ color: PALETTE.tortora }}
        >
          Piccola oggettistica firmata
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl"
          style={{ color: PALETTE.inchiostro }}
        >
          Piccoli oggetti, per occasioni che restano
        </motion.h1>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-10 border px-10 py-3 text-[11px] uppercase tracking-[0.35em] transition-colors duration-500 hover:bg-[#2B2824] hover:text-[#F7F4EF]"
          style={{ borderColor: PALETTE.inchiostro, color: PALETTE.inchiostro, background: "transparent" }}
        >
          Entra in vetrina
        </motion.button>
      </div>
    </section>
  );
}

function Filosofia() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-8 py-28 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <SezioneImmagine tinta={PALETTE.sabbia} altezza="420px" etichetta="L'atelier" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <p className="mb-6 text-[11px] uppercase tracking-[0.5em]" style={{ color: PALETTE.tortora }}>
          L'Atelier
        </p>
        <h2 className="mb-8 font-serif text-3xl leading-snug md:text-4xl" style={{ color: PALETTE.inchiostro }}>
          Ogni oggetto custodisce un pensiero
        </h2>
        <p className="mb-4 text-sm leading-7" style={{ color: "#5A554E" }}>
          Regalare è un'arte del tempo: scegliere, avvolgere, attendere il momento giusto. La nostra
          piccola oggettistica nasce per una persona speciale e per le occasioni che meritano di essere
          ricordate: un anniversario, un compleanno, un grazie che non trova parole.
        </p>
        <p className="text-sm leading-7" style={{ color: "#5A554E" }}>
          Ogni pezzo è numerato e firmato a mano, in tirature limitate. Non produciamo quantità:
          coltiviamo gesti, con la cura che si dedica a chi si ama.
        </p>
      </motion.div>
    </section>
  );
}

function Vetrina({ aggiungi }) {
  const occasioni = ["Tutti", "Anniversario", "Compleanno", "Matrimonio", "Ricorrenze"];
  const [occasione, setOccasione] = useState("Tutti");
  const visibili = occasione === "Tutti" ? prodotti : prodotti.filter((p) => p.occasione === occasione);
  return (
    <section className="mx-auto max-w-6xl px-8 pb-28">
      <div className="mb-10 text-center">
        <p className="mb-4 text-[11px] uppercase tracking-[0.5em]" style={{ color: PALETTE.tortora }}>
          Vetrina virtuale
        </p>
        <h2 className="font-serif text-3xl md:text-4xl" style={{ color: PALETTE.inchiostro }}>
          Regali per persone speciali
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6" style={{ color: "#5A554E" }}>
          Ogni oggetto è firmato e numerato. Aggiunga i pezzi alla borsa virtuale:
          nessun pagamento, solo il piacere di scegliere.
        </p>
      </div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {occasioni.map((o) => (
          <button
            key={o}
            onClick={() => setOccasione(o)}
            className="border px-5 py-2 text-[10px] uppercase tracking-[0.25em] transition-colors duration-500"
            style={{
              borderColor: occasione === o ? PALETTE.inchiostro : "rgba(43,40,36,0.15)",
              color: occasione === o ? "#F7F4EF" : PALETTE.inchiostro,
              background: occasione === o ? PALETTE.inchiostro : "transparent",
            }}
          >
            {o}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {visibili.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group"
            >
              <div className="relative overflow-hidden">
                <SezioneImmagine tinta={p.tinta} altezza="340px" etichetta="Oggetto" />
                <button
                  onClick={() => aggiungi(p)}
                  className="absolute bottom-0 left-0 right-0 translate-y-full py-3 text-[10px] uppercase tracking-[0.3em] transition-transform duration-500 group-hover:translate-y-0"
                  style={{ background: "rgba(43, 40, 36, 0.85)", color: "#F7F4EF", backdropFilter: "blur(6px)" }}
                >
                  Aggiungi alla borsa
                </button>
              </div>
              <div className="mt-5 text-center">
                <h3 className="mb-1 font-serif text-base" style={{ color: PALETTE.inchiostro }}>
                  {p.nome}
                </h3>
                <p className="mb-1 text-[11px]" style={{ color: PALETTE.pietra }}>
                  {p.dettaglio}
                </p>
                <p className="mb-1 text-sm" style={{ color: PALETTE.tortora }}>
                  {p.prezzo}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: PALETTE.pietra }}>
                  {p.occasione}
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function PannelloCarrello({ aperto, chiudi, carrello, rimuovi }) {
  return (
    <AnimatePresence>
      {aperto && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={chiudi}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(43, 40, 36, 0.25)", backdropFilter: "blur(3px)" }}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col"
            style={{ background: PALETTE.fondo, borderLeft: "1px solid rgba(43,40,36,0.08)" }}
          >
            <div className="flex items-center justify-between px-8 py-6" style={{ borderBottom: "1px solid rgba(43,40,36,0.08)" }}>
              <span className="text-[11px] uppercase tracking-[0.4em]" style={{ color: PALETTE.inchiostro }}>
                La borsa
              </span>
              <button onClick={chiudi} className="text-[11px] uppercase tracking-[0.3em] transition-opacity hover:opacity-60" style={{ color: PALETTE.tortora }}>
                Chiudi
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {carrello.length === 0 ? (
                <p className="mt-8 text-center text-sm" style={{ color: PALETTE.pietra }}>
                  La borsa è vuota.
                </p>
              ) : (
                <ul className="space-y-6">
                  {carrello.map((p, i) => (
                    <li key={`${p.id}-${i}`} className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-serif text-sm" style={{ color: PALETTE.inchiostro }}>{p.nome}</p>
                        <p className="text-xs" style={{ color: PALETTE.pietra }}>{p.prezzo}</p>
                      </div>
                      <button onClick={() => rimuovi(i)} className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60" style={{ color: PALETTE.tortora }}>
                        Rimuovi
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {carrello.length > 0 && (
              <div className="px-8 py-6" style={{ borderTop: "1px solid rgba(43,40,36,0.08)" }}>
                <button
                  className="w-full border py-3 text-[11px] uppercase tracking-[0.35em] transition-colors duration-500 hover:bg-[#2B2824] hover:text-[#F7F4EF]"
                  style={{ borderColor: PALETTE.inchiostro, color: PALETTE.inchiostro }}
                >
                  Procedi all'ordine
                </button>
                <p className="mt-3 text-center text-[10px]" style={{ color: PALETTE.pietra }}>
                  Borsa virtuale di prova: nessun pagamento è attivo.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Piè() {
  return (
    <footer style={{ background: PALETTE.carta }}>
      <div className="mx-auto max-w-6xl px-8 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-xs leading-6" style={{ color: "#5A554E" }}>
              Piccola oggettistica firmata a mano. Per una persona speciale e per occasioni che restano.
            </p>
          </div>
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.35em]" style={{ color: PALETTE.inchiostro }}>
              Occasioni
            </p>
            <ul className="space-y-3 text-xs" style={{ color: "#5A554E" }}>
              <li>Anniversari</li>
              <li>Compleanni</li>
              <li>Matrimoni</li>
              <li>Ricorrenze e ringraziamenti</li>
            </ul>
          </div>
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.35em]" style={{ color: PALETTE.inchiostro }}>
              Restare in contatto
            </p>
            <p className="mb-5 text-xs leading-6" style={{ color: "#5A554E" }}>
              Riceva le lettere dell'atelier: creazioni in tiratura limitata e ispirazioni per le sue occasioni speciali.
            </p>
            <div className="flex border" style={{ borderColor: "rgba(43,40,36,0.2)" }}>
              <input
                placeholder="Indirizzo e-mail"
                className="w-full bg-transparent px-4 py-2.5 text-xs outline-none"
                style={{ color: PALETTE.inchiostro }}
              />
              <button className="px-5 text-[10px] uppercase tracking-[0.25em]" style={{ color: PALETTE.tortora }}>
                Iscriviti
              </button>
            </div>
          </div>
        </div>
        <p className="mt-16 text-center text-[10px] tracking-[0.2em] uppercase" style={{ color: PALETTE.pietra }}>
          Prototipo di prova - nessuna vendita attiva
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [carrello, setCarrello] = useState([]);
  const [aperto, setAperto] = useState(false);

  const aggiungi = (p) => setCarrello((c) => [...c, p]);
  const rimuovi = (i) => setCarrello((c) => c.filter((_, idx) => idx !== i));

  return (
    <div className="min-h-screen" style={{ background: PALETTE.fondo, color: PALETTE.inchiostro }}>
      <Intestazione carrello={carrello} apriCarrello={() => setAperto(true)} />
      <main>
        <Hero />
        <Filosofia />
        <Vetrina aggiungi={aggiungi} />
      </main>
      <Piè />
      <PannelloCarrello aperto={aperto} chiudi={() => setAperto(false)} carrello={carrello} rimuovi={rimuovi} />
    </div>
  );
}
