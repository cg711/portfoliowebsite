import { Children } from "react";
import {motion} from "framer-motion";

export default function ProjectTree(props) {
    const childArray = Children.toArray(props.children);
    return (
        <div className="relative border-l border-gray-200 flex flex-col items-center mt-4" id="projects">
            <h1 className="text-gray-900 text-4xl mt-16">Projects and Works</h1>
            <p className="text-gray-900 mt-2">(Click a bubble for more info, or 
                <button type="button" onClick={() => {
                    let rand = Math.floor(Math.random() * childArray.length) + 1;
                    let str = `proj${rand}`
                    const temp = document.getElementById(str);
                    temp.classList.toggle("hidden");
                    }} className="h-10 px-5 text-blue-500 border-2 border-blue-500 rounded-2xl transition-colors duration-150
                    focus:shadow-outline
                    hover:bg-blue-500 hover:text-white sm:mt-0 sm:w-auto inline mx-2">
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
                                hover:animate-pulse
                                " onClick={() => {
                                    const temp = document.getElementById(`${child.props.id}`);
                                    temp.classList.toggle("hidden");
                                }}>
                                    <img className="object-contain w-48 h-28" src={child.props.img} alt='...'/>
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
        </div>
    );
}
