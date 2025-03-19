import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Info from "./components/Info"
import { useState } from "react";
function App() {
  let [activetab,setactivetab]=useState('home');
  return (
   <div className="bg-gray-100" >
     <Header activetab={activetab} setactivetab={setactivetab}/>
     <Navbar activetab={activetab} setactivetab={setactivetab}/>
     <Info activetab={activetab}/>
   </div>
  )
}

export default App
