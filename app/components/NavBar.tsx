import Img from 'next/image';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-5 text-white bg-[#F4CE14]">
            <Img src="/logo.jpeg" alt="Logo" width={60} height={60} />
            <div className='flex items-center justify-center gap-[3em] text-xl'>
                <div>
                    <h1 className="font-bold"><a href="/">Rody Bar</a></h1>
                    <hr className="border-2" />
                </div>
                <div className='nav-element'>
                    <a href="/aboutus">Chi Siamo</a>
                    <hr />
                </div>
                <div className='nav-element'>
                    <a href="">Eventi</a>
                    <hr />
                </div>
            </div>
            <div>
                <a href="/signin" className='px-4 py-3 bg-[#495E57] rounded-2xl inset-ring-3 inset-ring-[#45474B]'>SignIn</a>
            </div>
        </nav>
    )
}