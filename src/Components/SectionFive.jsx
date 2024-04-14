// import React from "react";
import BreakCirlce from "../assets/SectionFive/BreakCircle.png";
import Setting from "../assets/SectionFive/Setting.png";

const SectionFive = () => {
  return (
    <>
      <div className="bg-black text-white h-auto">
        <div className="relative hidden md:block">
          <div className="absolute md:-left-12 lg:left-56 lg:-top-20 lg:w-[200px]">
            <img src={BreakCirlce} alt="" width="200px" />
          </div>
          <div className="absolute md:left-[630px] w-[200px] md:top-20 lg:left-[950px] ">
            <img src={Setting} alt="" />
          </div>
        </div>
        <div className="py-10 w-auto mx-auto">
          <h2 className="text-center text-2xl md:text-4xl md:font-semibold lg:text-4xl font-bold">
            Get instant access
          </h2>
          <p className="px-8 text-center font-thin mt-2 md:mx-36 lg:mx-[420px] mb-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <div className="flex justify-center flex-col md:flex-row md:gap-4 mx-10 mt-4">
            <input
              type="email"
              placeholder="name@email.com"
              name=""
              id=""
              className="rounded-lg bg-gray-700 text-black py-1 md:w-80 shadow-sm"
            />
            <button className="text-black bg-white mt-2 rounded-lg py-1 md:px-4 md:mt-0 active:translate-x-1 active:translate-y-1 duration-300 hover:ease-in-out active:bg-[#4F21A1] active:text-white">
              Get Access
            </button>
          </div>
        </div>
        <div className="md:h-[100px]"></div>
      </div>
    </>
  );
};

export default SectionFive;
