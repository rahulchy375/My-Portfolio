import React, { useEffect, useState } from "react";

const SkillReuse = ({title, w, skill}) => {
  let [count, setCount] = useState(1);
  useEffect(()=>{
    if (count < skill) {
      const timer = setInterval(()=>{
        setCount((value)=>value+1)
      },20)
      return(()=>clearInterval(timer))
    }
  },[count, skill])
  
  return (
    <>
      <div className="mt-[20px] skills">
        <h4 className="text-[18px] font-semibold dark:text-white">{title}</h4>
        <div className="w-full h-[11px] border border-[tomato] dark:border-[#0ef] rounded-[20px]">
          <div className={` h-full ${w} animate-skill bg-[tomato] dark:bg-[#0ef] rounded-[20px] text-right text-white dark:text-black relative`}>
            <div className="absolute top-[-4px] right-[10px] text-[13px]">
              {count}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillReuse;
