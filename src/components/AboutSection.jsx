import React, { useRef, useState } from "react";
import myImg from "/images/my picture-2.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutSection = () => {
  let nameRef = useRef(null);
  let aboutImg = useRef(null);
  let subPara = useRef(null);
  let aboutPara = useRef(null);
  let about1 = useRef(null);
  let about2 = useRef(null);
  let aboutBtn = useRef(null);
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutSection",
        scroller: "body",
        start:"top 50%"
      },
    })
    tl.from(nameRef.current, {
      x:70,
      opacity:0,
      duration:1,
      
    });
    tl.from(aboutImg.current, {
      x:-150,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(subPara.current, {
      y:50,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(aboutPara.current, {
      y:50,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(about1.current, {
      y:50,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(about2.current, {
      y:50,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(aboutBtn.current, {
      opacity:0,
      
    },"-=0.7");
  });
  return (
    <section id="aboutSection">
      <div className="container mx-auto p-[10px] mt-[40px]">
        <div className="sm:flex items-center gap-[20px] lg:gap-[50px] xl:gap-[80px]">
          <div className="flex justify-center items-center">
            <div className="rounded-full overflow-hidden w-[270px] h-[275px] md:w-[323px] md:h-[335px] lg:w-[405px] lg:h-[420px] xl:w-[450px] xl:h-[465px] animate-box-glow dark:animate-box-dark-glow" ref={aboutImg}>
              <img src={myImg} alt="Rahul's image" className="" />
            </div>
          </div>

          <div className="dark:text-white">
            <h2 className="text-[35px] font-bold mt-[15px]" ref={nameRef}>
              About
              <span className="text-[tomato] dark:text-[#0ef]">
                me
              </span>
            </h2>
            <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>
            <p ref={subPara} className="my-[20px] text-[18px] md:text-[22px] lg:text-[30px] font-semibold">
              I'm a professional web developer with{" "}
              <span className="text-[tomato] dark:text-[#0ef]">
                fluent developing skills.
              </span>
            </p>

            <p ref={aboutPara} className="text-[#8A8FB9] dark:text-white lg:text-[20px]">
              Hi there, I'm Rahul Chowdhury and I'm a front-end web developer
              with 3 years of experience. I work with front-end web related
              technologies like JavaScript, React js, Next js, Bootstrap etc. I
              specialize in creating highly responsive, preferable, functional,
              and user-friendly interfaces using React and any other
              technologies. Moreover, I specialize in crafting captivating and
              custom e-commerce websites like clothing, fashion, restaurants
              that execute sales. So let's create a professional website
              together and always get in touch!
            </p>

            <div className="text-[14px] sm:text-[16px] xl:text-[20px] mt-[20px] text-[#8A8FB9] dark:text-white">
              <div ref={about1} className="lg:flex">
                <div className="flex">
                  <div className="w-[70px] sm:w-[100px] lg:w-[80px] xl:w-[90px]">
                    Name
                  </div>
                  <div className="lg:w-[210px] xl:w-[255px]">
                    Rahul Chowdhury
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[70px] sm:w-[100px] lg:w-[80px] xl:w-[90px]">
                    Age
                  </div>
                  <div className="">23 years</div>
                </div>
              </div>
              <div ref={about2} className="lg:flex">
                <div className="flex">
                  <div className="w-[70px] sm:w-[100px] lg:w-[80px] xl:w-[90px]">
                    Email
                  </div>
                  <div className="lg:w-[210px] xl:w-[255px]">
                    rahulchy375@gmail.com
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[70px] sm:w-[100px] lg:w-[80px] xl:w-[90px]">
                    Address
                  </div>
                  <div className="">Pahartali, Chattogram</div>
                </div>
              </div>
            </div>

            <a href="/images/myResume.pdf" download="myResume.pdf">
            <div className="" ref={aboutBtn}>
              <button className="px-[20px] py-[7px] rounded-[20px] text-white dark:text-[#151875] bg-[tomato] dark:bg-[#0ef] mt-[30px] hover:scale-[1.05] duration-300">
                Download CV
              </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
