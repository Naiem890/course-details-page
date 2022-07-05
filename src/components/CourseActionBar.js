import React from "react";
import HeartIcon from "./icons/HeartIcon";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import ShareIcon from "./icons/ShareIcon";

const CourseActionBar = (props) => {
  return (
    <div className="flex items-center gap-2 lg:gap-[1em] py-[1em] md:-mb-3 flex-wrap">
      <button className="bg-primary hover:bg-primaryDark transition-all shadow-sm shadow-primary text-white py-3 px-7 flex flex-wrap items-center gap-2 rounded-full fontfont-mediummedium text-lg leading-none">
        See Class Schedule
        <LeftArrowIcon className="h-[18px]"></LeftArrowIcon>
      </button>
      <div className="flex items-center">
        <button className="flex items-center p-[18px] gap-[6px] font-medium text-primaryDark hover:underline transition-all">
          <HeartIcon />
          <span className="hidden md:inline">Save</span>
        </button>
        <button className="flex items-center p-[18px] gap-[6px] font-medium text-primaryDark hover:underline transition-all">
          <ShareIcon />
          <span className="hidden md:inline">Share</span>
        </button>
      </div>
    </div>
  );
};

export default CourseActionBar;
