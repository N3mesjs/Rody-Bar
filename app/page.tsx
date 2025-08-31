"use client"

import Img from 'next/image';
import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';

import beer from '/public/beer.png';
import cockVerde from '/public/cock-verde.png';
import biraMoretti from '/public/bira-moretti.png';
import paninoSoppressa from '/public/panino-soppressa.png';
import spritz from '/public/spritz.png';
import tagliere from '/public/tagliere.png';
import toast from '/public/toast.png';
import caffe from '/public/caffe.png';
import panino from '/public/panino.png';
import alexZie from '/public/alex-zie.png';
import arrow from '/public/arrow.png';
import logo from '/public/Logo.jpeg';

export default function Page() {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  return (
    <div className='bg-[#F5F7F8] min-h-screen'>
      <NavBar ref={aboutRef} />
      <main className='flex flex-row mt-[6em]'>
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold'>Benvenuti al <u>Rody Bar!</u></h1>
          <div className='w-1/2 text-center mt-5 flex flex-col justify-center items-center'>
            <p>Un luogo dove ogni sorriso vale più di mille brindisi. Qui non sei cliente, sei di casa.</p>
            <button className='mt-5 px-4 py-3 bg-[#495E57] rounded-2xl text-white shadow flex items-center button-anim'>Scopri cosa abbiamo da offrire<Img src="/arrow.png" alt="freccia" width={24} height={24} /></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center'>
          <Img src="/alex-zie.png" alt="foto del personale" width={400} height={400} />
        </div>
      </main>
      <section ref={aboutRef} className='mt-[10em] flex flex-col justify-center items-center bg-[#45474B] text-white p-[5em] text-center mb-[5em]'>
        <h2 className='text-4xl font-bold mb-[1em]'>Eventi</h2>
        <p>
          Il <strong>Rody Bar</strong> nasce dalla voglia di creare un luogo accogliente,
          familiare e autentico, dove ogni ospite possa sentirsi a casa.
        </p>
        <p>
          Amiamo la qualità dei nostri caffè, la freschezza dei nostri cocktail
          e i sorrisi che nascono in ogni serata passata insieme.
        </p>
      </section>
      <h1 className='text-5xl underline font-bold mb-[2em] text-center'>Le Nostre Pietanze:</h1>
      <div className="colonne-img border-2 p-5 rounded-lg mb-[7em]">
        <Img src={beer} alt="birra" />
        <Img src={cockVerde} alt="cocktail" />
        <Img src={biraMoretti} alt="birre becks" />
        <Img src={paninoSoppressa} alt="panino con la soppressa" />
        <Img src={spritz} alt="vassoio con snack e spritz aperol" />
        <Img src={tagliere} alt="immagine di un vassoio con snack per un mini evento" />
        <Img src={toast} alt="toast" />
        <Img src={caffe} alt="caffe" />
        <Img src={panino} alt="panino"/>
      </div>
      <footer>
        sfws
      </footer>
    </div>
  )
}