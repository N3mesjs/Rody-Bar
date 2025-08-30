import Img from 'next/image';
import React from 'react';

interface NavBarProps {
    ref: React.RefObject<null | HTMLDivElement>;
}

export default function NavBar(props: NavBarProps) {
    const scrollToAbout = () => {
        props.ref.current?.scrollIntoView();
    };

    return (
        <nav className="flex sticky top-0 justify-between items-center p-5 text-white bg-[#F4CE14]">
            <Img src="/logo.jpeg" alt="Logo" width={70} height={70} />
            <div className='flex items-center justify-center gap-[3em] text-xl'>
                <div>
                    <h1 className="font-bold"><a href="/">Rody Bar</a></h1>
                    <hr className="border-2" />
                </div>
                <div className='nav-element'>
                    <button onClick={scrollToAbout} className="focus:outline-none">
                         Eventi
                    </button>
                    <hr />
                </div>
            </div>
            <div>
                <a href="/signin" className='px-4 py-3 bg-[#495E57] rounded-2xl shadow'>SignIn</a>
            </div>
        </nav>
    );
}