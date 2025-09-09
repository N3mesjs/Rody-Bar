"use client"

import Img from 'next/image';
import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import BibiteMenu from './components/BibiteMenu';
import ColazioneMenu from './components/ColazioneMenu';
import CocktailMenu from './components/CocktailMenu';
import GelatiMenu from './components/GelatiMenu'

import spritz from '../public/spritz.png';
import caffe from '../public/caffe.png';
import bibite from '../public/bira-moretti.png';
import gelato from '../public/gelato.png';

export default function Page() {
  const eventRef = useRef<null | HTMLDivElement>(null);
  const menuRef = useRef<null | HTMLDivElement>(null);
  const navBarRef = useRef<null | HTMLDivElement>(null);

  const breakRef = useRef<null | HTMLDivElement>(null);
  const cocktailRef = useRef<null | HTMLDivElement>(null);
  const drinksRef = useRef<null | HTMLDivElement>(null);
  const iceCreamRef = useRef<null | HTMLDivElement>(null);

  const [navState, navSetState] = useState<boolean>(false);

  const scrollToBreakFast = () => {
    breakRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToCockTails = () => {
    cocktailRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToDrinks = () => {
    drinksRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToIceCreams = () => {
    iceCreamRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    if (navState === false) return;

    const handleClick = (e: MouseEvent) => {
      if (navBarRef.current && !navBarRef.current.contains(e.target as Node)) {
        navSetState(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [navState]);

  useEffect(() => {
    console.log("navOpen has changed:", navState);
  }, [navState]);

  return (
    <div className='bg-background min-h-screen' style={{ overflow: navState ? 'hidden' : 'scroll', height: navState ? '100vh' : '100%' }}>

      <NavBar eventRef={eventRef} menuRef={menuRef} navState={navState} navSetState={navSetState} navBarRef={navBarRef} />

      <div style={{ opacity: navState ? 0.5 : 1 }}>
        <main className='flex flex-wrap justify-center items-center py-[6em]'>
          <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-center'>Benvenuti al <u>Rody Bar!</u></h1>
            <div className='w-1/2 text-center mt-5 flex flex-col justify-center items-center'>
              <p>Un luogo dove ogni sorriso vale più di mille brindisi. Qui non sei cliente, sei di casa.</p>
              <button onClick={scrollToMenu} className='mt-5 px-4 py-3 bg-oliveGreen rounded-2xl text-white shadow flex items-center button-anim active:bg-[#374641]'>Scopri cosa abbiamo da offrire<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" /></svg></button>
            </div>
          </div>
          <div className='w-full md:w-1/2 p-5 flex justify-center items-center'>
            <Img src="/alex-zie.png" alt="foto del personale" width={400} height={400} />
          </div>
        </main>
        <section ref={eventRef} className='flex flex-col justify-center items-center bg-grayPalette text-white p-[5em] text-center mb-[5em]'>
          <h2 className='text-4xl font-bold mb-[1em]'>Eventi</h2>
          <p>
            <i>
              Il <strong>Rody Bar</strong> nasce dalla voglia di creare un luogo accogliente,
              familiare e autentico, dove ogni ospite possa sentirsi a casa.
            </i>
          </p>
          <p>
            <i>
              Amiamo la qualità dei nostri caffè, la freschezza dei nostri cocktail
              e i sorrisi che nascono in ogni serata passata insieme.
            </i>
          </p>
          <div className='mt-7 flex flex-col items-center text-center'>
            <h1 className='text-2xl mb-7'>Scopri gli eventi che programmiamo nel bar in anticipo sul nostro social!</h1>
            <a href='https://www.instagram.com/rody_bar_/'>
              <button className='flex px-[5em] py-[1em] bg-linear-to-bl from-violet-700 to-indigo-700 gap-2 rounded-2xl button-anim shadow'>
                <h3 className='font-bold'>Instagram</h3>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>
              </button>
            </a>
          </div>
        </section>

        <div className='bg-background' ref={menuRef}>
          <h2 className='text-5xl underline font-bold mb-[2em] text-center'>Il Nostro Menu:</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-[4em] mb-[5em] w-max mx-auto'>
            <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
              <Img src={caffe} alt="caffe" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />

              {/* Colazione */}
              <button onClick={scrollToBreakFast} className='text-center font-bold text-2xl mt-2 bg-oliveGreen active:bg-[#374641] py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Colazione</button>
            </div>

            {/* Cocktails */}
            <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
              <Img src={spritz} alt="cocktails" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
              <button onClick={scrollToCockTails} className='text-center font-bold text-2xl mt-2 bg-giallo active:bg-[#a18912] py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Cocktails</button>
            </div>

            {/* Bibite */}
            <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
              <Img src={bibite} alt="bibite" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
              <button onClick={scrollToDrinks} className='text-center font-bold text-2xl mt-2 bg-[#5D688A] active:bg-[#353b4d]  py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Bibite</button>
            </div>

            {/* Gelati */}
            <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
              <Img src={gelato} alt="gelato" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
              <button onClick={scrollToIceCreams} className='text-center font-bold text-2xl mt-2 bg-sideNav active:bg-[#51450e] py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Gelati</button>
            </div>
          </div>
        </div>

        <ColazioneMenu breakRef={breakRef} />

        <CocktailMenu cocktailRef={cocktailRef} />

        <BibiteMenu drinksRef={drinksRef} />

        <GelatiMenu iceCreamRef={iceCreamRef} />

        </div>
        <Footer />
      </div>
  )
}