import React, { useRef, useState } from "react";
import allProject from "../api/projectapi.json";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ProjectSection = () => {
  let [isViewMore, setIsViewMore] = useState(false);
  let perPageProject = allProject.slice(0, 4);

  const handleViewMore = () => {
    setIsViewMore(!isViewMore);
  };

  const title = useRef();
  const subPara = useRef();
  const proPara = useRef();
  const project = useRef();
  const view = useRef();
  const button = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectSection",
        scroller: "body",
        start:"top 60%",
      },
    })
    tl.from(title.current, {
      x:70,
      opacity:0,
      duration:1,
      
    });
    tl.from(subPara.current, {
      x:70,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(proPara.current, {
      y:50,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(project.current.querySelectorAll(".project"), {
      y:50,
      opacity:0,
      duration:1,
      stagger:0.2
      
    },"-=0.7");
    tl.from(view.current, {
      opacity:0,
      
    });
    tl.from(button.current, {
      opacity:0,
      
    });
  });

  return (
    <section id="projectSection">
      <div className="container mx-auto p-[10px] py-[50px]">
        <div className="text-right dark:text-white">
          <h2 ref={title} className="text-[22px] font-bold sm:text-[27px] md:text-[30px] lg:text-[35px] xl:text-[40px]">
            Here some of{" "}
            <span className="text-[tomato] dark:text-[#0ef]">my projects</span>
          </h2>
          <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>
          <h3 ref={subPara} className="text-[18px] sm:text-[23px] md:text-[25px] font-semibold my-[15px]">
            These all are the{" "}
            <span className="text-[tomato] dark:text-[#0ef]">
              projects that <br />I have made before
            </span>
          </h3>
          <p ref={proPara} className="text-[#8A8FB9] dark:text-white md:text-[18px] xl:text-[20px]">
            There are some of my project below. Those project I have made
            before. You can visit them and can see the way of my work that how
            can I make the projects. If you need any kind of web project so you
            can contact me to build the website or if you already have any plan
            for your website so just tell me to build that website of your mind.
          </p>

          <div className="">
            <div ref={project} className="flex justify-center items-center flex-col sm:flex-row sm:gap-[15px] flex-wrap">
              {isViewMore === true
                ? allProject.map((item, i) => (
                    <div
                      className="w-[90%] sm:w-[48%] lg:w-[23%] mt-[30px] group"
                      key={i}
                    >
                      <a href={item.link} target="_blank">
                        <div className="relative">
                          <img
                            src={item.img}
                            alt=""
                            className="rounded-[5px]"
                          />
                          <div className="absolute bottom-[0px] left-0 duration-300 overflow-y-scroll bg-[#fb654bd2] dark:bg-[#00eeffbc] px-[15px] h-0 group-hover:h-full">
                            <p className="py-[15px] text-center text-white dark:text-black">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <h3 className="text-center mt-[15px] text-[20px] font-semibold">
                          {item.title}
                        </h3>
                      </a>
                    </div>
                  ))
                : perPageProject.map((item, i) => (
                    <div
                      className="w-[90%] sm:w-[48%] lg:w-[23%] mt-[30px] group project"
                      key={i}
                    >
                      <a href={item.link} target="_blank">
                        <div className="relative">
                          <img
                            src={item.img}
                            alt=""
                            className="rounded-[5px]"
                          />
                          <div className="absolute bottom-[0px] left-0 duration-300 overflow-y-scroll bg-[#fb654bd2] dark:bg-[#00eeffbc] px-[15px] h-0 group-hover:h-full">
                            <p className="py-[15px] text-center text-white dark:text-black">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <h3 className="text-center mt-[15px] text-[20px] font-semibold">
                          {item.title}
                        </h3>
                      </a>
                    </div>
                  ))}
            </div>

            <div className="text-center" ref={view}>
              <button
                className="underline mt-[30px] hover:text-[tomato] dark:hover:text-[#0ef] duration-200"
                onClick={handleViewMore}
              >
                View {isViewMore === true ? "Less" : "More"} Projects
              </button>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <Link to="/#contactSection">
            <div className="" ref={button}>
            <button className="px-[20px] py-[7px] rounded-[20px] text-white dark:text-[#151875] bg-[tomato] dark:bg-[#0ef] mt-[30px] hover:scale-[1.05] duration-300">
              Send Mail
            </button>
            </div>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
