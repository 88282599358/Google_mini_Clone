import React, { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import ProfileHover from "./ProfileHover";
import Profile from "../assets/profile.jpg";
import ProfileRing from "../assets/profile-ring.svg";
const ProfileIcon = () => {
  const [showComponent, setshowComponent] = useState(false);

  const handleClick = () => {
    console.log("handleClick called");
    setshowComponent(true);
  };

  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={25} color="#5f6368" />
      </span>

      <span
        className="h-10 w-10 relative flex justify-center items-center cursor-pointer"
        onClick={showComponent ? () => setshowComponent(false) : handleClick}
      >
        <img className="absolute" src={ProfileRing} alt="Profile Ring" />
        <span className="h-8 w-8 rounded-full overflow-hidden cursor-pointer">
          <img
            //  full means 100%
            className="h-full w-full object-cover"
            src={Profile}
            alt="Profile"
          />
        </span>
      </span>
      {showComponent && <ProfileHover />}
    </div>
  );
};

export default ProfileIcon;
