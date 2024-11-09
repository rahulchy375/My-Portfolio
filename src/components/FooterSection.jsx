import React, { useRef } from "react";
import myLogo from "/images/newLogo.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FooterSection = () => {
  const title = useRef();
  const logo = useRef();
  const para = useRef();
  const service = useRef();
  const contact = useRef();
  const copy = useRef();
  const credit = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footerSection",
        scroller: "body",
        start: "top 60%",
      },
    });
    tl.from(logo.current, {
      y: 70,
      opacity: 0,
      duration: 1,
    });
    tl.from(title.current, {
      y: 70,
      opacity: 0,
      duration: 1,
    },
    "-=0.7");
    tl.from(
      para.current,
      {
        y: 70,
        opacity: 0,
        duration: 1,
      },
      "-=0.7"
    );
    tl.from(
      service.current.querySelectorAll("h2, div"),
      {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      "-=1"
    );
    tl.from(
      contact.current.querySelectorAll("h2, a"),
      {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      "-=0.7"
    );
    tl.from(
      copy.current,
      {
        x: -70,
        opacity: 0,
        duration: 1,
      },
      "-=0.7"
    );
    tl.from(
      credit.current,
      {
        x: 70,
        opacity: 0,
        duration: 1,
      },
      "-=0.7"
    );
  });
  return (
    <section className="bg-[#fdf8f7] dark:bg-transparent" id="footerSection">
      <div className="container mx-auto p-[10px] py-[25px]">
        <div className="dark:text-white md:flex justify-between md:gap-[12px]">
          <div className="sm:flex md:w-[65%] lg:w-[90%] md:gap-[30px] lg:gap-[55px] xl:gap-[50px] xl:w-[60%]">
            <div className="sm:w-[48%] md:w-[65%]">
              <div className="flex justify-center" ref={logo}>
                <img src={myLogo} alt="chydev's Logo" />
              </div>
              <h2 className="text-center text-[25px] font-bold" ref={title}>ChyDev</h2>
              <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>
              <p ref={para} className="text-center lg:text-[18px] xl:text-[20px] sm:text-left mt-[15px] text-[#8A8FB9] dark:text-white">
                This is CHY Developer, and I'm Rahul Chowdhury. I enjoy
                discussing new projects and design challenges. Please share as
                much information as possible so we can get the most out of our
                first catch-up.
              </p>
            </div>

            <div ref={service} className="sm:text-right md:text-left sm:w-[48%] md:w-[35%] lg:w-[37%] xl:w-[25%]">
              <h2 className="text-[25px] font-bold mt-[20px] sm:mt-0 mb-[15px]">
                Services
              </h2>
              <ul>
                <div className="">
                <li className="mb-[10px] text-[18px] hover:underline hover:text-[tomato] dark:hover:text-[#0ef] duration-300">
                  <Link to="/portfolio">Portfolio Website</Link>
                </li>
                </div>
                <div className="">
                <li className="mb-[10px] text-[18px] hover:underline hover:text-[tomato] dark:hover:text-[#0ef] duration-300">
                  <Link to="/landing">Landing Page</Link>
                </li>
                </div>
                <div className="">
                <li className="mb-[10px] text-[18px] hover:underline hover:text-[tomato] dark:hover:text-[#0ef] duration-300">
                  <Link to="/blog">Blog Website</Link>
                </li>
                </div>
                <div className="">
                <li className="mb-[10px] text-[18px] hover:underline hover:text-[tomato] dark:hover:text-[#0ef] duration-300">
                  <Link to="/business">Business Website</Link>
                </li>
                </div>
                <div className="">
                <li className="mb-[10px] text-[18px] hover:underline hover:text-[tomato] dark:hover:text-[#0ef] duration-300">
                  <Link to="/ecom">E-commerce Website</Link>
                </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="md:w-[35%] xl:w-[40%]" ref={contact}>
            <h2 className=" text-[25px] font-bold mt-[15px] md:mt-0 sm:mt-[25px] mb-[10px]">
              Contacts
            </h2>
            <div className="xl:flex flex-wrap">
              <a href="https://www.facebook.com/chydeveloper" target="_blank">
                <div className="flex items-center gap-[10px] mb-[15px] xl:w-[200px] group">
                  <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] group-hover:text-white group-hover:bg-[tomato] dark:group-hover:text-[#151875] dark:group-hover:bg-[#0ef] duration-300 text-[20px] inline-block">
                    <FaFacebook />
                  </div>
                  <h3 className="text-[18px] font-semibold">CHY Developer</h3>
                </div>
              </a>

              <a href="https://www.instagram.com/chydeveloper/" target="_blank">
                <div className="flex items-center gap-[10px] mb-[15px] group">
                  <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] group-hover:text-white group-hover:bg-[tomato] dark:group-hover:text-[#151875] dark:group-hover:bg-[#0ef] duration-300 text-[20px] inline-block">
                    <BsInstagram />
                  </div>
                  <h3 className="text-[18px] font-semibold">chydeveloper</h3>
                </div>
              </a>

              <a href="https://github.com/rahulchy375" target="_blank">
                <div className="flex items-center gap-[10px] mb-[15px] group xl:w-[200px]">
                  <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] group-hover:text-white group-hover:bg-[tomato] dark:group-hover:text-[#151875] dark:group-hover:bg-[#0ef] duration-300 text-[20px] inline-block">
                    <FaGithub />
                  </div>
                  <h3 className="text-[18px] font-semibold">rahulchy375</h3>
                </div>
              </a>

              <a href="" className="">
              <div className="flex items-center gap-[10px] mb-[15px] group">
                <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] group-hover:text-white group-hover:bg-[tomato] dark:group-hover:text-[#151875] dark:group-hover:bg-[#0ef] duration-300 text-[20px] inline-block">
                  <IoMdMail />
                </div>
                <h3 className="text-[18px] font-semibold">
                  rahulchy375@gmail.com
                </h3>
              </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-chowdhury-b5783326a/"
                target="_blank"
              >
                <div className="flex items-center gap-[10px] mb-[15px] group">
                  <div className="p-[10px] rounded-full border border-[tomato] text-[tomato] dark:border-[#0ef] dark:text-[#0ef] group-hover:text-white group-hover:bg-[tomato] dark:group-hover:text-[#151875] dark:group-hover:bg-[#0ef] duration-300 text-[20px] inline-block">
                    <FaLinkedin />
                  </div>
                  <h3 className="text-[18px] font-semibold">Rahul Chowdhury</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-[10px] pb-[50px]">
        <div className="sm:flex justify-between dark:text-white">
          <p className="lg:text-[20px]" ref={copy}>
            © 2024, All rights reserved by{" "}
            <span className="text-[tomato] dark:text-[#0ef]">Rahul.</span>
          </p>
          <p ref={credit} className="mr-[50px] lg:text-[20px]">
            Designed by{" "}
            <span className="text-[tomato] dark:text-[#0ef]">
              Rahul Chowdhury.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
