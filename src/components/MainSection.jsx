import React, { useEffect, useReducer, useRef, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import mainImg from "/images/My Picture.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MainSection = () => {
  const [nameValue, setNameValue] = useState(["R", "a", "h", "u", "l"]);
  const [titleValue, setTitleValue] = useState(["C", "h", "o", "w", "d","h","u","r","y"]);
  let nameRef = useRef(null);
  let nameRef2 = useRef(null);
  let subRef = useRef();
  let mainPara = useRef();
  let typeRef = useRef();
  let mainBtnRef = useRef();
  let mainImgRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    tl.from(subRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
    }),
      gsap.from(
        nameRef.current.querySelectorAll("span"),
        {
          y: 70,
          opacity: 0,
          duration: 1,
          delay:0.6,
          stagger:0.25
        },
      ),
      gsap.from(
        nameRef2.current.querySelectorAll("span"),
        {
          y: 70,
          opacity: 0,
          duration: 1,
          delay:0.6,
          stagger:-0.25
        },
      ),
      tl.from(
        typeRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      ),
      tl.from(
        mainPara.current,
        {
          y: 70,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      ),
      tl.from(".iconDiv .icon", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back",
      });
    tl.from(mainBtnRef.current, {
      opacity: 0,
    });
    tl2.from(mainImgRef.current, {
      x: 100,
      duration: 2,
      opacity: 0,
    });
  });

  

  const [text] = useTypewriter({
    words: ["Web developer.", "Web advisor.", "Freelancer."],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });
  return (
    <section>
      <div className="container mx-auto p-[10px] mt-[130px] flex flex-col sm:flex-row sm:gap-[10px] items-center">
        <div className="md:w-1/2 order-2 sm:order-1 mt-[30px] text-center sm:text-left">
          <p
            ref={subRef}
            className="text-[20px] sm:text-[25px] lg:text-[30px] font-semibold dark:text-white"
          >
            Hi, this <span className="text-[tomato] dark:text-[#0ef]">is</span>
          </p>
          <h1>
            <span ref={nameRef} className="inline-block overflow-hidden">
              {nameValue?.map((item, i) => (
                <span
                  key={i}
                  className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] dark:text-white font-bold inline-block span"
                >
                  {item}
                </span>
              ))}
            </span>{"  "}

            <span ref={nameRef2} className="inline-block overflow-hidden">
            {titleValue?.map((item, i) => (
                <span
                  key={i}
                  className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] dark:text-white font-bold inline-block span"
                >
                  {item}
                </span>
              ))}
            </span>
          </h1>
          <p
            ref={typeRef}
            className="text-[20px] sm:text-[25px] lg:text-[30px] font-semibold dark:text-white"
          >
            And I'm a{" "}
            <span className="text-[tomato] dark:text-[#0ef]">{text}</span>
            <span className="text-[tomato] dark:text-[#0ef]">
              <Cursor cursorStyle="|" />
            </span>
          </p>
          <p
            ref={mainPara}
            className="my-[20px] text-[#8A8FB9] dark:text-white"
          >
            I'm a web designer with exclusive experience. I have designed
            various types of website in recent time, those were Portfolio
            website, E-commerce website, blog website, Landing Page website,
            various types of project in React.js, Next.js, and JavaScript with
            Bootstrap, Tailwind CSS, SASS etc. Those all are highly customizable
            and well managed.
          </p>
          <div className="iconDiv flex gap-[10px] justify-center sm:justify-start">
            <div className="icon">
              <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] hover:text-white hover:bg-[tomato] dark:hover:text-[#151875] dark:hover:bg-[#0ef] duration-300 text-[20px]">
              <a
                href="https://www.facebook.com/chydeveloper/"
                target="_blank"
                title="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
            </div>
            
            <div className="icon">
            <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] hover:text-white hover:bg-[tomato] dark:hover:text-[#151875] dark:hover:bg-[#0ef] duration-300 text-[20px]">
              <a
                href="https://www.instagram.com/chydeveloper/"
                target="_blank"
                title="Instagram"
              >
                <BsInstagram />
              </a>
            </div>
            </div>

            <div className="icon">
            <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] hover:text-white hover:bg-[tomato] dark:hover:text-[#151875] dark:hover:bg-[#0ef] duration-300 text-[20px]">
              <a
                href="https://github.com/rahulchy375"
                target="_blank"
                title="Github"
              >
                <FaGithub />
              </a>
            </div>
            </div>

            <div className="icon">
            <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] hover:text-white hover:bg-[tomato] dark:hover:text-[#151875] dark:hover:bg-[#0ef] duration-300 text-[20px]">
              <a
                href="https://www.linkedin.com/in/rahul-chowdhury-b5783326a/"
                target="_blank"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            </div>
          </div>
          <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] mt-[10px] rounded-[10px]"></div>
          <Link to="/#aboutSection">
          <div className="" ref={mainBtnRef} >
            <button
              className="px-[20px] py-[7px] rounded-[20px] text-white dark:text-[#151875] bg-[tomato] dark:bg-[#0ef] mt-[30px] hover:scale-[1.05] duration-300"
            >
              Read me more
            </button>
            </div>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center items-center order-1 sm:order-2">
          <div
            ref={mainImgRef}
            className="w-[260px] h-[265px] md:w-[330px] md:h-[340px] lg:w-[420px] lg:h-[435px] xl:w-[450px] xl:h-[465px] animate-box-glow dark:animate-box-dark-glow shadow-light dark:shadow-dark rounded-full overflow-hidden dark:border-[#0ef] border-[tomato]"
          >
            <img src={mainImg} alt="Rahul's image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
