import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { Children, useRef } from "react";

const ServiceFSection = ({title, children}) => {
  const Ftitle = useRef();
  const chill = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".FS",
        scroller: "body",
        start:"top 60%",
      },
    })
    tl.from(Ftitle.current, {
      y:70,
      opacity:0,
      duration:1,
      
    });
    tl.from(chill.current.querySelectorAll(".F"), {
      y:50,
      opacity:0,
      duration:1,
      stagger:0.2
      
    },"-=0.7");
  });
  return (
    <>
      <div className="mt-[50px] lg:mt-[70px] dark:text-white FS">
        <div className="flex justify-center">
          <h2 ref={Ftitle} className="text-center font-bold text-[17px] sm:text-[20px] xl:w-[85%] md:text-[24px] lg:w-[70%]">
            {title}
          </h2>
        </div>
        <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>

        <div ref={chill} className="lg:flex flex-wrap">
          {children}
        </div>
      </div>
    </>
  );
};

export default ServiceFSection;
