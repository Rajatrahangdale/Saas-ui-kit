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
      <div className="bg-black text-center text-[#808080] border-t border-[#808080]">
        <div className="flex md:justify-between md:flex-row flex-col ml-5 my-4 mx-2 gap-2">
          <p className="text-sm">
            @ 2024 Your Company, Inc. All rights reserved
          </p>
          <div className="flex justify-center gap-2">
            <img src={Twitter} alt="" />
            <img src={Insta} alt="" />
            <img src={Pintrest} alt="" />
            <img src={LikedIn} alt="" />
            <img src={TikTok} alt="" />
            <img src={Youtube} alt="" />
          </div>
        </div>
        <div className="h-5"></div>
      </div>
    </>
  );
};

export default Footer;
