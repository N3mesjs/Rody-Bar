"use client"

import Img from 'next/image';
import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';

import cockV from '../public/cock-verde.png'

export default function Page() {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const breakRef = useRef<null | HTMLDivElement>(null);
  return (
    <div className='bg-[#F5F7F8] min-h-screen'>
      <NavBar ref={aboutRef} />
      <main className='flex flex-row mt-[6em] w-[1350px]'>
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
      <section ref={aboutRef} className='mt-[6em] flex flex-col justify-center items-center bg-[#45474B] text-white p-[5em] text-center mb-[5em]'>
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
      <h2 className='text-5xl underline font-bold mb-[2em] text-center'>Il Nostro Menu:</h2>

      <div className='grid grid-cols-4 gap-[2em] mb-[5em] px-[5em]'>
        <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
          <Img src={cockV} alt="caffe" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
          <button className='text-center font-bold text-2xl mt-2 bg-cyan-600 py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Cocktails</button>
        </div>

        <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
          <Img src={cockV} alt="caffe" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
          <button className='text-center font-bold text-2xl mt-2 bg-amber-500 py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Cocktails</button>
        </div>

        <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
          <Img src={cockV} alt="caffe" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
          <button className='text-center font-bold text-2xl mt-2 bg-amber-500 py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Cocktails</button>
        </div>

        <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
          <Img src={cockV} alt="caffe" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
          <button className='text-center font-bold text-2xl mt-2 bg-amber-500 py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Cocktails</button>
        </div>
      </div>

      <section className='bg-[#495E57] text-white p-[7em]'>
        <div ref={breakRef} className='colonne text-2xl'>
          <div className='flex flex-col gap-[1.5em]'>
            <div>
              <Img src="/spritz.png" alt="caffè" width={300} height={300} />
            </div>
            <div>
              <Img src="/cock-verde.png" alt="cocktail verde" width={300} height={300} />
            </div>
          </div>
          <div className='flex flex-col gap-[1.5em]'>
            <h2 className='text-4xl'>Cocktail</h2>
            <hr />
            <div className='flex justify-between'>
              <h3 className='font-medium'>Hugo</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Mojito</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Long Island Ice Tea</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Americano</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Negroni</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Pina Colada</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Coca e Malibù</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Coca Havana</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Gin Tonic</h3>
              <span>€ 6,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Gin Lemon</h3>
              <span>€ 6,00</span>
            </div>
          </div>
        </div>
      </section>
      <footer>
        sfws
      </footer>
    </div>
  )
}