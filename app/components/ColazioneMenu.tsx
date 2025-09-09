"use client";
import Img from "next/image";
import React, { useState } from "react";

interface PropsTypes {
  breakRef: React.RefObject<HTMLDivElement | null>;
}

export default function ColazioneMenu(props: PropsTypes) {
  const [open, setOpen] = useState(false);

  return (
    <div ref={props.breakRef} className="bg-oliveGreen text-white p-[7em]">
      <div className="colonne text-2xl">
        {/* Colonna immagini */}
        <div className="flex flex-col justify-between items-center gap-[1.5em]">
          <Img src="/caffe.png" alt="caffè" width={300} height={300} />
          <Img src="/smily-coffe.png" alt="caffè con faccina sorridente" width={300} height={300} />
          <Img src="/toast.png" alt="toast" width={300} height={400} />
          <Img src="/tagliere.png" alt="tagliere" width={300} height={300} />
        </div>

        {/* Colonna menu */}
        <div className="flex flex-col gap-[1.5em]">
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-oliveGreenHover rounded-xl px-[1em] py-[0.5em] flex justify-between items-center"
          >
            <h2 className="max-md:text-2xl text-4xl">Caffetteria & Colazioni</h2>
            <ArrowIcon open={open} />
          </button>
          <hr/>

          <div className={`sub-menu${open ? " show" : ""}`}>
            <div className="flex flex-col gap-[1.5em] mt-[1em]">
              <div className="menu-item"><h3 className="font-medium">Caffè / Caffè Deca</h3><span>€ 1,40</span></div>
              <div className="menu-item"><h3 className="font-medium">Caffè Corretto</h3><span>€ 2,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Caffè Americano</h3><span>€ 2,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Macchiatone</h3><span>€ 1,50</span></div>
              <div className="menu-item"><h3 className="font-medium">Cappuccino (Normale / Deca)</h3><span>€ 1,70</span></div>
              <div className="menu-item"><h3 className="font-medium">Cappuccino (Orzo / Soia / Ginseng)</h3><span>€ 1,90</span></div>
              <div className="menu-item"><h3 className="font-medium">Orzo</h3><span>€ 1,40</span></div>
              <div className="menu-item"><h3 className="font-medium">Ginseng</h3><span>€ 1,40</span></div>
              <div className="menu-item"><h3 className="font-medium">Tazza Piccola Ginseng</h3><span>€ 1,60</span></div>
              <div className="menu-item"><h3 className="font-medium">Tazza Grande Ginseng</h3><span>€ 1,80</span></div>
              <div className="menu-item"><h3 className="font-medium">Latte Macchiato</h3><span>€ 2,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Latte Bianco</h3><span>€ 1,50</span></div>
              <div className="menu-item"><h3 className="font-medium">Tè Caldo</h3><span>€ 1,50</span></div>
              <div className="menu-item"><h3 className="font-medium">Cioccolata Calda</h3><span>€ 3,50</span></div>
              <div className="menu-item"><h3 className="font-medium">Brioches</h3><span>€ 1,40</span></div>
              <div className="menu-item"><h3 className="font-medium">Donuts</h3><span>€ 2,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Sandwich</h3><span>€ 2,50</span></div>
              <div className="menu-item"><h3 className="font-medium">Spremuta d’Arancia</h3><span>€ 3,50</span></div>
              <div className="menu-item"><h3 className="font-medium">Succo di Frutta</h3><span>€ 3,00</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32px"
      width="32px"
      viewBox="0 -960 960 960"
      fill="#e3e3e3"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
}