import React from "react";
import courseImg from "./../../src/images/courseImg.webp";
import courseInstructorImg from "./../../src/images/courseInstructor.jpg";
import HeartIcon from "./icons/HeartIcon";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import RatingIcon from "./icons/RatingIcon";
import ShareIcon from "./icons/ShareIcon";

const CourseDetails = () => {
  return (
    <div className="max-w-[1120px] mx-auto">
      <div className="pt-[1em] pb-[3em]">
        <h1 className="text-[40px] leading-[1.2] tracking-[-0.01em] font-ginto-bold">
          Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh,
          Matisse, &amp; More
        </h1>
        <span className="flex items-center gap-[0.5em]  text-gray leading-none font-ginto-medium">
          Multi-Day Course{" "}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="question-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[1em] h-[1em]"
          >
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
            ></path>
          </svg>
        </span>
      </div>
      <div className="grid grid-cols-2 gap-[2em]">
        <div className="flex flex-col justify-between">
          <div>
            <p className="">
              In this 5 day class we will explore artists Monet, Matisse, Van
              Gogh, among others and then recreate paintings using crayon and
              watercolor. Students will have fun learning about the artists &
              creating their own art inspired by their work.{" "}
            </p>
            <div>
              <a href="/" className="flex items-center gap-2 my-[1em]">
                <img
                  src={courseInstructorImg}
                  alt=""
                  className="h-[30px] rounded-full"
                />
                <span className=" text-primary leading-[27px]">
                  Kimberly R Moseler
                </span>
              </a>
              <div className="">
                <div className="flex items-center gap-2 mt-[0.5em]">
                  <div className="flex">
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
                  <div className="flex">
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
            </div>
            <div className="mt-[0.5em]">Completed by 21 learners</div>
          </div>
          <div className="flex items-center gap-[1em]">
            <button className="bg-primary hover:bg-primaryDark transition-all shadow-sm shadow-primary text-white py-3 px-7 flex items-center gap-2 rounded-full font-ginto-medium text-lg leading-none">
              See Class Schedule
              <LeftArrowIcon className="h-[18px]"></LeftArrowIcon>
            </button>
            <div className="flex items-center">
              <button className="flex items-center p-[18px] gap-[6px] font-ginto-medium text-primaryDark hover:underline transition-all">
                <HeartIcon />
                Save
              </button>
              <button className="flex items-center p-[18px] gap-[6px] font-ginto-medium text-primaryDark hover:underline transition-all">
                <ShareIcon />
                Share
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={courseImg} alt="" className="block w-full" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
