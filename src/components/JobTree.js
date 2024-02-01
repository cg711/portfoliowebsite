import { Children } from "react";
import {motion} from "framer-motion";

export default function JobTree(props) {
    const childArray = Children.toArray(props.children);
    return (
        <div className="relative border-l border-gray-200
        flex flex-col items-center mt-4" id="experience">
            <h1 className="text-gray-900 text-4xl mt-16">Experience</h1>
            <p className="text-gray-900">(Click for more info!)</p>
            {Children.map(childArray, child => {
                return ( 
                    <div>
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
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
    );
}
// h-10 px-5 text-gray-100 bg-indigo-700 rounded-2xl transition-colors duration-150
//focus:shadow-outline
//hover:bg-indigo-800
