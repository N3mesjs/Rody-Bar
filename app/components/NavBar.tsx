import Img from 'next/image';

export default function NavBar() {
    return (
        <nav className="flex justify-between p-5 text-white">
            <div>
                <Img src="/logo.jpeg" alt="Logo" width={100} height={100}/>
            </div>
            <div className="absolute flex justify-center items-center top-5 left-[50%] -translate-x-1/2 text-white bg-gray-800 rounded-3xl p-3">
                <div className="p-2 hover:bg-gray-600 rounded-2xl bg-gradient-to-r from-red-700 via-oragnge-500 to-yellow-500 mr-2">
                    <a href="/">Rody Bar</a>
                </div>
                <div className="flex-inline p-2 hover:bg-gray-600 rounded-2xl nav">
                    <a href="/contactUS">
                        Contatti
                    </a>
                    <hr />
                </div>
                <div className="flex-inline p-2 hover:bg-gray-600 rounded-2xl nav">
                    <a href="/contactUS">
                        Social
                    </a>
                    <hr />
                </div>
            </div>
            <div className='py-4'>
                <a href="/signin" className='p-3 rounded-4xl bg-amber-400'>SignIn</a>
            </div>
        </nav>
    )
}