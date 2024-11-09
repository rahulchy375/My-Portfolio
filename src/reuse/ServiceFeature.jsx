import React from "react";

const ServiceFeature = ({img, heading, para}) => {
  return (
    <>
      <div className="mt-[50px] md:flex lg:w-1/2 F">
        <div className="flex justify-center">
          <div className="w-[30%] md:w-[60%]">
            <div className="inline-block dark:bg-[#0ef] dark:p-[10px] dark:rounded-[5px]">
              {img}
            </div>
            
          </div>
        </div>

        <div className="text-center md:text-left mt-[20px]">
          <h3 className="text-[20px] sm:text-[25px] font-bold mb-[5px]">
            {heading}
          </h3>
          <p className="text-[#8A8FB9] dark:text-white md:text-[18px]">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceFeature;
