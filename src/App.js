import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Job from './components/Job';
import Contact from './components/Contact';
import JobTree from './components/JobTree';
import {motion} from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import ProjectTree from './components/ProjectTree';
import Project from './components/Project';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-jose">
      <NavBar/>
      <Hero/>
      <JobTree>
        <Job img="./siback.png" id="job1" companyName="Solar Informatics" jobTitle="Software Engineering Intern" duration="May 2022 - August 2022" location="Minneapolis, Minnesota">
          <p className="mb-2">During my time at Solar Informatics I developed a lot with <span className='text-green-700 inline'>Springboot</span>, <span className='inline text-blue-400'>MySQL</span>, and other various backend technologies. It was very rewarding to contribute to a company centered around renewable technology! Below is a picture with the Solar Informatics family.</p>
          <img src="./solarexpo1.jpg" className="rounded-lg w-96"/>
        </Job>
        <Job img="./leidos.png" id="job2" companyName="Leidos" jobTitle="Software Engineering Intern" duration="May 2023 - August 2023" location="Omaha, Nebraska">
          <p className="mb-2">I will be in Omaha this summer as a Software Engineering intern with Leidos! Very excited to start and can't wait to see what I can create with Leidos.</p>
        </Job>
      </JobTree>
      <ProjectTree>
        <Project projName="OpenCV Vaccum Tracker" id="proj1" img='/opencvlogo.png' techs="OpenCV, Python" int="/vc.png">
          <p>
            This was a project I helped create for a family member for a project they had. 
            It simply tracks a robot vaccum around an enclosed space, measuring its orientation and distance traveled.
            This was a great project to learn more about OpenCV!
          </p>
        </Project>
        <Project projName="Ring Doorbell Clone" id="proj2" img='/pirmotionsensor.png' techs="Raspberry Pi, Python" int="/pirpic.png">
          <p>
            This was my first project that combined hardware and software concepts together.
             The Raspberry Pi is connected to a PIR motion detector which, when motion was sensed, 
             would send a text to my phone via a service called Twilio and record video via a camera periphial
             connected to the Pi. Overall, it was a very fun project, and you can see the whole (admittedly rough) setup below!
          </p>
        </Project>
        <Project projName="Healing Haiti" id="proj3" img='/healinghaiti.png' techs="N/A" int="/haiti.JPG">
          <p>
            I went to Haiti in 2018 with an organization named Healing Haiti to volunteer. 
            We did work such as water delivery and community building that was very rewarding.
            Below is a picture of some friends and I!
          </p>
        </Project>
        <Project projName="Microservices Application" id="proj4" img='/microservices.png' techs="Springboot, MySQL, REST, Java, Spring Libraries" int="microservices.jpg">
          <p>
            To learn the essentials of microservices, a friend and I built a basic microservices application with Springboot and MySQL.
            We incorporated services such as batch processing, common services, security (authentication and authorization), and many more.
            Below is a diagram of our microservices in its inital planning phase.
          </p>
        </Project>
        <Project projName="Cribbage Online" id="proj5" img='/cribbageboard.png' techs="Springboot, React, WebSocket, Node.JS, MySQL" int="/lobby.png">
          <p>
            Cribbage Online is a multiplayer online game that uses websockets to connect up to 4 players in a game of cribbage.
            This project was a major learning experience for me, and it allowed me to create a multiplayer game which 
            is something I've wanted to do for a long time. At some point I want to go back to this when I have time
            and pretty it up, but for now I'm happy with the final result. Eventually, I have plans to host it online,
            but I need to find a cost effective way to do so. Below is a picture of the lobby!
          </p>
        </Project>
        <Project projName="Engineers Without Borders (ISU)" id="proj6" img="/EWB.png" techs="N/A" int="EWBgroup.jpeg">
          <p>
            EWB at ISU is affiliated with a group in Ullo Ghana that is currently building a clinic. 
            During my time as a member of the club, I have been part of the water distribution team,
            which is responsible for diverting excess rainwater from the clinic to managable areas.
            It's been such a fun experience and it's been so fun to collaborate with others to use
            our engineering skillsets for good!
          </p>
        </Project>
        <Project projName="Facetime Clone" id="proj7" img="/ftclone.png" techs="WebRTC, Socket.io, Javascript" int="/webrtc.png">
          <p>
            This was a mini project I did. I wanted to replicate Facetime, and so to do this, I used WebRTC as well as Socket.io
            to establish a peer-to-peer connection between two clients. I would show you a full picture of the connection, but for some
            reason I can't get OBS to work properly, so this will have to do for now!
          </p>
        </Project>
        <Project projName="CSE Club (ISU)" id="proj8" img="/cseclub.png" int="/cseclub.png">
          <p>
            The CSE Club at ISU does a lot of different cool things, but probably my favorite has been their Hackathons.
            If you don't know, a Hackathon is a programming competition between anywhere from 5-20 teams, and you compete to
            create the fastest code for 7-10 different tasks. Super fun!
          </p>
        </Project>
        <Project projName="My Portfolio Website!" id="proj9" img="/port.png" techs="React, Tailwindcss, Framer, Vercel, Three.js, Blender" int="portfolio.png">
          <p>
            This website was fun to create! Although I have created websites with React before, I had never
            integrated them with Tailwind before so this was a great learning opportunity for me. The 3D model of my
            picture was modeled in Blender, and rendered in the browser with Three.js. Otherwise, with a little help from
            Framer for animations, everything else is custom.
          </p>
        </Project>
        <Project projName="Pong Clone" id="proj10" img="/pong.png" techs="Java" int="/ponggame.png">
          This was just a fun project I made to get better with Java and to start learning game development. It's basically a pong clone,
          you can have up to two players, and there isn't a score limit. This was a great way to learn how game loops function as well
          as how JPanel and some other sound libraries work in Java.
        </Project>
      </ProjectTree>
      {/* <h1 id="projects">PROJECTS</h1> */}
      <Contact/>
      {/* <Analytics/> */}
      <Footer/>
    </div>
  );
}

