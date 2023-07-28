import React from 'react'

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
        "Figma (UX Design)",
        "Git",
        "Linux OS",
        "Mac OS",
        "Windows OS",
        "Verilog",
        "Bash & Powershell",
        "REST",
        "OpenGL",
        "OpenCV",
        "Blender",
        "Three.js"
    ]
    return (
        <div className="relative border-l border-gray-200 flex flex-col items-center mt-4" id="technologies">
            <h1 className="text-4xl mt-16 mb-10" id="projects">Technologies I Use:</h1>
            <div className="flex flex-row max-w-3xl flex-wrap justify-center sm:max-w-sm md:max-w-3xl">
                {myTechs.map((tech) => (
                    <p className="text-white bg-blue-500 p-3 rounded-full m-2">{tech}</p>
                ))}
            </div>
        </div>
    );
}
