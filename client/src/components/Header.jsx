import { useEffect, useState } from "react";

function Header({activetab,setactivetab}){

    const [debounce,setdebounce]=useState('');
    
    
// concept of debounce implemneted,
    useEffect(()=>{
        const timer=setTimeout(() => {
            if(debounce === 'home' || debounce ==='Shirts' || debounce ==='TShirts' || debounce ==='Jeans'){
           setactivetab(debounce)
            console.log(activetab)
            }
            else{
                console.log('no result found');
                
            }
        }, 1000);
        return ()=>{clearTimeout(timer);}
    },[debounce])

    return(
        <div className=" flex ">
        <img className="mx-auto w-[50%] sm:w-[30%] py-5" src="https://justshear.com/cdn/shop/files/JS_Blue_Logo.png?v=1704743508&width=578" alt="header" />

        <div className=" flex  w-[50%] sm:w-[60%]  justify-around items-center mr-[3vw]">

           <img className="w-[35%] sm:w-[10%]" src="https://cdn.shopify.com/static/images/flags/au.svg?width=40" alt="" />

            {/* <select onChange={(e)=>{
                {setactivetab(e.target.value)}
            }} className="w-[65%] sm:w-[50%]" name="" id="product">
                <option value="Shirts">Shirts</option>
                <option value="TShirts">TShirts</option>
                <option value="Jeans">Jeans</option>
            </select> */}
            <input list="tab"  className="bg-red-400 w-[70%]" onChange={(e)=>{
                
                setdebounce(e.target.value)
            }} type='search' />
         <datalist id="tab">
        <option value="home">home</option>
        <option value="Shirts">shirts</option>
        <option value="Jeans">jeans</option>
        <option value="Tshirts">Tshirts`</option>
         </datalist>
        </div>

        </div>
    )
}

export default Header;