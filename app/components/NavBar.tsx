import Img from 'next/image';
import React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface NavBarProps {
    eventRef?: React.RefObject<null | HTMLDivElement>;
    menuRef?: React.RefObject<null | HTMLDivElement>;
    navState?: boolean;
    navSetState?: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar(props: NavBarProps) {
    const scrollToAbout = () => {
        props.eventRef.current?.scrollIntoView({ behavior: 'smooth' });
        props.navSetState(!props.navState);
    };

    const scrollToMenu = () => {
        props.menuRef.current?.scrollIntoView({ behavior: 'smooth' });
        props.navSetState(!props.navState);
    };

    return (
        <div className='sticky top-0 left-0'>
            <div className='relative'>
                <nav className="flex items-center p-5 text-white bg-[#F4CE14] z-20">

                    <button className='border-2 p-1 rounded-lg md:hidden' onClick={() => props.navSetState(!props.navState)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </button>

                    <div className='flex justify-between items-center w-full px-10 max-md:hidden'>
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
                            <div className='nav-element'>
                                <button onClick={scrollToMenu} className="focus:outline-none">
                                    Menu
                                </button>
                                <hr />
                            </div>
                        </div>
                        {/* <div>
                <a href="/signin" className='px-4 py-3 bg-[#495E57] rounded-2xl shadow'>SignIn</a>
            </div> */}
                    </div>
                </nav>
                <div className='h-full w-1/2 absolute top-[100%] left-0 bg-[#F4CE14] z-30 p-5' style={{ display: props.navState ? 'block' : 'none' }}>
                    <ul>
                        <li className='p-2'>
                            <button onClick={scrollToAbout} className="focus:outline-none hover:-translate-y-1.5">
                                Eventi
                            </button>
                        </li>
                        <li className='p-2'>
                            <button onClick={scrollToMenu} className="focus:outline-none">
                                Menu
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}