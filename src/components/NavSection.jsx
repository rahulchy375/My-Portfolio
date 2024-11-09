import React, { useEffect, useRef, useState } from "react";
import myLogo2 from "/images/newLogo.png";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavSection = () => {
  let logo = useRef();
  let navRef = useRef();
  let modeRef = useRef();
  gsap.registerPlugin(useGSAP);
  useGSAP(()=>{
    gsap.from(logo.current,{
      x:-50,
      opacity:0,
      duration:1,
    });
    gsap.from(navRef.current.querySelectorAll("li"),{
      y:-30,
      opacity:0,
      duration:1,
      stagger:-0.2,
      ease:"back",
    });
    gsap.from(modeRef.current,{
      opacity:0,
      duration:1,
      delay:2
    });
  },);
  
  
  const [show, setShow] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("mode") === "dark");
  let [active, setActive] = useState("" || "home");

  const handleBar = () => {
    setShow(!show);
  };
  const handleMood = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleActive = (active) => {
    setActive(active);
  };

  return (
    <section className="bg-[#310d64e7] fixed z-30 w-full top-[20px]">
      <div className="container mx-auto px-[10px]">
        <div className="flex justify-between items-center">
          <div className="">
            <img ref={logo} src={myLogo2} alt="Rahul's logo"/>
          </div>
          <ul
            ref={navRef}
            className={` sm:flex ${
              show === true
                ? "right-0 duration-300"
                : "duration-300 right-[-150px]"
            } absolute top-[50px] sm:static bg-slate-100  rounded-[5px] font-semibold p-[5px] sm:bg-transparent sm:rounded-none sm:p-0 sm:text-white`}
          >
            <li
              className={`px-[25px] sm:px-[10px] lg:px-[25px] py-[6px] sm:py-[4px] rounded-[20px]  sm:rounded-[17px] lg:py-[6px] lg:rounded-[20px] hover:text-white ${
                active === "home"
                  ? "bg-[tomato] dark:bg-[#0ef] dark:text-black"
                  : ""
              }`}
              onClick={() => handleActive("home")}
            >
              <Link to="/">Home</Link>
            </li>

            <li
              className={`px-[25px] sm:px-[10px] lg:px-[25px] py-[6px] sm:py-[4px] rounded-[20px]  sm:rounded-[17px] lg:py-[6px] lg:rounded-[20px] hover:text-white ${
                active === "about"
                  ? "bg-[tomato] dark:bg-[#0ef] dark:text-black"
                  : ""
              }`}
              onClick={() => handleActive("about")}
            >
              <Link to="/#aboutSection">About</Link>
            </li>
            <li
              className={`px-[25px] sm:px-[10px] lg:px-[25px] py-[6px] sm:py-[4px] rounded-[20px]  sm:rounded-[17px] lg:py-[6px] lg:rounded-[20px] hover:text-white ${
                active === "service"
                  ? "bg-[tomato] dark:bg-[#0ef] dark:text-black"
                  : ""
              }`}
              onClick={() => handleActive("service")}
            >
              <Link to="/#serviceSection">Services</Link>
              
            </li>
            <li
              className={`px-[25px] sm:px-[10px] lg:px-[25px] py-[6px] sm:py-[4px] rounded-[20px]  sm:rounded-[17px] lg:py-[6px] lg:rounded-[20px] hover:text-white ${
                active === "project"
                  ? "bg-[tomato] dark:bg-[#0ef] dark:text-black"
                  : ""
              }`}
              onClick={() => handleActive("project")}
            >
              <Link to="/#projectSection">Projects</Link>
              
            </li>
            <li
              className={`px-[25px] sm:px-[10px] lg:px-[25px] py-[6px] sm:py-[4px] rounded-[20px]  sm:rounded-[17px] lg:py-[6px] lg:rounded-[20px] hover:text-white ${
                active === "skill"
                  ? "bg-[tomato] dark:bg-[#0ef] dark:text-black"
                  : ""
              }`}
              onClick={() => handleActive("skill")}
            >
              <Link to="/#skillSection">Skills</Link>
              
            </li>
            <li
              className={`px-[25px] sm:px-[10px] lg:px-[25px] py-[6px] sm:py-[4px] rounded-[20px]  sm:rounded-[17px] lg:py-[6px] lg:rounded-[20px] hover:text-white ${
                active === "faq"
                  ? "bg-[tomato] dark:bg-[#0ef] dark:text-black"
                  : ""
              }`}
              onClick={() => handleActive("faq")}
            >
              <Link to="/#faqSection">FAQs</Link>
              
            </li>
            <li
              className={`px-[25px] sm:px-[10px] lg:px-[25px] py-[6px] sm:py-[4px] rounded-[20px]  sm:rounded-[17px] lg:py-[6px] lg:rounded-[20px] hover:text-white ${
                active === "contact"
                  ? "bg-[tomato] dark:bg-[#0ef] dark:text-black"
                  : ""
              }`}
              onClick={() => handleActive("contact")}
            >
              <Link to="/#contactSection">Contact</Link>
              
            </li>
          </ul>
          <div className="text-white sm:hidden" onClick={handleBar}>
            {show === true ? <VscChromeClose /> : <FaBars />}
          </div>

          <div
            ref={modeRef}
            className="fixed bottom-[20px] right-[20px] w-[40px] h-[40px] text-[20px] rounded-full text-white flex justify-center items-center bg-[#2f1166e6] dark:bg-[#0ef] dark:text-[#081b29]"
            onClick={handleMood}
          >
            {localStorage.getItem("mode") === "dark" ? (
              <MdDarkMode />
            ) : (
              <MdOutlineLightMode />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavSection;
