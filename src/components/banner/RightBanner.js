import React from 'react';
import { bannerImg } from "../../assets/index";
import logoImg from "../../assets/images/venu.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="rounded-full overflow-hidden w-[300px] h-[300px] lgl:w-[500px] lgl:h-[680px] z-10">
        <img
          className="w-full h-full object-cover"
          src={logoImg}
          alt="bannerImg"
        />
      </div>
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
};

export default RightBanner;
