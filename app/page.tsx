"use client"

import Img from 'next/image';
import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';

export default function Page() {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  return (
    <div className='bg-[#F5F7F8] min-h-screen'>
      <NavBar ref={aboutRef}/>
      <main className='flex flex-row mt-[6em]'>
        <div className='w-1/2 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Benvenuti al <u>Rody Bar!</u></h1>
        <div className='w-1/2 text-center mt-5'>
          <p>Un luogo dove ogni sorriso vale più di mille brindisi. Qui non sei cliente, sei di casa.</p>
          <button className='mt-5 px-4 py-3 bg-[#495E57] rounded-2xl text-white shadow'>Scopri cosa abbiamo da offrire</button>
        </div>
        </div>
        <div className='w-1/2 flex justify-center'>
          <Img src="/alex-zie.png" alt="foto del personale" width={400} height={400}/>
        </div>
      </main>
      <section ref={aboutRef} className='mt-[10em] flex flex-col justify-center items-center bg-[#45474B] text-white p-[5em] text-center'>
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
    </div>
  )
}