import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const ServiceReuse = ({ title, one, two, three, four, five, click, font, }) => {
  let navigate = useNavigate();

  const handleWeb = (value) => {
    console.log(value);
    if (value === "portfolio") {
      navigate("/portfolio");
    } else if (value === "landing") {
      navigate("/landing");
    } else if (value === "blog") {
      navigate("/blog");
    } else if (value === "business") {
      navigate("/business");
    } else if (value === "ecom") {
      navigate("/ecom");
    }
  };

  return (
    <>
      <div className="services w-[260px] xl:w-[19.5%]">
      <div className={` bg-[#fbf3f1] dark:bg-[#083336] rounded-[5px] pt-[20px] px-[10px] mt-[30px] hover:shadow-serviceLight dark:hover:shadow-serviceDark duration-300`}>
        <div
          className={`text-center bg-[#f9bdb2] dark:bg-[#1cacb6] rounded-[5px] py-[30px] text-[25px] font-bold mb-[20px] ${font}`}
        >
          {title}
        </div>
        <div className="">
          <div className="border-b border-[tomato] dark:border-[#0ef] flex pb-[10px] mb-[15px]">
            <GiCheckMark className="text-[tomato] dark:text-[#0ef] mr-[5px]" />{" "}
            {one}
          </div>
          <div className="border-b border-[tomato] dark:border-[#0ef] flex pb-[10px] mb-[15px]">
            <GiCheckMark className="text-[tomato] dark:text-[#0ef] mr-[5px]" />{" "}
            {two}
          </div>
          <div className="border-b border-[tomato] dark:border-[#0ef] flex pb-[10px] mb-[15px]">
            <GiCheckMark className="text-[tomato] dark:text-[#0ef] mr-[5px]" />{" "}
            {three}
          </div>
          <div className="border-b border-[tomato] dark:border-[#0ef] flex pb-[10px] mb-[15px]">
            <GiCheckMark className="text-[tomato] dark:text-[#0ef] mr-[5px]" />{" "}
            {four}
          </div>
          <div className="border-b border-[tomato] dark:border-[#0ef] flex pb-[10px] mb-[15px]">
            <GiCheckMark className="text-[tomato] dark:text-[#0ef] mr-[5px]" />{" "}
            {five}
          </div>
        </div>
        <div
          className="flex justify-center items-center mt-[40px]"
          onClick={() => handleWeb(click)}
        >
          <button className="bg-[tomato] dark:text-black text-white dark:bg-[#0ef] px-[20px] py-[10px] rounded-t-[10px]">
            Learn More
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default ServiceReuse;
