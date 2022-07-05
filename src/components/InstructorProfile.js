import React from "react";
import RatingIcon from "./icons/RatingIcon";

const InstructorProfile = (props) => {
  return (
    <div className={props.className}>
      <a href="/" className="flex items-center gap-2 my-[1em]">
        <img
          src={props?.instructor?.image}
          alt=""
          className="h-[30px] rounded-full"
        />
        <span className=" text-primary leading-[27px]">
          {props?.instructor?.name}
        </span>
      </a>
      <div>
        <div className="flex items-center gap-2 mt-[0.5em]">
          <div className="flex flex-wrap">
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
          </div>
          <span className="text-sm text-gray leading-normal">
            {props?.instructor?.review?.total} total reviews for this teacher
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
            {props?.instructor?.review?.thisClass} reviews for this class
          </span>
        </div>
      </div>
      <div className="mt-[0.5em]">
        Completed by {props?.instructor?.completedBy} learners
      </div>
    </div>
  );
};

export default InstructorProfile;
