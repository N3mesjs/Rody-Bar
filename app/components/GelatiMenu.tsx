"use client";
import Img from "next/image";
import React, { useState } from "react";

interface PropsTypes {
  iceCreamRef: React.RefObject<HTMLDivElement | null>;
}

export default function IceCreamMenu(props: PropsTypes) {
  const [open, setOpen] = useState(false);

  return (
    <div ref={props.iceCreamRef} className="bg-background text-black md:p-[7em] max-md:p-[2em]">
      <div className="flex flex-col text-2xl">
        {/* Colonna immagini */}
        <div className="flex justify-center items-center gap-[1.5em] mb-10">
          <Img src="/gelato.png" alt="gelati" width={300} height={300} />
        </div>

        {/* Colonna menu */}
        <div className="flex flex-col justify-center items gap-[2em] lg:w-[950px] mx-auto">
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-gray-200 active:bg-gray-200 rounded-xl px-[1em] py-[0.5em] flex justify-between items-center"
          >
            <h2 className="max-md:text-2xl text-4xl">Gelati</h2>
            <ArrowIcon open={open} />
          </button>
          <hr />

          <div className={`sub-menu${open ? " show" : ""}`}>
            <div className="flex flex-col gap-[1.5em] mt-[1em]">
              <div className="menu-item">
                <h3 className="font-medium">Cono piccolo</h3>
                <span>€ 2,50</span>
              </div>
              <div className="menu-item">
                <h3 className="font-medium">Cono grande</h3>
                <span>€ 3,50</span>
              </div>
              <div className="menu-item">
                <h3 className="font-medium">Coppa piccola</h3>
                <span>€ 2,50</span>
              </div>
              <div className="menu-item">
                <h3 className="font-medium">Coppa grande</h3>
                <span>€ 3,50</span>
              </div>
              <div className="menu-item">
                <h3 className="font-medium">1000 gr</h3>
                <span>€ 24,00</span>
              </div>
              <div className="menu-item">
                <h3 className="font-medium">500 gr</h3>
                <span>€ 12,00</span>
              </div>
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