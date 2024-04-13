// import React from 'react'
import Twitter from "../assets/Footer/Twitter.png";
import Insta from "../assets/Footer/Insta.png";
import Pintrest from "../assets/Footer/Pintrest.png";
import LikedIn from "../assets/Footer/LinkedIn.png";
import TikTok from "../assets/Footer/TikTok.png";
import Youtube from "../assets/Footer/YouTube.png";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-center text-[#808080] ">
        <div className="flex md:justify-between flex-col ml-5">
          <p className="text-sm">
            @ 2024 Your Company, Inc. All rights reserved
          </p>
          <div className="flex justify-center gap-4 mt-2 ">
            <img src={Twitter} alt="" />
            <img src={Insta} alt="" />
            <img src={Pintrest} alt="" />
            <img src={LikedIn} alt="" />
            <img src={TikTok} alt="" />
            <img src={Youtube} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
