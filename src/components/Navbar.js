import React, {useState} from "react";
import { BsFillEmojiLaughingFill} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"



const Navbar = () =>{
  const [toggleMenu, setToggleMenu] = useState(false);
  

    return(
    <> 
      <nav className="bg-[#7c3aed] text-white sticky top-0 scroll-smooth max-w-screen-2xl">  
      <div className="app py-3 pl-3">
        <div className="max-w-7xl">
          <div className="flex mx-5 justify-between ">
            {/* Primary menu and logo */}
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-white items-center " 
                >
                  <BsFillEmojiLaughingFill className="h-6 w-6 text-primary text-white" />
                  <span className="text-xl">Nandini</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <a  href="#Home" >Home</a>
                <a href="#About" >About me</a>
                <a href="#Skills" >Skills</a>
                <a href="#Projects" >Projects</a>
                
              </div>
            <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <GiHamburgerMenu className="w-3 h-3"/>
                </button>
              </div>
            </div>
          </div>
      </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-auto items-end"
          }`}
        >
          <div className="items-end px-5 h-auto">
            <div className="flex flex-col gap-3 font-semibold text-black text-right">
                <a  href="#Home" >Home</a>
                <a href="#About" >About me</a>
                <a href="#Skills" >Skills</a>
                <a href="#Projects" >Projects</a>
            </div>
          </div>
        </div>
      </nav>
    </>
        
    );
}

export default Navbar