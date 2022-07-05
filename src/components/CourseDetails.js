import React from "react";
import courseImg from "./../../src/images/courseImg.webp";
import CourseActionBar from "./CourseActionBar";
import QuestionIcon from "./icons/QuestionIcon";
import InstructorProfile from "./InstructorProfile";

const CourseDetails = () => {
  return (
    <div className="max-w-[1120px] mx-auto px-[1em]">
      <div className="pt-[1em] md:pb-[3em] pb-[1em]">
        <h1 className="md:text-[40px] text-4xl leading-[1.2] tracking-[-0.01em] font-bold">
          Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh,
          Matisse, &amp; More
        </h1>
        <span className="flex items-center gap-[0.5em] mt-1 text-gray leading-none font-medium">
          Multi-Day Course <QuestionIcon />
        </span>
      </div>
      <div className="grid md:grid-cols-2 md:gap-[2em] gap-0">
        <div className="flex flex-col justify-between">
          <div>
            <p className="">
              In this 5 day class we will explore artists Monet, Matisse, Van
              Gogh, among others and then recreate paintings using crayon and
              watercolor. Students will have fun learning about the artists &
              creating their own art inspired by their work.{" "}
            </p>
            <InstructorProfile className="md:block hidden" />
          </div>
          <CourseActionBar />
          <div className="md:hidden block">
            <img src={courseImg} alt="" className="block w-full" />
          </div>
        </div>
        <div className="md:block hidden">
          <img src={courseImg} alt="" className="block w-full" />
        </div>
        <InstructorProfile className="md:hidden block" />
      </div>
      <div className="min-h-screen"></div>
    </div>
  );
};

export default CourseDetails;
