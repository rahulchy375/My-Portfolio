import React from "react";
import { GiCheckMark } from "react-icons/gi";

const ServiceCosts = ({title, para}) => {
  return (
    <>
      <div className="mt-[30px] border-b border-[tomato] dark:border-[#0ef] p-[10px] cost">
        <h3 className="font-bold text-[17px] lg:text-[20px]">
          <GiCheckMark className="text-[tomato] dark:text-[#0ef] mr-[5px] inline-block" />{" "}
          {title}{" "}
          <span className="font-normal lg:text-[19px] text-[#8A8FB9] dark:text-white">
            {para}
          </span>
        </h3>
      </div>
    </>
  );
};

export default ServiceCosts;
