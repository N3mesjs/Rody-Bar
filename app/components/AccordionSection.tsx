"use client";
import React, { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function AccordionSection({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setOpen(!open)}
        className="hover:bg-oliveGreenHover rounded-xl px-[1em] py-[0.5em] linea flex justify-between items-center"
      >
        <h3 className="text-2xl font-semibold text-start">{title}</h3>
        <ArrowIcon open={open} />
      </button>

      <div className={`sub-menu${open ? " show" : ""}`}>
        <div className="flex flex-col gap-[1.5em] mt-[1em]">{children}</div>
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