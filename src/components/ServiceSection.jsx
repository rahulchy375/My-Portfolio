import React, { useRef } from "react";
import ServiceReuse from "../reuse/serviceReuse";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ServiceSection = () => {
  const title = useRef();
  const subPara = useRef();
  const services = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#serviceSection",
        scroller: "body",
        start:"top 60%",
      },
    })
    tl.from(title.current, {
      y:70,
      opacity:0,
      duration:1,
      
    });
    tl.from(subPara.current, {
      y:70,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(services.current.querySelectorAll(".services"), {
      scale:1.4,
      opacity:0,
      duration:1,
      stagger:0.2
      
    },"-=0.7");
  });
  return (
    <section id="serviceSection">
      <div className="container mx-auto p-[10px] mt-[30px] dark:text-white">
        <div className="">
          <h2 ref={title} className="text-center text-[30px] sm:text-[40px] font-bold">
            All the{" "}
            <span className="text-[tomato] dark:text-[#0ef]">Services</span>
          </h2>
          <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>
          <div className="sm:flex justify-center">
            <p ref={subPara} className="text-center text-[18px] sm:text-[25px] md:text-[27px] font-semibold mt-[15px] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
              Here are the services below that I provide to{" "}
              <span className="text-[tomato] dark:text-[#0ef]">my clients</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center  xl:justify-between items-center sm:gap-[50px] xl:gap-0" ref={services}>
          <ServiceReuse
            title="Portfolio Website"
            one="Define goals and audience"
            two="Choose technologies"
            three="Create layout and design"
            four="Development and testing"
            five="Deployment and support"
            click="portfolio"
          />
          <ServiceReuse
            title="Landing Page"
            one="Clarify goals and audience"
            two="Select elements, design"
            three="Create content"
            four="Layout and development"
            five="Testing and optimization"
            click="landing"
          />
          <ServiceReuse
            title="Blog Website"
            one="Define topic and audience"
            two="Pick platform, host"
            three="Create design and structure"
            four="Create and publish content"
            five="Promote, profit"
            click="blog"
          />
          <ServiceReuse
            title="Business Website"
            one="Set goals, target audience"
            two="Create profile and content"
            three="Promotion and advertising"
            four="Analyze, optimize"
            five="Support and development"
            click="business"
          />
          <ServiceReuse
            title="E-commerce Website"
            one="Set goals, target audience"
            two="Create profile and content"
            three="Promotion and advertising"
            four="Analyze, optimize"
            five="Support and development"
            click="ecom"
            font="!text-[22px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
