// import React from 'react'
import Acme from "../assets/SectionThree/Acme.png";
import Quantum from "../assets/SectionThree/Quantum.png";
import Echo from "../assets/SectionThree/Echo.png";
import Celestia from "../assets/SectionThree/Celestia.png";
import Pulse from "../assets/SectionThree/Pulse.png";
import Apex from "../assets/SectionThree/Apex.png";
import Leaf from "../assets/SectionThree/leaf.png";
import EllipseBg from "../assets/SectionThree/EllipseBg.png";
const SectionThree = () => {
  return (
    <>
      <div className="bg-black">
        <div className="relative">
          <div className="w-full">
            <img
              src={EllipseBg}
              className="md:w-full w- absolute lg:-top-44 md:-top-24 -top-8 z-0"
              alt=""
            />
          </div>
        </div>
        <div className="text-center md:w-[740px] lg:w-[1124px] m-auto">
          <p className="text-[#7A7A7A] pt-[20px] md:pt-[28px] px-[80px]">
            Trusted by the world’s most innovative teams
          </p>
        </div>
        <div className="flex justify-around flex-wrap row-span-2 mt-16">
          <img src={Acme} alt="" className="md:w-3/6 lg:w-auto w-[100px]" />
          <img src={Quantum} alt="" className="w-[100px]" />
          <img src={Echo} alt="" className="w-[100px]" />
          <img src={Celestia} alt="" className="w-[100px]" />
          <img src={Pulse} alt="" className="w-[100px]" />
          <img src={Apex} alt="" className="w-[100px]" />
        </div>
        <div className="mt-10 text-center text-white">
          <h2 className="lg:text-4xl md:text-3xl text-2xl lg:mb-5">
            Everything you need
          </h2>
          <p className="mt-5 mx-[40px] lg:my-[1px] md:mx-[200px] lg:mx-[460px]">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4 justify-center mt-10">
            <div className="w-[300px] h-[220px] my-auto mx-auto lg:mx-5 rounded-lg  bg-[#0D0D0D] text-center text-white">
              <img src={Leaf} alt="" className="m-auto p-2" />
              <p className="font-bold text-lg p-2">Integration ecosystem</p>
              <p className="text-sm pb-2 px-6 ">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
            <div className="w-[300px] h-[220px] mx-auto lg:mx-5 rounded-lg  bg-[#0D0D0D] text-center text-white">
              <img src={Leaf} alt="" className="m-auto p-2 pt-6" />
              <p className="font-bold text-lg p-2">Integration ecosystem</p>
              <p className="text-sm pb-2 px-6 ">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
            <div className="w-[300px] h-[220px] mx-auto lg:mx-5 rounded-lg  bg-[#0D0D0D] text-center text-white">
              <img src={Leaf} alt="" className="m-auto p-2" />
              <p className="font-bold text-lg p-2">Integration ecosystem</p>
              <p className="text-sm pb-2 px-6 ">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="h-5"></div>
      </div>
    </>
  );
};

export default SectionThree;
