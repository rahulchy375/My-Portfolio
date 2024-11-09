import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ServiceCost = ({title, children, img, onClick}) => {
  const Ctitle = useRef();
  const costs = useRef();
  const button = useRef();
  const CImg = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cost",
        scroller: "body",
        start:"top 60%",
      },
    })
    tl.from(Ctitle.current, {
      y:70,
      opacity:0,
      duration:1,
      
    });
    tl.from(costs.current.querySelectorAll(".cost"), {
      x:-70,
      opacity:0,
      duration:1,
      stagger:0.2
      
    },"-=0.7");
    tl.from(button.current, {
      opacity:0,
      
    },"-=0.7");
    tl.from(CImg.current, {
      x:70,
      opacity:0,
      duration:1,
      
    },"-=2");
  });
  return (
    <>
      <div className="mt-[50px] lg:mt-[70px] dark:text-white cost">
        <div className="flex justify-center">
          <h2 ref={Ctitle} className="text-center font-bold text-[17px] sm:text-[20px] xl:w-[60%] md:text-[24px] lg:w-[70%]">
            {title}
          </h2>
        </div>
        <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>

        <div className="flex flex-col md:flex-row md:items-center lg:gap-[20px]">
          <div ref={costs} className="order-2 md:order-1 lg:w-1/2">
            {children}
            <div className="flex justify-center md:justify-start" ref={button}>
              <button className="px-[20px] py-[7px] rounded-[20px] text-white dark:text-[#151875] bg-[tomato] dark:bg-[#0ef] mt-[30px] hover:scale-[1.05] duration-300" onClick={onClick}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center lg:w-1/2">
            <div className="my-[30px] w-[70%] md:w-full" ref={CImg}>
              {img}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCost;
