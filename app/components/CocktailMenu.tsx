"use client";
import Img from "next/image";
import React, { useState } from "react";

import ImageCarrousel from './ImageCarrousel';

import Spritz from '../../public/spritz.png';
import Hugo from '../../public/hugo.png'

interface PropsTypes {
  cocktailRef: React.RefObject<HTMLDivElement | null>;
}

export default function CocktailMenu(props: PropsTypes) {
  const [open, setOpen] = useState(false);
  
  const ImgArray: any[] = [Spritz, Hugo];

  return (
    <div ref={props.cocktailRef} className="bg-background text-black md:p-[7em] max-md:p-[2em]">
      <div className="flex flex-col text-2xl">
        {/* Colonna immagini */}
        <div className="flex justify-center items-center gap-[1.5em] mb-10">
          <ImageCarrousel imagesArray={ImgArray}/>
        </div>

        {/* Colonna menu */}
        <div className="flex flex-col justify-center items gap-[2em] lg:w-[950px] mx-auto">
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-gray-200 active:bg-gray-200 rounded-xl px-[1em] py-[0.5em] flex justify-between items-center"
          >
            <h2 className="max-md:text-2xl text-4xl">Cocktail</h2>
            <ArrowIcon open={open} />
          </button>
          <hr/>

          <div className={`sub-menu${open ? " show" : ""}`}>
            <div className="flex flex-col gap-[1.5em] mt-[1em]">
              <div className="menu-item"><h3 className="font-medium">Hugo</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Mojito</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Long Island Ice Tea</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Americano</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Negroni</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Pina Colada</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Coca e Malibù</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Coca Havana</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Gin Tonic</h3><span>€ 6,00</span></div>
              <div className="menu-item"><h3 className="font-medium">Gin Lemon</h3><span>€ 6,00</span></div>
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
      fill="currentColor"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
}