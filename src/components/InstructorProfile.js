import React from "react";
import RatingIcon from "./icons/RatingIcon";
import courseInstructorImg from "./../../src/images/courseInstructor.jpg";

const InstructorProfile = (props) => {
  return (
    <div className={props.className}>
      <a href="/" className="flex items-center gap-2 my-[1em]">
        <img
          src={courseInstructorImg}
          alt=""
          className="h-[30px] rounded-full"
        />
        <span className=" text-primary leading-[27px]">Kimberly R Moseler</span>
      </a>
      <div className="">
        <div className="flex items-center gap-2 mt-[0.5em]">
          <div className="flex flex-wrap">
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
          </div>
          <span className="text-sm text-gray leading-normal">
            469 total reviews for this teacher
          </span>
        </div>
        <div className="flex items-center gap-2 mt-[0.5em]">
          <div className="flex flex-wrap">
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
          </div>
          <span className="text-sm text-gray leading-normal">
            5 reviews for this class
          </span>
        </div>
      </div>
      <div className="mt-[0.5em]">Completed by 21 learners</div>
    </div>
  );
};

export default InstructorProfile;
