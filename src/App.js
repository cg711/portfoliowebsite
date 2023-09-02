import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Job from './components/Job';
import Contact from './components/Contact';
import JobTree from './components/JobTree';
import ProjectTree from './components/ProjectTree';
import Project from './components/Project';
import Footer from './components/Footer';
import { Languages } from './components/Languages';

export default function App() {
  return (
    <div className="font-jose scroll-smooth scroll-py-1">
      <NavBar/>
      <div className="relative">
      <Hero/>
      <Languages/>
      <JobTree>
        <Job img="./siback.png" id="job1" companyName="Solar Informatics" jobTitle="Software Engineering Intern" duration="May 2022 - August 2022" location="Minneapolis, Minnesota">
          <p className="mb-2">During my time at Solar Informatics I developed a lot with Springboot, MySQL, and other various backend technologies. It was very rewarding to contribute to a company centered around renewable technology! Below is a picture with the Solar Informatics family.</p>
          <img src="./solarexpo1.jpg" className="rounded-lg w-96"/>
        </Job>
        <Job img="./leidos.png" id="job2" companyName="Leidos" jobTitle="Software Engineering Intern" duration="May 2023 - August 2023" location="Omaha, Nebraska">
          <p className="mb-2">
            I had the absolute pleasure of working with Leidos for the summer of 2023. During my time as an intern, I was encouraged to dive head-first into a variety of tasks that allowed me to greatly develop my technical skillset. In particular,
            I gained valuable experience with React, Spring, Postgresql, Docker, UX, and many more technologies. Below is a picture with the interns!
          </p>
          <img src="./leidosinterns.jpg" className="rounded-lg w-72"/>
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
          I have been volunteering with Healing Haiti since 2018, and it has been an incredibly rewarding experience. Over the years, I have witnessed the organization's impact on the lives of those in need and the positive transformation it brings to the local communities.
          Through Healing Haiti's various initiatives, including education, healthcare, clean water projects, and sustainable development, we have been able to make a real difference in the lives of many individuals.
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
        <Project projName="CSE Club (ISU)" techs="N/A" id="proj8" img="/cseclub.png" int="/cseclub.png">
          <p>
            The CSE Club at ISU does a lot of different cool things, but probably my favorite has been their Hackathons.
            If you don't know, a Hackathon is a programming competition between anywhere from 5-20 teams, and you compete to
            create the fastest code for 7-10 different tasks. Super fun!
          </p>
        </Project>
        <Project projName="Portfolio Website" id="proj9" img="/port.png" techs="React, Tailwindcss, Framer.js, Vercel, Three.js, Blender" int="portfolio.png">
          <p>
            This website was fun to create! Although I have created websites with React before, I had never
            integrated them with Tailwind before so this was a great learning opportunity for me. The 3D model of my
            picture was modeled in Blender, and rendered in the browser with Three.js. Otherwise, besides a little help from
            Framer.js for animations, everything is custom.
          </p>
        </Project>
        <Project projName="Pong Clone" id="proj10" img="/pong.png" techs="Java" int="/ponggame.png">
          <p>
            This was just a fun project I made to get better with Java and to start learning game development. It's basically a pong clone,
            you can have up to two players, and there isn't a score limit. This was a great way to learn how game loops function as well
            as how JPanel and some other sound libraries work in Java.
          </p>
        </Project>
        <Project projName="Cybot (ISU)" id="proj11" img="/cybot.png" techs="C, MatLab, Microcontrollers, ASM" int="/testfield.jpg">
          <p>
            This was a project for my CPrE 288 class at ISU. The end goal was to manually control an iRobot to
            a desired end location while avoiding any objects that were in the robot's path. For the project, my team and I were
            not allowed to see the robots location on the field, so to visualize the iRobot's location
            we created a MatLab GUI to plot objects on the field and the actual iRobot's location. From MatLab, we were
            also able to send commands to the iRobot for movement. Below is a picture of the field where the iRobot had to manuvere!
          </p>
        </Project>
        <Project projName="Worst Location Finder" int="/worstplaces.png" img="/thumbsdown.png" id="proj12" techs="Javascript, React, Tailwindcss, Google Maps API">
          <p>
            This is a website that finds the worst rated locations within a 20 mile radius of your current location. "Why would you make this?" I don't know,
            I thought it was kind of funny. You give it a keyword for the type of place you want to find (i.e. store, gym, etc.) and then it finds it and shoots confetti out.
          </p>
        </Project>
        <Project projName="Scratch Roulette" int="/roulette.png" img="/scratchroulette.png" id="proj13" techs="React, Tailwindcss, Scratch API">
          <p>
            I used Scratch a ton as a kid and I remember all of the awesome and terrible projects people made on the website, so that's why 
            I decided to make a game out of it!
            It uses the Scratch API to find a random game which is then served to the user who rates it as either good or bad. 
            This one's really fun to play around with to see all the weird and entertaining stuff you can dig up on Scratch.
          </p>
        </Project>
        <Project projName="Playmate" int="/discover.png" img="/playlogo.png" id="proj14" techs="React Native, Spring, Tailwindcss, Postgresql, Docker">
          <p>
            Playmate is an in-development mobile app that aims to connect local athletes. The app features an easy-to-use quick play system that
            allows local games to be formed effortlessly, along with other gameplay types such as tournament play. Below is a tentative peek into what the app may look like.
          </p>
        </Project>
        <Project projName="Handwriting Detector" int="/handwriting.png" img="/hand.png" id="proj15" techs="Python, OpenCV, Machine Learning (CNN), Arduino">
          <p>
            This was a project that combined Python OpenCV and a trained CNN to detect and interpret handwriting. An ardunio was used to
            give feedback on whether or not handwriting was detected and if it matched a specific word (top left of picture below).
          </p>
        </Project>
        <Project projName="FPGA Vault System" int="/vault.jpg" img="/fpga.png" id="proj16" techs="FPGA, Verilog, Quartus Prime">
          <p>
            This was a project that utilized a FPGA board to create a vault mechanism supporting up to four accounts. For each account you can login with a password, change the password, and logout. The entire system
            is built with Verilog and other digital logic components. Below is a snippet of the mechanism in Quartus Prime.
          </p>
        </Project>

      </ProjectTree>
      <Contact/>
      <Footer/>
      </div>

    </div>
  );
}

