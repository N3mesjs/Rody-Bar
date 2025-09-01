"use client"

import Img from 'next/image';
import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';

import spritz from '../public/spritz.png'
import caffe from '../public/caffe.png'
import bibite from '../public/bira-moretti.png'
import gelato from '../public/gelato.png'

export default function Page() {
  const eventRef = useRef<null | HTMLDivElement>(null);
  const menuRef = useRef<null | HTMLDivElement>(null);

  const breakRef = useRef<null | HTMLDivElement>(null);
  const cocktailRef = useRef<null | HTMLDivElement>(null);
  const drinksRef = useRef<null | HTMLDivElement>(null);
  const iceCreamRef = useRef<null | HTMLDivElement>(null);

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

  return (
    <div className='bg-[#F5F7F8] min-h-screen'>
      <NavBar eventRef={eventRef} menuRef={menuRef} />
      <main className='flex flex-row mt-[6em] w-[1350px]'>
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold'>Benvenuti al <u>Rody Bar!</u></h1>
          <div className='w-1/2 text-center mt-5 flex flex-col justify-center items-center'>
            <p>Un luogo dove ogni sorriso vale più di mille brindisi. Qui non sei cliente, sei di casa.</p>
            <button onClick={scrollToMenu} className='mt-5 px-4 py-3 bg-[#495E57] rounded-2xl text-white shadow flex items-center button-anim'>Scopri cosa abbiamo da offrire<Img src="/arrow.png" alt="freccia" width={24} height={24} /></button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center'>
          <Img src="/alex-zie.png" alt="foto del personale" width={400} height={400} />
        </div>
      </main>
      <section ref={eventRef} className='mt-[6em] flex flex-col justify-center items-center bg-[#45474B] text-white p-[5em] text-center mb-[5em]'>
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

      <div ref={menuRef}>
        <h2 className='text-5xl underline font-bold mb-[2em] text-center'>Il Nostro Menu:</h2>

        <div className='grid grid-cols-4 gap-[2em] mb-[5em] px-[5em]'>
          <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
            <Img src={caffe} alt="caffe" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />

            {/* Colazione */}
            <button onClick={scrollToBreakFast} className='text-center font-bold text-2xl mt-2 bg-[#5D688A] py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Colazione</button>
          </div>

          {/* Cocktails */}
          <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
            <Img src={spritz} alt="" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
            <button onClick={scrollToCockTails} className='text-center font-bold text-2xl mt-2 bg-[#F7A5A5] py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Cocktails</button>
          </div>

          {/* Bibite */}
          <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
            <Img src={bibite} alt="caffe" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
            <button onClick={scrollToDrinks} className='text-center font-bold text-2xl mt-2 bg-[#FFDBB6] py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Bibite</button>
          </div>

          {/* Gelati */}
          <div className='flex text-black w-[300px] h-max justify-center items-center flex-col'>
            <Img src={gelato} alt="gelato" className='w-full h-[400px] rounded-2xl mb-[1.5em]' />
            <button onClick={scrollToIceCreams} className='text-center font-bold text-2xl mt-2 bg-[#5D688A] py-[7px] px-[15px] rounded-2xl shadow button-anim w-full text-white'>Gelati</button>
          </div>
        </div>
      </div>

      {/* Colazione #F5F7F8*/}
      <div ref={breakRef} className='bg-[#495E57] text-white p-[7em]'>
        <div className='colonne text-2xl'>
          <div className='flex flex-col gap-[1.5em]'>
            <div>
              <Img src="/caffe.png" alt="caffè" width={300} height={300} />
            </div>
            <div>
              <Img src="/smily-coffe.png" alt="caffe con faccina sorridente" width={300} height={300} />
            </div>

            <div>
              <Img src="/toast.png" alt="toast" width={300} height={400} />
            </div>
            <div>
              <Img src="/tagliere.png" alt="tagliere" width={300} height={300} />
            </div>
          </div>
          <div className='flex flex-col gap-[1.5em]'>
            <h2 className='text-4xl'>Caffetteria & Colazioni</h2>
            <hr />
            <div className='flex justify-between'>
              <h3 className='font-medium'>Caffè / Caffè Deca</h3>
              <span>€ 1,40</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Caffè Corretto</h3>
              <span>€ 2,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Caffè Americano</h3>
              <span>€ 2,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Macchiatone</h3>
              <span>€ 1,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Cappuccino (Normale / Deca)</h3>
              <span>€ 1,70</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Cappuccino (Orzo / Soia / Ginseng)</h3>
              <span>€ 1,90</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Orzo</h3>
              <span>€ 1,40</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Ginseng</h3>
              <span>€ 1,40</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Tazza Piccola Ginseng</h3>
              <span>€ 1,60</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Tazza Grande Ginseng</h3>
              <span>€ 1,80</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Latte Macchiato</h3>
              <span>€ 2,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Latte Bianco</h3>
              <span>€ 1,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Tè Caldo</h3>
              <span>€ 1,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Cioccolata Calda</h3>
              <span>€ 3,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Brioches</h3>
              <span>€ 1,40</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Donuts</h3>
              <span>€ 2,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Sandwich</h3>
              <span>€ 2,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Spremuta d’Arancia</h3>
              <span>€ 3,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Succo di Frutta</h3>
              <span>€ 3,00</span>
            </div>
          </div>
        </div>
      </div>

      {/* CockTails #F5F7F8*/}
      <div ref={cocktailRef} className='bg-[#F5F7F8] text-black p-[7em]'>
        <div className='colonne text-2xl'>
          <div className='flex flex-col gap-[1.5em]'>
            <div>
              <Img src="/spritz.png" alt="caffè" width={300} height={300} />
            </div>
            <div>
              <Img src="/hugo.png" alt="cocktail verde" width={300} height={300} />
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
      </div>

      {/* Bibite #F5F7F8*/}
      <div ref={drinksRef} className='bg-[#495E57] text-white p-[7em]'>
        <div className='colonne text-2xl'>
          <div className='flex flex-col gap-[1.5em]'>
            <div>
              <Img src="/beer.png" alt="birra" width={300} height={300} />
            </div>
            <div>
              <Img src="/bira-moretti.png" alt="birra" width={300} height={300} />
            </div>
            <div>
              <Img src="/spritz.png" alt="spritz" width={300} height={300} />
            </div>
          </div>

          <div className='flex flex-col gap-[2em]'>
            <h2 className='text-4xl'>Bibite & Alcolici</h2>
            <hr />

            <h3 className='text-2xl font-semibold'>Bibite Analcoliche</h3>
            <div className='flex justify-between'><span>Mogu-Mogu</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Monster</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Tè in Bottiglia Energizzante</span><span>€ 5,00</span></div>
            <div className='flex justify-between'><span>Lol</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Mentos</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Chupa Chups</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Fanta Uva</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Red Bull</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Lemon Mojito</span><span>€ 3,50</span></div>

            <h3 className='text-2xl font-semibold'>Bibite in Bottiglia</h3>
            <div className='flex justify-between'><span>Acqua (bott. piccola)</span><span>€ 1,20</span></div>
            <div className='flex justify-between'><span>Esta Thè</span><span>€ 1,50</span></div>
            <div className='flex justify-between'><span>Bibite bott.</span><span>€ 3,00</span></div>

            <h3 className='text-2xl font-semibold'>Birre in Bottiglia</h3>
            <div className='flex justify-between'><span>Bud 33cl</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Moretti 33cl</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Becks 33cl</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Heineken 33cl</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Corona 33cl</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Ceres 33cl</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Tennent’s 33cl</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Leffe 33cl</span><span>€ 4,00</span></div>
            <div className='flex justify-between'><span>Birre bott. 66cl</span><span>€ 4,00</span></div>

            <h3 className='text-2xl font-semibold'>Birra alla Spina</h3>
            <div className='flex justify-between'><span>0,4 Becks</span><span>€ 4,00</span></div>
            <div className='flex justify-between'><span>0,2 Becks</span><span>€ 2,50</span></div>
            <div className='flex justify-between'><span>0,33 Leffe</span><span>€ 4,00</span></div>
            <div className='flex justify-between'><span>Calice Pignoletto</span><span>€ 2,50</span></div>
            <div className='flex justify-between'><span>Coca Cola</span><span>€ 2,50</span></div>

            <h3 className='text-2xl font-semibold'>Grappe</h3>
            <div className='flex justify-between'><span>OF</span><span>€ 5,00</span></div>
            <div className='flex justify-between'><span>Prime Uve</span><span>€ 5,00</span></div>
            <div className='flex justify-between'><span>Diciotto Lune</span><span>€ 5,00</span></div>
            <div className='flex justify-between'><span>Nonino</span><span>€ 4,00</span></div>
            <div className='flex justify-between'><span>903</span><span>€ 4,00</span></div>

            <h3 className='text-2xl font-semibold'>Whiskey</h3>
            <div className='flex justify-between'><span>Whiskey</span><span>€ 5,00</span></div>

            <h3 className='text-2xl font-semibold'>Rum</h3>
            <div className='flex justify-between'><span>Matusalem</span><span>€ 7,00</span></div>
            <div className='flex justify-between'><span>Diplomatico</span><span>€ 6,00</span></div>
            <div className='flex justify-between'><span>Pampero</span><span>€ 6,00</span></div>
            <div className='flex justify-between'><span>Havana</span><span>€ 6,00</span></div>

            <h3 className='text-2xl font-semibold'>Amari & Digestivi</h3>
            <div className='flex justify-between'><span>Amaro</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Limoncino</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Vodka</span><span>€ 3,50</span></div>

            <h3 className='text-2xl font-semibold'>Spritz & Vini</h3>
            <div className='flex justify-between'><span>Spritz</span><span>€ 4,00</span></div>
            <div className='flex justify-between'><span>Spritz e Prosecco</span><span>€ 4,50</span></div>
            <div className='flex justify-between'><span>Analcolico</span><span>€ 3,00</span></div>
            <div className='flex justify-between'><span>Analcolico + Vino</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Analcolico + Martini</span><span>€ 3,50</span></div>
            <div className='flex justify-between'><span>Campari + Gin</span><span>€ 4,00</span></div>
            <div className='flex justify-between'><span>Prosecco</span><span>€ 4,50</span></div>
            <div className='flex justify-between'><span>Vino Bianco Fermo</span><span>€ 4,00</span></div>
            <div className='flex justify-between'><span>Lugana</span><span>€ 6,00</span></div>
            <div className='flex justify-between'><span>Franciacorta</span><span>€ 6,00</span></div>
          </div>
        </div>
      </div>

      {/* Gelati #F5F7F8*/}
      <div ref={iceCreamRef} className='bg-[#F5F7F8] text-black p-[7em]'>
        <div className='colonne text-2xl'>
          <div className='flex flex-col gap-[1.5em]'>
            <div>
              <Img src="/gelato.png" alt="gelati" width={300} height={300} />
            </div>
          </div>
          <div className='flex flex-col gap-[1.5em]'>
            <h2 className='text-4xl'>Gelati</h2>
            <hr />
            <div className='flex justify-between'>
              <h3 className='font-medium'>Cono piccolo</h3>
              <span>€ 2,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Cono grande</h3>
              <span>€ 3,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Coppa piccola</h3>
              <span>€ 2,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>Coppa grande</h3>
              <span>€ 3,50</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>1000 gr</h3>
              <span>€ 24,00</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-medium'>500 gr</h3>
              <span>€ 12,00</span>
            </div>
          </div>
        </div>
      </div>
      <footer>
        sfws
      </footer>
    </div>
  )
}