import Img from 'next/image';
import React from 'react';

interface PropsTypes {
    breakRef: React.RefObject<null | HTMLDivElement>
} 

export default function ColazioneMenu(props: PropsTypes) {
    return (
        <div ref={props.breakRef} className='bg-oliveGreen text-white p-[7em]'>
            <div className='colonne text-2xl'>
                <div className='flex justify-center items-center flex-col gap-[1.5em]'>
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
                <div className='flex flex-col justify-center gap-[1.5em]'>
                    <h2 className='text-4xl'>Caffetteria & Colazioni</h2>
                    <hr />
                    <div className='menu-item'>
                        <h3 className='font-medium'>Caffè / Caffè Deca</h3>
                        <span>€ 1,40</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Caffè Corretto</h3>
                        <span>€ 2,00</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Caffè Americano</h3>
                        <span>€ 2,00</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Macchiatone</h3>
                        <span>€ 1,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Cappuccino (Normale / Deca)</h3>
                        <span>€ 1,70</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Cappuccino (Orzo / Soia / Ginseng)</h3>
                        <span>€ 1,90</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Orzo</h3>
                        <span>€ 1,40</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Ginseng</h3>
                        <span>€ 1,40</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Tazza Piccola Ginseng</h3>
                        <span>€ 1,60</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Tazza Grande Ginseng</h3>
                        <span>€ 1,80</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Latte Macchiato</h3>
                        <span>€ 2,00</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Latte Bianco</h3>
                        <span>€ 1,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Tè Caldo</h3>
                        <span>€ 1,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Cioccolata Calda</h3>
                        <span>€ 3,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Brioches</h3>
                        <span>€ 1,40</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Donuts</h3>
                        <span>€ 2,00</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Sandwich</h3>
                        <span>€ 2,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Spremuta d’Arancia</h3>
                        <span>€ 3,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Succo di Frutta</h3>
                        <span>€ 3,00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}