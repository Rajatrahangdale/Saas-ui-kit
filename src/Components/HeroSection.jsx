// import React from "react";
import Cursor from "../assets/HeroImages/cursor.png";
import Message from "../assets/HeroImages/message.png";
const HeroSection = () => {
  return (
    <>
      <div className="hero-background h-auto w-full m-auto">
        <div className="text-center pt-20">
          <p className="text-gray-600 px-3 py-1 border mb-10 border-[#222222] inline-block rounded-lg">
            Version 2.0 is here{" "}
            <span className="text-white">
              Read more
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline text-white"
              >
                <path
                  d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z"
                  fill="white"
                />
              </svg>
            </span>
          </p>
        </div>
        <div>
          <h1 className="drop-shadow-lg text-center md:leading-[125px] leading-[85px] -tracking-[5px] text-white font-bold md:text-[125px] text-[80px]">
            One Task <br />
            at a Time
          </h1>
          <div className="text-center text-white md:mt-[50px] mt-10 text-lg">
            <p className="mx-[40px] lg:my-[1px] md:mx-[200px] lg:mx-[460px]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <button className="text-center bg-white rounded-2xl p-2 text-black relative md:top-[96px] top-[70px] z-10">
              Get for free
            </button>
          </div>
        </div>
        <div className="md:relative hidden md:block">
          <div className="md:absolute lg:-top-48 lg:left-[250px]">
            <img src={Cursor} alt="cursor" />
          </div>
          <div className="md:absolute lg:-top-52 lg:left-[870px]">
            <img src={Message} alt="cursor" />
          </div>
        </div>
        {/* <div className="text-center text-white md:mt-4 text-lg">
          <p className="mx-[40px] md:my-[20px] md:mx-[200px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          
        </div> */}
        <div className="h-20 lg:h-[250px] md:h-[180px]"></div>
      </div>
    </>
  );
};

export default HeroSection;
