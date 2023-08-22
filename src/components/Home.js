import React from "react";
import {LiaLinkedin, LiaInstagram, LiaGithubAlt, LiaDownloadSolid} from "react-icons/lia";
import { Link } from "react-scroll";

const Home = () =>{
    return(
        <>
        <div id="Home"
          className="pl-5 md:flex max-sm:text-center max-sm:content-center font-serif bg-cover bg-center justify-center max-w-7xl md:my-24">
            <div className="md:mt-24 max-sm:mt-10 mr-20">
                {/*content*/}
                <h3 className="text-xl mb-3">Hi THERE! I'm</h3>
                <h1 className="text-4xl font-semibold mb-4"><span className="text-[#7c3aed]">Nandini</span> Paravelli</h1>
                <p>A Frond-End Web Developer passionate about creating <br></br>interactive applications and experiences on the web.</p>
                <div className="flex mt-5 gap-4">
                <a href="images/Nandini_Paravelli_Resume.pdf" download="">
                <button class="bg-[#7c3aed] text-white font-bold py-1 px-4 rounded-lg flex">Resume<LiaDownloadSolid className="text-white mt-0.5 h-5 w-5"/></button>
                </a>
                <div className="flex gap-3 px-2">
                <Link to="https://www.linkedin.com/in/sree-nandu-09a812224/"><LiaLinkedin className="h-7 w-7 text-[#7c3aed]"/></Link>
                <Link to="#"><LiaInstagram className="h-7 w-7 text-[#7c3aed]"/></Link>
                <Link to="https://github.com/NandiniParavelli"><LiaGithubAlt className="h-7 w-7 text-[#7c3aed]"/></Link>
                </div>
                </div>
            </div>
            <img 
                className="max-sm:h-50 max-sm:w-60 max-sm:m-5 max-sm:rounded-md h-80 w-80 md:ml-20 md:rounded-full object-cover object-center"
                src="images/pic.png" alt=""
                />
            

        </div>
        </>
    )
}
export default Home