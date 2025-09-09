import Img from 'next/image';
import React from 'react';

interface PropsTypes {
  cocktailRef: React.RefObject<null | HTMLDivElement>
}

export default function CocktailMenu(props: PropsTypes) {
  return (
    <div ref={props.cocktailRef} className='bg-background text-black p-[7em]'>
      <div className='colonne text-2xl'>
        <div className='flex flex-col justify-center items-center gap-[1.5em]'>
          <Img src="/spritz.png" alt="caffè" width={300} height={300} />
          <Img src="/hugo.png" alt="cocktail verde" width={300} height={300} />
        </div>
        <div className='flex flex-col justify-center gap-[1.5em]'>
          <h2 className='text-4xl'>Cocktail</h2>
          <hr />
          <div className='menu-item'>
            <h3 className='font-medium'>Hugo</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Mojito</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Long Island Ice Tea</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Americano</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Negroni</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Pina Colada</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Coca e Malibù</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Coca Havana</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Gin Tonic</h3>
            <span>€ 6,00</span>
          </div>
          <div className='menu-item'>
            <h3 className='font-medium'>Gin Lemon</h3>
            <span>€ 6,00</span>
          </div>
        </div>
      </div>
    </div>
  )
}