import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { PiCopyleftFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full px-5 bg-black py-32 min-h-[40vh] text-white">
      <div className="border-b border-white flex flex-col gap-4 items-center justify-center py-7">
        <p className="text-[#b6b4b4] font-bold font-serif text-2xl md:text-4xl">
          Have a project in mind
        </p>
        <h2 className="font-bold font-serif text-5xl py-7">
          Let's Have a Talk
        </h2>
        <BsArrowUpRightCircleFill className="w-10 h-10 md:h-[100px] md:w-[100px]" />
      </div>
      <div className="px-5 flex justify-between py-7">
        <p className="flex gap-2 font-bold font-serif text-l md:text-xl">
          Copyright <PiCopyleftFill className="" /> 2022 Artians. All Rights
          Reserved.
        </p>
        <div className="flex gap-5 font-bold font-serif text-l md:text-xl">
          <p>Term of Use</p>
          <p>PrivacyPolicy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
