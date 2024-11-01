import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Job from "./components/Job";
import Contact from "./components/Contact";
import JobTree from "./components/JobTree";
import ProjectTree from "./components/ProjectTree";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { Languages } from "./components/Languages";

export default function App() {
  return (
    <div className="font-jose scroll-smooth scroll-py-1">
      <NavBar />
      <div className="relative">
        <Hero />
        <JobTree>
          <Job
            img="./siback.webp"
            id="job1"
            companyName="Solar Informatics"
            jobTitle="Software Engineering Intern"
            duration="May 2022 - August 2022"
            location="Minneapolis, Minnesota"
            int="./solarexpo1.webp"
          >
            <p className="mb-2">
              At Solar Informatics, I worked extensively with Springboot, MySQL,
              and various backend technologies to build a vast microservices
              application. I immensely value the perspective I gained working
              with Solar Informatics. Working with software hands-on, learning
              from various industry leaders at solar conferences, and
              contributing towards furthering renewables has been incredibly
              rewarding.
            </p>
          </Job>
          <Job
            img="./leidos.webp"
            id="job2"
            companyName="Leidos"
            jobTitle="Software Engineering Intern"
            duration="May 2023 - August 2023"
            location="Omaha, Nebraska"
            int="./leidosinterns.webp"
          >
            <p className="mb-2">
              I had a great time working with Leidos in the summer of 2023!
              During my time as a Software Engineering intern, I was encouraged
              to dive head-first into a variety of tasks that allowed me to
              greatly develop my technical skillset. In particular, I gained
              valuable experience with React, Spring, Postgresql, Docker, UX
              design, and many more technologies/areas.
            </p>
          </Job>
          <Job
            img="./saltech.webp"
            id="job3"
            companyName="Saltech Systems"
            jobTitle="Web Development Intern"
            duration="October 2023 - April 2024"
            location="Ames, Iowa"
            int="./saltechint.webp"
          >
            <p className="mb-2">
              During my time at Saltech Systems, I built a number of web and
              mobile applications with a large set of different technologies
              (Flutter, Ruby, ColdFusion to name a few). I worked directly with
              Saltech clients to gather project requirements and implement
              features in a faced paced environment. I loved the challenge of
              diving head-first into this role and learned a lot!
            </p>
          </Job>
          <Job
            img="./generalmills.webp"
            id="job4"
            companyName="General Mills"
            jobTitle="Digital & Technology Intern"
            duration="May 2024 - July 2024"
            location="Minneapolis, Minnesota"
            int="./accepted.webp"
          >
            <p className="mb-2">
              I had the amazing opportunity to work with General Mills during
              the summer of 2024! I was a member of the Cyber Security team in
              charge of improving data hygiene and third-party monitoring
              capabilites. Overall had a very fun summer!
            </p>
          </Job>
        </JobTree>
        <Languages />
        <ProjectTree>
          <Project
            projName="OpenCV Vaccum Tracker"
            id="proj1"
            img="/opencvlogo.webp"
            techs="OpenCV, Python"
            int="/vc.webp"
          >
            <p>
              This was a project I helped create for a family member for a
              project they had. It simply tracks a robot vaccum around an
              enclosed space, measuring its orientation and distance traveled.
              This was a great project to learn more about OpenCV!
            </p>
          </Project>
          <Project
            projName="Ring Doorbell Clone"
            id="proj2"
            img="/pirmotionsensor.webp"
            techs="Raspberry Pi, Python"
            int="/pirpic.webp"
          >
            <p>
              This was my first project that combined hardware and software
              concepts together. The Raspberry Pi is connected to a PIR motion
              detector which, when motion was sensed, would send a text to my
              phone via a service called Twilio and record video via a camera
              periphial connected to the Pi. Overall, it was a very fun project,
              and you can see the whole (admittedly rough) setup below!
            </p>
          </Project>
          <Project
            projName="Healing Haiti"
            id="proj3"
            img="/healinghaiti.webp"
            techs="N/A"
            int="/haiti.webp"
          >
            <p>
              I have been volunteering with Healing Haiti since 2018, and it has
              been an incredibly rewarding experience. Over the years, I have
              witnessed the organization's impact on the lives of those in need
              and the positive transformation it brings to the local
              communities. Through Healing Haiti's various initiatives,
              including education, healthcare, clean water projects, and
              sustainable development, we have been able to make a real
              difference in the lives of many individuals.
            </p>
          </Project>
          <Project
            projName="Microservices Application"
            id="proj4"
            img="/microservices.webp"
            techs="Springboot, MySQL, REST, Java, Spring Libraries"
            int="microservices.webp"
          >
            <p>
              To learn the essentials of microservices, a friend and I built a
              basic microservices application with Springboot and MySQL. We
              incorporated services such as batch processing, common services,
              security (authentication and authorization), and many more. Below
              is a diagram of our microservices in its inital planning phase.
            </p>
          </Project>
          <Project
            projName="Cribbage Online"
            id="proj5"
            img="/cribbageboard.webp"
            techs="Springboot, React, WebSocket, Node.JS, MySQL"
            int="/lobby.webp"
          >
            <p>
              Cribbage Online is a multiplayer online game that uses websockets
              to connect up to 4 players in a game of cribbage. Although it
              never got deployed, building this app was super fun and really
              tested my skills as a <em>full-stack</em> developer. Challenged my
              algorithm writing skills as well as introduced me to real-time
              networking.
            </p>
          </Project>
          <Project
            projName="Engineers Without Borders (ISU)"
            id="proj6"
            img="/EWB.webp"
            techs="N/A"
            int="EWBgroup.webp"
          >
            <p>
              EWB at ISU is affiliated with a group in Ullo Ghana that is
              currently building a clinic. During my time as a member of the
              club, I have been part of the water distribution team, which is
              responsible for diverting excess rainwater from the clinic to
              managable areas. It's been such a fun experience and it's been so
              fun to collaborate with others to use our engineering skillsets
              for good!
            </p>
          </Project>
          <Project
            projName="CSE Club (ISU)"
            techs="N/A"
            id="proj7"
            img="/cseclub.webp"
            int="/cseclub.webp"
          >
            <p>
              I'm mainly involved with the Hackathons the CSE Club at ISU holds.
              Super fun way to work with other engineers and collaborate on some
              pretty neat projects!
            </p>
          </Project>
          <Project
            projName="Portfolio Website"
            id="proj8"
            img="/port.webp"
            techs="React, Tailwindcss, Framer.js, Vercel, Three.js, Blender"
            int="portfolio.webp"
          >
            <p>
              You're here! This website uses Three.js to render my picture,
              Tailwindcss (and some minimal custom CSS) for styling, and React.
              I hope you like it!
            </p>
          </Project>
          <Project
            projName="Pong Clone"
            id="proj9"
            img="/pong.webp"
            techs="Java"
            int="/ponggame.webp"
          >
            <p>
              Pong in Java! Nothing too crazy, this was an early project to help
              me get familiar with Java.
            </p>
          </Project>
          <Project
            projName="Cybot (ISU)"
            id="proj10"
            img="/cybot.webp"
            techs="C, MatLab, Microcontrollers, ASM"
            int="/testfield.webp"
          >
            <p>
              This was a project for an Embedded Systems class at ISU. The end
              goal was to manually control a robot vaccum to a desired end
              location while avoiding any objects that were in the robot's path.
              For the project, my team and I were not allowed to see the robots
              location on the field, so to visualize the robot vaccum's location
              we created a MatLab GUI to project scanned-in data from the field
              onto our screens. From MatLab, we were also able to send commands
              to the robot for movement. To the side is a picture of the field!
            </p>
          </Project>
          <Project
            projName="Worst Location Finder"
            int="/worstplaces.webp"
            img="/thumbsdown.webp"
            id="proj11"
            techs="Javascript, React, Tailwindcss, Google Maps API"
          >
            <p>
              This is a website that finds the worst rated locations within a 20
              mile radius of your current location. "Why would you make this?" I
              don't know, I thought it was kind of funny. You give it a keyword
              for the type of place you want to find (i.e. store, gym, etc.) and
              then it finds it and shoots confetti out.
            </p>
          </Project>
          <Project
            projName="Scratch Roulette"
            int="/roulette.webp"
            img="/scratchroulette.webp"
            id="proj12"
            techs="React, Tailwindcss, Scratch API"
          >
            <p>
              Scratch Roulette is a pretty easy game; you enter a number of
              spins, and a number of scratch games are returned to you. You then
              get to play whatever game you get and rate it good or bad. This
              one's fun to mess around with and see what random stuff comes up.
            </p>
          </Project>
          <Project
            projName="Playmate"
            int="/discover.webp"
            img="/playlogo.webp"
            id="proj13"
            techs="React Native, Spring, Tailwindcss, Postgresql, Docker"
          >
            <p>
              Playmate is an in-development mobile app that aims to connect
              local athletes. The app features an easy-to-use quick play system
              that allows local games to be formed effortlessly, along with
              other gameplay types such as tournament play. To the side is a
              picture of the apps dashboard.
            </p>
          </Project>
          <Project
            projName="Handwriting Detector"
            int="/handwriting.webp"
            img="/hand.webp"
            id="proj14"
            techs="Python, OpenCV, Machine Learning (CNN), Arduino"
          >
            <p>
              This was a project that combined Python OpenCV and a trained CNN
              (through <em>Tensorflow</em>) to detect and interpret handwriting.
              An Arduino was used to give feedback on whether or not handwriting
              was detected and if it matched a specific word (top left of
              picture below).
            </p>
          </Project>
          <Project
            projName="FPGA Vault System"
            int="/vault.webp"
            img="/fpga.webp"
            id="proj15"
            techs="FPGA, Verilog, Quartus Prime"
          >
            <p>
              This was a project that utilized a FPGA board to create a vault
              mechanism supporting up to four accounts. For each account you can
              login with a password, change the password, and logout. The entire
              system is built with Verilog and other digital logic components.
              Below is a snippet of the mechanism in Quartus Prime.
            </p>
          </Project>
          <Project
            projName="MIPS Pipelined Processor"
            int="/pipelined.webp"
            img="/mips.webp"
            id="proj16"
            techs="VHDL, Questa Sim, FGPA"
          >
            <p>
              This was a project that utilized VHDL and Questa Sim to build,
              test, and simulate a 32-bit MIPS-like processor. The resulting
              processor supports most of the existing MIPS ISA. In addition to a
              single-cycle implementation, both multi-cycle and pipelined
              implementations were created as well in an effort to improve
              overall program execution times. Below is a rough diagram of my
              final pipelined design!
            </p>
          </Project>
          <Project
            projName="Duck Chat"
            int="/ducktalk_wide.webp"
            img="/ducktalk.webp"
            id="proj17"
            techs="Three.JS, GLSL (Shaders), Javascript"
          >
            <p>
              This was made in preparation for a hackathon, I wanted to learn
              more about OpenGL and GLSL shaders so I made this simple website.
              The scene is rendered with Three.JS, and the models are not
              original unfortunately (from{" "}
              <a
                className="text-blue-300 hover:text-blue-500"
                href="https://www.models-resource.com/"
                target="_blank"
              >
                this website
              </a>
              ). You can type some text into the input box and the duck will
              talk back to you in intervals of quacks based on the syllables in
              a word (Banjo Kazooie style).
            </p>
          </Project>
          <Project
            projName="CHIP-8 Emulator"
            int="/chip8.webp"
            img="/chip8logo.webp"
            id="proj18"
            techs="Rust, Emulation"
          >
            <p>
              I built a CHIP-8 emulator in Rust! It can play a number of smaller
              (less than 4KB max) games like pong, breakout, and simon says to
              name a few. This was a great project to learn more about Rust and
              working with emulators at the lowest level. On the right is an
              emulation of pong!
            </p>
          </Project>
          <Project
            projName="Softball Pitch Detector (Senior Design Project)"
            int="/softballint.webp"
            img="/softball.webp"
            id="proj19"
            techs="C++, Flutter, OpenCV"
          >
            <p>
              For my senior design project at Iowa State University, I was tasked with creating an
              application capable of detecting the height of a softball during play to alert batters
              of the legality of a pitch. I wore many hats during the creation of
              this project: I managed much of the Flutter app developent, I prototyped and researched various
              object detection systems with OpenCV (as pictured), and I was responsible for client outreach in
              acquiring specific project requirements. For more information on the project, including repository access,
              reports, and other documents, please visit our team webpage <a className="text-blue-300 hover:text-blue-500"
 href="https://sdmay25-11.sd.ece.iastate.edu/" target="_blank">Here!</a>
            </p>
          </Project>
        </ProjectTree>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
