import { Picture } from './Picture';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Resume from './Resume';
import { useState } from 'react';
// import './Hero.css';

export default function Hero() {
  const d1 = new Date(2003,7,11).getTime();
  const d2 = Date.now();
  // const [loading, setLoading] = useState(true);

  return (
    <div className="md:flex sm:flex sm:flex-col md:flex-row
      md:justify-around md:items-center sm:justify-evenly sm:items-center
      bg-gradient-to-br from-green-300 via-blue-500 to-purple-600
      h-max py-5
    ">
      
      {/* three.js portfolio model m-auto*/}
      <div className="h-screen md:-ml-48 md:-mr-48 w-full -mb-8 -mt-10 md:mb-0 md:mt-0">
          {/* {(loading) ? (<img className="w-6 h-6" src="/loading.svg"/>) : (<></>)} */}
          <Canvas>
            <ambientLight/>
            <spotLight/>
            <Suspense fallback={null}>
              <Picture/>
            </Suspense>
          </Canvas>
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-2xl text-center text-white text-2xl md:pr-16 mx-4">
          <h1>Hi! I'm Casey.</h1>
          <p>I'm a {(Math.floor((d2 - d1) * 0.000000000031709)).toFixed(0)} year-old sophmore Computer Engineer at Iowa State Univeristy, and I love new challenges.</p>
        </div>
        <Resume/>
      </div>
    </div>
  );
}

