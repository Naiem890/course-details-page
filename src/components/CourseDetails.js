import React, { useEffect, useState } from "react";
import CourseActionBar from "./CourseActionBar";
import Loading from "./icons/Loading";
import QuestionIcon from "./icons/QuestionIcon";
import InstructorProfile from "./InstructorProfile";

const CourseDetails = () => {
  const [courseData, setCourseData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-[1120px] mx-auto px-[1em] my-5">
      <div className="pt-[1em] md:pb-[3em] pb-[1em]">
        <h1 className="md:text-[40px] text-4xl leading-[1.2] tracking-[-0.01em] font-bold">
          {courseData.title}
        </h1>
        <span className="flex items-center gap-[0.5em] mt-1 text-gray leading-none font-medium">
          {courseData.type} <QuestionIcon />
        </span>
      </div>
      <div className="grid md:grid-cols-2 md:gap-[2em] gap-0">
        <div className="flex flex-col justify-between">
          <div>
            <p>{courseData.description} </p>
            <InstructorProfile
              className="md:block hidden"
              instructor={courseData.instructor}
            />
          </div>
          <CourseActionBar />
          <div className="md:hidden block">
            <img src={courseData.image} alt="" className="block w-full" />
          </div>
        </div>
        <div className="md:block hidden">
          <img src={courseData.image} alt="" className="block w-full" />
        </div>

        <InstructorProfile
          className="md:hidden block"
          instructor={courseData.instructor}
        />
      </div>
    </div>
  );
};

export default CourseDetails;
