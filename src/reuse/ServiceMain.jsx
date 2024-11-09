import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const ServiceMain = ({ title, para, img, onClick }) => {
  const Stitle = useRef();
  const Spara = useRef();
  const Sbutton = useRef();
  const SImg = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      // scrollTrigger: {
      //   trigger: "#faqSection",
      //   scroller: "body",
      //   start:"top 60%",
      // },
    })
    tl.from(Stitle.current, {
      x: -70,
      opacity:0,
      duration:1.5
      
    });
    tl.from(Spara.current, {
      y: 70,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(Sbutton.current, {
      opacity:0,
    });
    tl.from(SImg.current, {
      x: 100,
      opacity:0,
      duration:1,
      stagger:0.2
      
    },"-=1.5");
  });
  return (
    <>
      <div className="mt-[120px] flex flex-col md:flex-row md:items-center md:gap-[15px]">
        <div className="order-2 md:order-1 mt-[30px] md:w-1/2">
          <h1 ref={Stitle} className="text-[27px] font-bold dark:text-white">{title}</h1>
          <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>
          <p ref={Spara} className="mt-[20px] text-[#8A8FB9] dark:text-white lg:text-[20px]">
            {para}
          </p>
          <div className="" ref={Sbutton}>
            <button className="px-[20px] py-[7px] rounded-[20px] text-white dark:text-[#151875] bg-[tomato] dark:bg-[#0ef] mt-[30px] hover:scale-[1.05] duration-300" onClick={onClick}>
              About Price
            </button>
          </div>
        </div>
        <div ref={SImg} className="order-1 md:order-2 flex justify-center items-center md:w-1/2">
          <div className="w-[90%] sm:w-[70%] md:w-full lg:w-[80%]">{img}</div>
        </div>
      </div>
    </>
  );
};

export default ServiceMain;
