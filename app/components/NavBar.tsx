import Img from 'next/image';
import React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface NavBarProps {
    eventRef?: React.RefObject<null | HTMLDivElement>;
    menuRef?: React.RefObject<null | HTMLDivElement>;
    navState?: boolean;
    navSetState?: Dispatch<SetStateAction<boolean>>;
    navBarRef?: React.RefObject<null | HTMLDivElement>;
}

interface Link {
    label: string,
    action: () => void
}

export default function NavBar(props: NavBarProps) {

    const scrollToEvent = () => {
        props.navSetState?.(false);
        setTimeout(() => {
            props.eventRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const scrollToMenu = () => {
        props.navSetState?.(false);
        setTimeout(() => {
            props.menuRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const Links: Link[] = [
        { label: "Menu", action: scrollToMenu },
        { label: "Eventi", action: scrollToEvent }
    ]

    return (
        <>
            <nav className="fixed top-0 left-0 w-full flex items-center p-5 text-white bg-giallo z-20">

                <button className='border-2 p-1 rounded-lg md:hidden' onClick={(e) => {
                    e.stopPropagation();
                    props.navSetState?.(prev => !prev)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </button>

                <div className='flex justify-between items-center w-full px-10 max-md:hidden'>
                    <Img src="/Logo.jpeg" alt="Logo" width={70} height={70} />
                    <div className='flex items-center justify-center gap-[3em] text-xl'>
                        <div>
                            <h1 className="font-bold"><a href="/">Rody Bar</a></h1>
                            <hr className="border-2" />
                        </div>
                        {Links.map((value, i) => {
                            return (
                                <div key={i} className='nav-element cursor-pointer'>
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        value.action();
                                    }}>
                                        {value.label}
                                    </button>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                    {/* <div>
                <a href="/signin" className='px-4 py-3 bg-[#495E57] rounded-2xl shadow'>SignIn</a>
            </div> */}
                </div>
            </nav>
            <div ref={props.navBarRef} className='absolute top-0 left-0 h-screen w-1/2 bg-sideNav z-30 p-5 flex flex-col nav-comparsa' style={{ display: props.navState ? 'block' : 'none' }}>
                <div className='flex justify-between'>
                    <Img src="/Logo.jpeg" alt="Logo" width={70} height={70} />
                    <button className='border-2 border-white p-1 rounded-lg md:hidden' onClick={() => props.navSetState?.(prev => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>
                <div className='mt-10 flex items-start flex-col w-full gap-4'>
                    {Links.map((value, i) => {
                        return (
                            <button key={i} onClick={(e) => {
                                e.stopPropagation();
                                value.action();
                            }} className='w-full text-start hover:bg-sideNavHover rounded-md p-2 text-2xl font-medium'>
                                {value.label}
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    );
}