import Img from 'next/image';
import React from 'react';

interface PropsTypes {
    iceCreamRef: React.RefObject<null | HTMLDivElement>
}

export default function BibiteMenu(props: PropsTypes) {
    return (
        <div ref={props.iceCreamRef} className='bg-background text-black p-[7em]'>
            <div className='colonne text-2xl'>
                <div className='flex flex-col justify-center items-center gap-[1.5em]'>
                    <div>
                        <Img src="/gelato.png" alt="gelati" width={300} height={300} />
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-[1.5em]'>
                    <h2 className='text-4xl'>Gelati</h2>
                    <hr />
                    <div className='menu-item'>
                        <h3 className='font-medium'>Cono piccolo</h3>
                        <span>€ 2,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Cono grande</h3>
                        <span>€ 3,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Coppa piccola</h3>
                        <span>€ 2,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>Coppa grande</h3>
                        <span>€ 3,50</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>1000 gr</h3>
                        <span>€ 24,00</span>
                    </div>
                    <div className='menu-item'>
                        <h3 className='font-medium'>500 gr</h3>
                        <span>€ 12,00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}