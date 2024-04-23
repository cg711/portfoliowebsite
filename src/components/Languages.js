import React from 'react'
import { motion } from 'framer-motion';

export const Languages = () => {

    const myTechs = [
        "HTML",
        "Javascript/Typescript",
        "Node.js",
        "Express.js",
        "Websocket",
        "React",
        "Tailwindcss",
        "CSS",
        "Python",
        "Docker",
        "C",
        "Java",
        "Quarkus",
        "Spring (Boot, Batch, Security, ...)",
        "SQL",
        "Postgresql",
        "MySQL",
        "MongoDB",
        "React Native",
        "Google Protobuf",
        "MATLAB",
        "Figma",
        "Git",
        "(Flavors of) Unix",
        "Mac OS",
        "Windows OS",
        "Verilog",
        "Bash",
        "REST",
        "OpenGL",
        "OpenCV",
        "Blender",
        "Three.js",
        "CI/CD",
        "Gradle",
        "Maven",
        "VHDL",
        "Ruby & Rails",
        "Quartus Prime",
        "ModelSim",
        "Rust"        
    ]

    return (
        <div className="relative border-l border-gray-200 flex flex-col items-center mt-4" id="technologies">
            <h1 className="text-gray-900 text-4xl mt-16 mb-10">Tools in my Belt:</h1>
            <div className="flex flex-row max-w-3xl flex-wrap justify-center sm:max-w-sm md:max-w-3xl">
                {myTechs.map((tech) => (
                    <motion.p whileHover={{scale: 1.1}} key={tech} className={`text-white bg-blue-500 shadow-sm p-3 rounded-full m-2`}>{tech}</motion.p>
                ))}
            </div>
        </div>
    );
}
