import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Job from './components/Job';
import Contact from './components/Contact';
import JobTree from './components/JobTree';
import {motion} from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="font-jose">
      <NavBar/>
      <Hero/>
      <JobTree>
        <Job img="./siback.png" id="job1" companyName="Solar Informatics" jobTitle="Software Engineering Intern" duration="May 2022 - August 2022" location="Minneapolis, Minnesota">
          <p className="mb-2">During my time at Solar Informatics I practiced a lot with <span className='text-green-700 inline'>Springboot</span>, <span className='inline text-blue-400'>MySQL</span>, and other various backend technologies. It was very rewarding to contribute to a company centered around renewable technology! Below is a picture with the Solar Informatics family.</p>
          <img src="./solarexpo1.jpg" className="rounded-lg w-96"/>
        </Job>
        <Job img="./leidos.png" id="job2" companyName="Leidos" jobTitle="Software Engineering Intern" duration="May 2023 - August 2023" location="Omaha, Nebraska">
          <p className="mb-2">I will be in Leidos this summer as a Software Engineering intern! Very excited to start and can't wait to see what I can create with Leidos.</p>
        </Job>
      </JobTree>
      {/* <h1 id="projects">PROJECTS</h1> */}
      <h1 id="contact" className="hidden">contact</h1>
      <Contact/>
      <Analytics/>
    </div>
  );
}

