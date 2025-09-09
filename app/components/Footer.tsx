export default function Footer() {
    return (
        <footer className="bg-grayPalette p-10 text-white text-center">
            <div className="flex justify-around flex-wrap mb-[3em]">
                <div className="flex flex-col items-start">
                    <h2 className="text-2xl">Rody Bar Caffe</h2>
                    <hr className="w-1/2 b" />
                    <p className="mt-6 text-xl">
                        piazza giovanni XXIII, Ferrara, Italy 44019
                    </p>
                </div>
                <div>
                    <h2 className="text-xl">Contact Us</h2>
                    <hr className="w-1/2 b" />
                    <div className="mt-6">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                        <h3 className="text-xl">Telefono: N.A.</h3>
                    </div>
                    </div>
                </div>
            </div>
                <p>&copy;Rody Bar Caffe from n3mesjs</p>
        </footer>
    )
}