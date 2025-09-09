"use client"

import Image from 'next/image'
import { useState } from 'react'

import img1 from '../public/image1.jpg'
import img2 from '../public/image2.jpg'
import img3 from '../public/image3.jpg'
import img4 from '../public/image4.jpg'
import img5 from '../public/image5.jpg'

interface HomePageProps {
    imagesArray: any[];
}

export default function HomePage(props: HomePageProps) {
    const imageArray = props.imagesArray;
    const [imageIndex, setImageIndex] = useState(0);

    const prevButton = () => {
        if (imageIndex === 0) {
            setImageIndex(imageArray.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    };

    const nextButton = () => {
        if (imageIndex === imageArray.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    };

    return (
        <div className="container">

            {/* Uso map perche effettivamente ho bisogno di un metodo che mi permetta di eseguire una funzione per ogni elemento e che possa ritornare un valore, in se map ritorna un nuovo array. In questo modo posso fare il return delle singole immagini */}

            {imageArray.map((val, i) => (
                <div key={i} className='imageCarrousel' style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                    <Image src={val} alt="car image" fill />
                </div>
            ))}

            {/* Left Button (prev) */}
            <div className='absolute top-1/2 -translate-y-1/2'>
                <button onClick={prevButton} className='bg-[#575656] hover:bg-[#2e2e2e] p-4 m-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></button>
            </div>

            {/* Right Button (next) */}
            <div className='absolute top-1/2 right-0 -translate-y-1/2'>
                <button onClick={nextButton} className='bg-[#575656] hover:bg-[#2e2e2e] p-4 m-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></button>
            </div>

            <div className='bottoni'>
                {imageArray.map((_, i) => {
                    if (i === imageIndex) {
                        return <button className='p-3 rounded-full bg-white' key={i} onClick={() => setImageIndex(i)} />;
                    } else {
                        return <button className='p-3 rounded-full bg-[#424242a3]' key={i} onClick={() => setImageIndex(i)} />;
                    }
                })}
            </div>
        </div>
    )
}
