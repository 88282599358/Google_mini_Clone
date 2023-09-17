import React from "react";
import ProfileIcon from "./ProfileIcon";  
const HomeHeader = () => {
  return (
    <>
      <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
        <div className="flex gap-4"> 
            {/* text-black/[0.07]:- means text will black and opacity will 0.07 and text-[14px]:- means text font size is 14px  */}
            {/* text-blue-800: Blue text color with a shade of 500. */}
            <span className="text-black/[0.87] text-[14px] text-blue-500">Gmail</span>
            <span className="text-black/[0.87] text-[14px] text-blue-500">Images</span>
        </div>
        <ProfileIcon />
      </header>
    </>
  );
};

export default HomeHeader;
