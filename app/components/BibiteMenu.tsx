import Img from 'next/image';
import React from 'react';

interface PropsTypes {
    drinksRef: React.RefObject<null | HTMLDivElement>
} 

export default function BibiteMenu(props: PropsTypes) {
    return (
        <div ref={props.drinksRef} className='bg-oliveGreen text-white p-[7em]'>
                  <div className='colonne text-2xl'>
                    <div className='flex flex-col justify-center items-center gap-[1.5em]'>
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
        
                    <div className='flex flex-col justify-center gap-[2em]'>
                      <h2 className='text-4xl'>Bibite & Alcolici</h2>
                      <hr />
        
                      <h3 className='text-2xl font-semibold linea'>Bibite Analcoliche</h3>
                      <div className='menu-item'><span>Mogu-Mogu</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Monster</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Tè in Bottiglia Energizzante</span><span>€ 5,00</span></div>
                      <div className='menu-item'><span>Lol</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Mentos</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Chupa Chups</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Fanta Uva</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Red Bull</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Lemon Mojito</span><span>€ 3,50</span></div>
        
                      <h3 className='text-2xl font-semibold linea'>Bibite in Bottiglia</h3>
                      <div className='menu-item'><span>Acqua (bott. piccola)</span><span>€ 1,20</span></div>
                      <div className='menu-item'><span>Esta Thè</span><span>€ 1,50</span></div>
                      <div className='menu-item'><span>Bibite bott.</span><span>€ 3,00</span></div>
        
                      <h3 className='text-2xl font-semibold linea'>Birre in Bottiglia</h3>
                      <div className='menu-item'><span>Bud 33cl</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Moretti 33cl</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Becks 33cl</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Heineken 33cl</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Corona 33cl</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Ceres 33cl</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Tennent’s 33cl</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Leffe 33cl</span><span>€ 4,00</span></div>
                      <div className='menu-item'><span>Birre bott. 66cl</span><span>€ 4,00</span></div>
        
                      <h3 className='text-2xl font-semibold linea'>Birra alla Spina</h3>
                      <div className='menu-item'><span>0,4 Becks</span><span>€ 4,00</span></div>
                      <div className='menu-item'><span>0,2 Becks</span><span>€ 2,50</span></div>
                      <div className='menu-item'><span>0,33 Leffe</span><span>€ 4,00</span></div>
                      <div className='menu-item'><span>Calice Pignoletto</span><span>€ 2,50</span></div>
                      <div className='menu-item'><span>Coca Cola</span><span>€ 2,50</span></div>
        
                      <h3 className='text-2xl font-semibold linea'>Grappe</h3>
                      <div className='menu-item'><span>OF</span><span>€ 5,00</span></div>
                      <div className='menu-item'><span>Prime Uve</span><span>€ 5,00</span></div>
                      <div className='menu-item'><span>Diciotto Lune</span><span>€ 5,00</span></div>
                      <div className='menu-item'><span>Nonino</span><span>€ 4,00</span></div>
                      <div className='menu-item'><span>903</span><span>€ 4,00</span></div>
        
                      <h3 className='text-2xl font-semibold linea'>Whiskey</h3>
                      <div className='menu-item'><span>Whiskey</span><span>€ 5,00</span></div>
        
                      <h3 className='text-2xl font-semibold linea'>Rum</h3>
                      <div className='menu-item'><span>Matusalem</span><span>€ 7,00</span></div>
                      <div className='menu-item'><span>Diplomatico</span><span>€ 6,00</span></div>
                      <div className='menu-item'><span>Pampero</span><span>€ 6,00</span></div>
                      <div className='menu-item'><span>Havana</span><span>€ 6,00</span></div>
        
                      <h3 className='text-2xl font-semibold linea'>Amari & Digestivi</h3>
                      <div className='menu-item'><span>Amaro</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Limoncino</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Vodka</span><span>€ 3,50</span></div>
        
                      <h3 className='text-2xl font-semibold linea'>Spritz & Vini</h3>
                      <div className='menu-item'><span>Spritz</span><span>€ 4,00</span></div>
                      <div className='menu-item'><span>Spritz e Prosecco</span><span>€ 4,50</span></div>
                      <div className='menu-item'><span>Analcolico</span><span>€ 3,00</span></div>
                      <div className='menu-item'><span>Analcolico + Vino</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Analcolico + Martini</span><span>€ 3,50</span></div>
                      <div className='menu-item'><span>Campari + Gin</span><span>€ 4,00</span></div>
                      <div className='menu-item'><span>Prosecco</span><span>€ 4,50</span></div>
                      <div className='menu-item'><span>Vino Bianco Fermo</span><span>€ 4,00</span></div>
                      <div className='menu-item'><span>Lugana</span><span>€ 6,00</span></div>
                      <div className='menu-item'><span>Franciacorta</span><span>€ 6,00</span></div>
                    </div>
                  </div>
                </div>
    )
}