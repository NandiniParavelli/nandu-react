import React from "react";

const Skill = () =>{
    return(
        <>
        <div id="Skills" className="m-10 h-screen">
        
        <div className=" md:flex md:pl-16">
            <div>
            <h1 className="text-3xl text-[#7c3aed] font-bold mb-4">Skills and Experience</h1>
            <p className="text-xl pb-5">I am interested in IT and everything in its orbit. I recently<br></br>
                began to be fascinated by web programming, e.g. developing <br></br>
                apps and building websites. I gained experience by doing<br></br> projects
                in this area. I have a good knowledge in key <br></br>concepts of Frontend.</p>
            <p className="text-xl pb-5">Currently Working In Accenture as Application Development Associate</p>
            </div>      
        <div className="flex flex-col gap-3 md:pl-14 pt-6">
        <div class="w-80 hover:scale-110 bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-blue-600 text-md text-white text-center p-0.5 leading-none rounded-full" style={{width: '85%'}}>HTML</div></div>  
        
        <div class="w-80 hover:scale-110 bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-red-700 text-md text-white text-center p-0.5 leading-none rounded-full" style={{width: '80%'}}>CSS</div></div>  
        
        <div class="w-80 hover:scale-110 bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-orange-500 text-md text-white text-center p-0.5 leading-none rounded-full" style={{width: '60%'}}>Javascript</div></div>  
        
        <div class="w-80 hover:scale-110 bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-green-800 text-md text-white text-center p-0.5 leading-none rounded-full" style={{width: '60%'}}>React</div></div>  
        
        <div class="w-80 hover:scale-110 bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-yellow-400 text-md text-white text-center p-0.5 leading-none rounded-full" style={{width: '55%'}}>Next Js</div></div>  
        
        <div class="w-80 hover:scale-110 bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-teal-700 text-md text-white text-center p-0.5 leading-none rounded-full" style={{width: '80%'}}>Tailwind CSS</div></div>  
        
        <div class="w-80 hover:scale-110 bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-red-400 text-md text-white text-center p-0.5 leading-none rounded-full" style={{width: '80%'}}>Bootstrap</div></div>
        </div>
        </div>
        </div>
        </>
    );
}
export default Skill