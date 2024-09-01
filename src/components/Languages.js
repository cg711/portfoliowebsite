import React from 'react'
import { motion } from 'framer-motion';

export const Languages = () => {

    // name, proficency
    const myTechs = [
        ["HTML",1],
        ["Javascript/Typescript",1],
        ["Node.js",0.9],
        ["Express.js",0.8],
        ["Websocket",0.7],
        ["React",0.9],
        ["CSS",1],
        ["Python",0.4],
        ["Docker",0.6],
        ["C",0.8],
        ["Java",1],
        ["Spring (Boot, Batch, Security, ...)",0.9],
        ["SQL",1],
        ["Postgresql",1],
        ["MySQL",1],
        ["MongoDB",0.8],
        ["React Native",0.7],
        ["Google Protobuf",0.9],
        ["MATLAB",0.6],
        ["Figma",0.8],
        ["Git",1],
        ["(Flavors of) Unix",1],
        ["Mac OS",1],
        ["Windows OS",1],
        ["Bash",1],
        ["REST",1],
        ["OpenGL",0.4],
        ["OpenCV",0.5],
        ["Blender",0.7],
        ["CI/CD",0.7],
        ["Gradle", 1],
        ["Maven", 0.9],
        ["VHDL", 1],
        ["Ruby & Rails", 0.5],
        ["Quartus Prime",1],
        ["ModelSim",1],
        ["Rust",0.8]        
    ]

    return (
        <div className="relative border-l border-gray-200 flex flex-col items-center mt-4" id="technologies">
            <h1 className="text-gray-900 text-4xl mt-16 mb-8">Skills</h1>
            <div className="w-1/3 flex flex-col flex-nowrap">
                <div className="flex justify-between flex-nowrap">
                    <p>Intermediate</p>
                    <p>Expert</p>
                </div>
                <div className="h-6 w-full bg-gradient-to-r from-blue-950 to-blue-600 shadow-md mb-12"></div>
            </div>
            <div className="flex flex-row max-w-3xl flex-wrap justify-center sm:max-w-sm md:max-w-3xl">
                {myTechs.map((tech, index) => (
                    <motion.p whileHover={{scale: 1.1}} key={tech[0]} className={`text-white shadow-sm p-3 rounded-full m-2`} style={{backgroundColor: `rgb(0,0,${255 * tech[1]})`}}>{tech[0]}</motion.p>
                ))}
            </div>
        </div>
    );
}
