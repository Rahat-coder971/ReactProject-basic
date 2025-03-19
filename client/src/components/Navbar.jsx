import { useRef, useState } from "react";

function Navbar({ activetab, setactivetab }) {
    const [hamburgerClicked, sethamburgerClicked] = useState(false) // 


    const hamburger=useRef(null)
    console.log(hamburgerClicked)
    return (

        <div>

            <div className="  border-2 justify-center gap-2 py-3 px-1 flex mx-auto w-[100%] ">

                <div onClick={(e) => {
                    setactivetab('home')
                }} className={`hidden sm:flex justify-center py-2 w-[15vw] border-2   ${activetab == 'home' ? 'bg-blue-600' : ''}`}> home</div>

                <div onClick={(e) => { setactivetab(activetab = 'Shirts') }}
                    className={`hidden sm:flex justify-center py-2 w-[15vw]  border-2 text-center  ${activetab == 'Shirts' ? 'bg-blue-600' : ''}`}> Shirts</div>

                <div onClick={(e) => { setactivetab(activetab = 'TShirts') }
                } className={` py-2 w-[15vw]  border-2 text-center ${activetab == 'TShirts' ? 'bg-blue-600' : ''}`}> Tshirts</div>
                <div onClick={(e) => { setactivetab(activetab = 'Jeans') }}
                    className={`py-2 w-[15vw]  border-2 text-center ${activetab == 'Jeans' ? 'bg-blue-600' : ''}`}> Jeans</div>



                <button className="" onClick={() => {
                    
                    sethamburgerClicked(!hamburgerClicked)
                   hamburger.current.classList.toggle('hidden')
                }}>

                    {hamburgerClicked && (
                        <div className="border-2 sm:hidden">
                            <span>&#10060;</span>
                        </div>
                    ) }


                    <span ref={hamburger}  className="border-2 flex sm:hidden">&#9776;</span>

                </button>

            </div>
            {hamburgerClicked && (
                <div className=" sm:hidden list-none flex flex-col gap-4 items-center p-5">
                    <li className="hover:bg-blue-500 w-[60%]">
                        <button onClick={()=>{
                            setactivetab('home')
                        }} className="border-2  p-2  w-[100%]">home</button>
                    </li>
                    <li className="w-[60%]">
                        <button onClick={()=>{
                            setactivetab('Shirts')
                        }} className="p-2 border-2 hover:bg-blue-500 w-[100%]">
                            Shirts
                        </button>
                    </li>
                </div>
            )}

        </div>
    )
}

export default Navbar;