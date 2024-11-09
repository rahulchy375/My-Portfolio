import React, { useRef } from "react";
import SkillReuse from "../reuse/SkillReuse";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SkillSection = () => {
  const title = useRef();
  const subPara = useRef();
  const para = useRef();
  const proSkill = useRef();
  const perSkill = useRef();
  const skills = useRef();
  const skill2 = useRef();
  const button = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillSection",
        scroller: "body",
        start:"top 60%",
      },
    })
    tl.from(title.current, {
      x:-70,
      opacity:0,
      duration:1,
      
    });
    tl.from(subPara.current, {
      x:-70,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(para.current, {
      y:50,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(proSkill.current, {
      x:-50,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(perSkill.current, {
      x:-50,
      opacity:0,
      duration:1,
      
    },"-=0.7");
    tl.from(skills.current.querySelectorAll(".skills"), {
      y:50,
      opacity:0,
      duration:1,
      stagger:0.2
      
    },"-=0.7");
    tl.from(skill2.current.querySelectorAll(".skills"), {
      y:50,
      opacity:0,
      duration:1,
      stagger:0.2
      
    },"-=3");
    tl.from(button.current, {
      opacity:0,
      
    },"-=0.7");
  });
  return (
    <section id="skillSection">
      <div className="container mx-auto p-[10px] mb-[60px] dark:text-white">
        <div className="">
          <div className="">
            <h2 ref={title} className="text-[20px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">
              My skills of{" "}
              <span className="text-[tomato] dark:text-[#0ef]">
                my profession
              </span>
            </h2>
            <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>
            <h3 ref={subPara} className="text-[18px] sm:text-[25px] font-semibold my-[15px]">
              These all are my{" "}
              <span className="text-[tomato] dark:text-[#0ef]">
                professional
              </span> {""} <br />
              and{" "}
              <span className="text-[tomato] dark:text-[#0ef]">
                personal skills
              </span>{" "}
              below
            </h3>
            <p ref={para} className="text-[#8A8FB9] dark:text-white lg:text-[18px] xl:text-[20px]">
              I had started my web development journey in march 2023. Though my
              study is not belongs from IT sector, I entered the this sector
              with a great interest. Cause I love this profession. I do my work
              with the great interest and supreme priority. I achieved the
              skills in my career time. The skills are described below.
            </p>
          </div>

          <div className="sm:flex justify-between" >
            <div className="mt-[25px] sm:w-[48%]">
              <h3 ref={proSkill} className="text-[25px] mb-[-15px] font-semibold text-[tomato] dark:text-[#0ef]">
                Professional Skills
              </h3>
              <div className="" ref={skills}>
                <SkillReuse title="React.JS" w="max-w-[85%]" skill={85} />
                <SkillReuse title="JavaScript" w="max-w-[80%]" skill={80} />
                <SkillReuse title="Next.JS" w="max-w-[45%]" skill={45} />
                <SkillReuse title="Firebase" w="max-w-[70%]" skill={70} />
                <SkillReuse title="Redux" w="max-w-[80%]" skill={80} />
                <SkillReuse title="TailwindCSS" w="max-w-[95%]" skill={95} />
                <SkillReuse title="Bootstrap" w="max-w-[93%]" skill={93} />
                <SkillReuse title="SASS" w="max-w-[85%]" skill={85} />
                <SkillReuse title="CSS" w="max-w-[95%]" skill={95} />
                <SkillReuse title="HTML" w="max-w-[95%]" skill={95} />
              </div>
            </div>
            <div className="sm:w-[48%]">
              <h3 ref={perSkill} className="text-[25px] mb-[-15px] mt-[50px] sm:mt-[25px] font-semibold text-[tomato] dark:text-[#0ef]">
                Personal Skills
              </h3>
              <div className="" ref={skill2}>
                <SkillReuse title="Problem Solving" w="max-w-[85%]" skill={85} />
                <SkillReuse
                  title="Technical Proficiency"
                  w="max-w-[80%]"
                  skill={80}
                />
                <SkillReuse title="Communication" w="max-w-[90%]" skill={90} />
                <SkillReuse title="Interpersonal" w="max-w-[80%]" skill={80} />
                <SkillReuse title="Teamwork" w="max-w-[95%]" skill={95} />
              </div>
            </div>
          </div>
          <Link to="/#contactSection">
          <div className="" ref={button}>
          <button className="px-[20px] py-[7px] rounded-[20px] text-white dark:text-[#151875] bg-[tomato] dark:bg-[#0ef] mt-[50px] hover:scale-[1.05] duration-300">
            Contact Me
          </button>
          </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
