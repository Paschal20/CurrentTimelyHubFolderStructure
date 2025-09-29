import React from "react";
import AboutImage from "../../../assets/Frame 8600 (1).png";
import { useActiveSection } from "./ActiveSectionContext";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { activeSection } = useActiveSection();
  const isActive = activeSection === "about";

  // For image
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // For text
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="about"
      className="w-full flex flex-col justify-around items-center py-6 lg:py-10 overflow-x-hidden"
    >
      <div className="relative mb-10 leading-10">
        <h1
          className={`font-inter font-bold text-[28px] md:text-[32px] lg:text-[36px] ${
            isActive ? "text-[#0d9165]" : "text-[#102844]"
          }`}
        >
          ABOUT
        </h1>
        {/* Animated underline */}
        <div
          className={`absolute left-0 h-[3px] bg-[#0d9165] transition-all duration-700 ease-out ${
            isActive ? "w-full" : "w-0"
          }`}
        ></div>
      </div>

     
      <div className="w-[90%] bg-[#0d9165] rounded-t-[30px] flex flex-col md:flex-row justify-between items-center p-6 md:py-9 md:px-12 lg:py-9 gap-6 md:gap-10">
        {/* image */}
        <div
          ref={imgRef}
          className={`w-full md:w-[43%] md:h-[230px] lg:h-[380px] flex justify-center items-center ${
            imgInView
              ? "animate__animated animate__slideInLeft custom-duration"
              : ""
          }`}
        >
          <img
            src={AboutImage}
            alt="About"
            className="w-[80%] md:w-full max-w-[480px] h-[100%]"
          />
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className={`md:w-[47%] flex justify-center items-center ${
            textInView
              ? "animate__animated animate__slideInRight custom-duration"
              : ""
          }`}
        >
          <p className="text-white text-center md:text-center font-poppins font-normal text-[14px] md:text-[16px] lg:text-[22px] leading-6 md:leading-7 lg:leading-9">
            Whether you’re a student or a busy individual, our app helps you
            stay organized and stress-free. With all your materials in one
            place, smart reminders, and AI-powered support, you can manage tasks
            more easily, boost confidence, and achieve better results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
