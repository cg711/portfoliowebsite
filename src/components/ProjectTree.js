import { Children } from "react";
import {motion} from "framer-motion";

export default function ProjectTree(props) {
    const childArray = Children.toArray(props.children);
    return (
        <div className="relative border-l border-gray-200 flex flex-col items-center mt-4">
            <h1 className="text-4xl mt-16" id="projects">Projects</h1>
            <p className="mt-2">(Click for more info, or 
                <button type="button" onClick={() => {
                    let rand = Math.floor(Math.random() * childArray.length) + 1;
                    let str = `proj${rand}`
                    console.log(str);
                    const temp = document.getElementById(str);
                    temp.classList.toggle("hidden");
                    }} className="h-10 px-5 text-gray-100 bg-indigo-700 rounded-2xl transition-colors duration-150
                    focus:shadow-outline
                    hover:bg-indigo-800 sm:mt-0 sm:w-auto inline ml-2">
                    Suprise me!
                </button>
              )
            </p>
            <div className="flex justify-center flex-wrap">
                {Children.map(childArray, child => {
                    return ( 
                        <div>
                            <div className="flex items-center justify-center max-w-sm max-h-sm min-w-sm min-h-sm w-48 h-48">
                                <motion.button whileHover={{scale: 1.1}} className="hover:brightness-125
                                px-6 rounded-full shadow-outline
                                bg-gradient-to-br from-green-300 via-blue-500 to-purple-600
                                mx-10 shadow-xl
                                " onClick={() => {
                                    const temp = document.getElementById(`${child.props.id}`);
                                    temp.classList.toggle("hidden");
                                }}>
                                    <img className="object-contain w-48 h-28" src={child.props.img} alt='...'/>
                                </motion.button>
                            </div>
                            <div className="relative z-10 hidden" id={`${child.props.id}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                {child}
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" onClick={() => {
                                            const temp = document.getElementById(child.props.id);
                                            temp.classList.toggle("hidden");
                                            }} className="h-10 px-5 text-gray-100 bg-indigo-700 rounded-2xl transition-colors duration-150
                                            focus:shadow-outline
                                            hover:bg-indigo-800 sm:mt-0 sm:w-auto">Close</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <h1 className="text-xl mt-2">... And More to Come!</h1>
        </div>
    );
}
// h-10 px-5 text-gray-100 bg-indigo-700 rounded-2xl transition-colors duration-150
//focus:shadow-outline
//hover:bg-indigo-800
