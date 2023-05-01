// import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
  const [burgerToggle, setToggle] = useState(false);
  const toggleVisible = (e) => {
    const links = document.querySelector(".mobilemenu");
    links.classList.toggle("hidden");
    setToggle(!burgerToggle);
  }
  return (
    <nav className="bg-gray-100 shadow-xl">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between space-x-4 items-center hidden md:flex">
          <a href="#experience" className="py-5">Experience</a>
          <a href="#projects" className="py-5">Projects</a>
          <a href="#contact" className="py-5">Contact</a>
        </div>
        <div className="md:hidden flex items-center py-5 justify-end">
            {/* mobile button here */}
            <button onClick={toggleVisible}>
              {((burgerToggle) ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ))}
            </button>
        </div>
        <div className="mobilemenu hidden flex flex-col items-center md:hidden">
          {/* hover:bg-gray-200 */}
          <a href="#experience" className="py-2">Experience</a>
          <a href="#projects" className="py-2">Projects</a>
          <a href="#contact" className="py-2">Contact</a>
        </div>
      </div> 
    </nav>
  );
}

