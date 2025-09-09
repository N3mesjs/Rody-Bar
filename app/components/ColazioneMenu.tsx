"use client";

import React, { useState } from "react";

import Caffe from '../../public/caffe.png';
import SmilyCoffe from '../../public/smily-coffe.png';
import Toast from '../../public/toast.png';
import Tagliere from '../../public/tagliere.png';

import ImageCarrousel from './ImageCarrousel';

interface PropsTypes {
  breakRef: React.RefObject<HTMLDivElement | null>;
}

export default function ColazioneMenu(props: PropsTypes) {
  const [open, setOpen] = useState(false);

  const ImgArray: any[] = [Caffe, SmilyCoffe, Toast, Tagliere];

  return (
    <div ref={props.breakRef} className="bg-oliveGreen text-white md:p-[7em] max-md:p-[2em]">
      <div className="flex flex-col text-2xl">
        {/* Colonna immagini */}
        <div className="flex justify-between items-center gap-[1.5em] mb-10">
          <ImageCarrousel imagesArray={ImgArray} />
        </div>

        {/* Colonna menu */}
        <div className="flex flex-col justify-center items gap-[2em] lg:w-[950px] mx-auto">
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-oliveGreenHover active:bg-oliveGreenHover rounded-xl px-[1em] py-[0.5em] flex justify-between items-center"
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