import React, { useRef, useState } from "react";
import faqImg from "/images/faqImg.webp";
import faqData from "../api/faq.json";
import { FiPlus } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FaqSection = () => {
  let [isOpen, setIsOpen] = useState(null);
  const toggleIndex = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const title = useRef();
  const faqImgs = useRef();
  const question = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#faqSection",
        scroller: "body",
        start:"top 60%",
      },
    })
    tl.from(title.current, {
      x:70,
      opacity:0,
      duration:1,
      
    });
    tl.from(faqImgs.current, {
      x:-70,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(question.current.querySelectorAll(".question"), {
      y:50,
      opacity:0,
      duration:1,
      stagger:0.2
      
    },"-=0.7");
  });
  return (
    <section id="faqSection">
      <div className="container mx-auto p-[10px] mb-[50px]">
        <div className="">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full sm:w-[55%] lg:w-[60%] xl:w-[65%] h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px] order-2 sm:order-1"></div>
            <div ref={title} className="order-1 sm:order-2 text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-bold font-sail dark:text-white">
              Have You Any{" "}
              <span className="font-sail text-[tomato] dark:text-[#0ef]">
                Question?
              </span>
            </div>
          </div>

          <div className="sm:flex justify-between items-center mt-[25px]">
            <div className="my-[30px] sm:w-[48%]" ref={faqImgs}>
              <img src={faqImg} alt="" />
            </div>
            <div className="text-center sm:w-[48%]" ref={question}>
              {faqData.map((item, index) => (
                <div
                  className="border border-[tomato] dark:border-[#0ef] rounded-[5px] w-full  mb-[10px] md:mb-[20px] question"
                  key={index}
                >
                  <button
                    aria-expanded={isOpen === index}
                    aria-controls={`panel-${index}`}
                    id={`accordion-${index}`}
                    onClick={() => toggleIndex(index)}
                    className="bg-slate-100 w-full flex justify-between items-center px-[5px] lg:px-[10px] py-[10px] rounded-[5px] font-sail text-[17px] md:text-[20px] lg:text-[22px]"
                  >
                    {item.title}{" "}
                    <FiPlus
                      className={`${
                        isOpen === index ? "rotate-45" : "rotate-0"
                      } transition-all duration-300`}
                    />
                  </button>
                  <div
                    id={`panel-${index}`}
                    aria-labelledby={`accordion-${index}`}
                    role="region"
                    className={`${
                      isOpen === index ? "max-h-[300px]" : "max-h-0"
                    } transition-all duration-300 overflow-hidden text-[#8A8FB9] dark:text-white `}
                  >
                    <p className="p-[10px] lg:text-[18px]">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
