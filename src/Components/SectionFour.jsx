// import React from "react";
import AppImg from "../assets/SectionFour/AppImg.png";
const SectionFour = () => {
  return (
    <>
      <div className="SecFour-Background text-white">
        <div className="text-white text-center">
          <h1 className="Lg:text-5xl md:text-4xl text-3xl pt-10 font-bold">
            Intuitive interface
          </h1>
          <p className="mt-4 lg:mx-[450px] px-8 lg:px-0">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div className="w-full mx-auto">
          <img src={AppImg} alt="" className="mx-auto my-4" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-10">
            Frequently asked questions
          </h1>
          <div className="mt-10">
            <div className="flex justify-between mx-5 lg:mx-[400px] border-b border-gray-600 p-4">
              <h2>How does the pricing work for teams</h2>
              <h2>+</h2>
            </div>
            <div className="flex justify-between mx-5 lg:mx-[400px] border-b border-gray-600 p-4">
              <h2>How does the pricing work for teams</h2>
              <h2>+</h2>
            </div>
            <div className="flex justify-between mx-5 lg:mx-[400px] border-b border-gray-600 p-4">
              <h2>How does the pricing work for teams</h2>
              <h2>+</h2>
            </div>
            <div className="flex justify-between mx-5 lg:mx-[400px] border-b border-gray-600 p-4">
              <h2>How does the pricing work for teams</h2>
              <h2>+</h2>
            </div>
          </div>
        </div>
        <div className="h-[40px]"></div>
      </div>
    </>
  );
};

export default SectionFour;
