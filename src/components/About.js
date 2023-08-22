import React from "react";

const About = () =>{
    const [showModal, setShowModal] = React.useState(false);
    return(
        <>
        <div className="h-screen md:py-12">
        <div id="About" className="md:flex justify-center max-sm:m-3 border-spacing-0  border-2 border-violet-500 mt-20 md:m-10">
        <img
                className="md:p-2 max-sm:h-20 max-sm:w-30 md:h-80 md:w-90 md:rounded-full object-center"
                src="images/Hii.jpg" alt=""
                />
        <div className="md:mt-10 max-sm:m-2">
            <h1 className="text-2xl font-bold md:my-5 ">Hello,<br>
            </br> a bit about me</h1>
            <p className="text-lg">
                I am a MBA graduate, currently working as <br></br>Application Development Associate in Accenture
                since April 2022.  <br></br>During my time here, I have decided to learn Front-end Development.<br></br>
                I have the strong understanding of responsive web design principles <br></br>and the ability
                to create mobile-friendly layouts. 
            </p>
        <button
        className=" bg-black text-white font-bold text-sm px-4 py-2 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        Contact me</button>
        {showModal ? (
            <>
            <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-3 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Info:</h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}>
                        <span className="h-6 w-6 text-2xl ">×</span>
                    </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                    <p className="my-2 text-slate-600 text-lg leading-relaxed">
                        <h6>Name : Nandini Paravelli</h6>
                        <h6>Email : nandinisrinivas0667@gmail.com</h6>
                        <h6>Phone No : +91 7993380045</h6> 
                    </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >Close</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </div>
        </div>
        </div>
        </>
    );
}
export default About