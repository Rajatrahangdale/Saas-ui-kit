// import React from "react";

const SectionFive = () => {
  return (
    <>
      <div className="bg-black text-white h-auto">
        <div className="lg:px-[400px] py-10 w-auto mx-auto ">
          <h2 className="text-center text-2xl lg:text-4xl font-bold">
            Get instant access
          </h2>
          <p className="px-8 text-center font-thin mt-2">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div className="flex justify-center flex-col mx-10 mt-4">
            <input
              type="email"
              placeholder="name@email.com"
              name=""
              id=""
              className="rounded-lg bg-gray-700 text-black py-1"
            />
            <button className="text-black bg-white mt-2 rounded-lg py-1">
              Get Access
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
