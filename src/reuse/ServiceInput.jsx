import React from "react";

const ServiceInput = ({title, For, id, place, w, handleInput,value}) => {
  return (
    <>
      <div className={`mb-[30px] ${w} input`}>
        <label htmlFor={For} className="block text-[20px] text-left font-semibold">
          {title}
        </label>
        <input
          type="text"
          id={id}
          placeholder={place}
          className={`border border-[tomato] dark:border-[#0ef] w-full px-[10px] py-[5px] outline-none rounded-[4px] placeholder:dark:text-[#0ef] bg-transparent dark:text-white`}
          onChange={handleInput}
          value={value}
        />
      </div>
    </>
  );
};

export default ServiceInput;
