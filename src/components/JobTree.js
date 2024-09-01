import { Children, useEffect, useState } from "react";
import {motion} from "framer-motion";

export default function JobTree(props) {
    const childArray = Children.toArray(props.children);
    const [currentJob, setCurrentJob] = useState(0);

    useEffect(() => {
        let allJobs = document.querySelectorAll('#job');
        allJobs.forEach((item) => item.classList.add("hidden"));
        allJobs[currentJob].classList.toggle("hidden");
    },[currentJob]);


    return (
        <div className="relative border-l border-gray-200
        flex flex-col items-center mt-4" id="experience">
            <h1 className="text-gray-900 text-4xl mt-16">Experience</h1>
            <p className="text-gray-900 mb-8">(Click for more info!)</p>
            <div className="flex items-center justify-around mx-2">
                <button className="border-blue-500 border-4 rounded-full h-min p-2 text-blue-500 bg-transparent transition-colors duration-150 hover:bg-blue-500 shadow-md" onClick={() => setCurrentJob((currentJob === 0) ? childArray.length - 1 : currentJob - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue-500 hover:text-white" style={{width: "50px"}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className="flex items-center">
                    {Children.map(childArray, child => {
                        return ( 
                            <div>
                                <div id='job' className="flex flex-col items-center max-w-md hidden">
                                    <motion.button whileHover={{scale: 1.1}} className="hover:brightness-125
                                    px-6 rounded-2xl shadow-outline
                                    bg-gradient-to-br from-green-300 via-blue-500 to-purple-600
                                    mx-10 shadow-xl
                                    hover:animate-pulse
                                    " onClick={() => {
                                        const temp = document.getElementById(`${child.props.id}`);
                                        temp.classList.toggle("hidden");
                                    }}>
                                        <img className="my-4" src={child.props.img} alt='...'/>
                                        <div className="p-2">
                                            <p className="text-white">{child.props.duration}</p>
                                            <p className="text-white">{child.props.location}</p>
                                        </div>
                                    </motion.button>
                                </div>
                                <div className="relative z-50 hidden max-w-full" id={`${child.props.id}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                        <div className="fixed inset-0 bg-gray-500 bg-opacity-40 transition-opacity bg-fade-in flex justify-evenly items-center max-w-full">
                                            {child}
                                        </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="border-blue-500 border-4 rounded-full h-min p-2 shadow-md bg-transparent text-blue-500 transition-colors duration-150 hover:bg-blue-500" onClick={() => setCurrentJob((currentJob + 1) % 4)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue-500 hover:text-white" style={{transform: "rotate(180deg)", width: "50px"}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
// h-10 px-5 text-gray-100 bg-indigo-700 rounded-2xl transition-colors duration-150
//focus:shadow-outline
//hover:bg-indigo-800
