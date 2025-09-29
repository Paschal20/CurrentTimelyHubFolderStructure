import React from "react";
import HowItWorksCircle from "./HowItworksCircle";
import Button from "../../../Component/Button";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongDown,
} from "react-icons/hi2";
import { useActiveSection } from "./ActiveSectionContext";
import { useInView } from "react-intersection-observer";

const HowItWorks: React.FC = () => {
  const { activeSection } = useActiveSection();
  const isActive = activeSection === "how-it-works";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="how-it-works"
      className="w-full flex flex-col justify-around items-center py-6 lg:py-10 gap-10"
    >
      <div className="relative mb-10 leading-10">
        <h1
          className={`font-inter font-bold text-[28px] md:text-[32px] lg:text-[36px] ${
            isActive ? "text-[#0d9165]" : "text-[#102844]"
          }`}
        >
          HOW IT WORKS
        </h1>
        {/* Animated underline that expands from left to right */}
        <div
          className={`absolute left-0 h-[3px] bg-[#0d9165] transition-all duration-700 ease-out ${
            isActive ? "w-full" : "w-0"
          }`}
        ></div>
      </div>

      <div
        ref={ref}
        className={`w-[90%] lg:w-[70%] flex flex-col md:flex-row justify-between items-center gap-6 ${
          inView ? "animate__animated animate__slideInUp custom-duration" : ""
        }`}
      >
        <HowItWorksCircle
          title="Sign Up"
          description="Create your account in seconds"
        />

        <HiOutlineArrowLongDown
          className="block md:hidden"
          size={50}
          color="#767278"
        />
        <HiOutlineArrowLongRight
          className="hidden md:block"
          size={70}
          color="#767278"
        />

        {/* Step 2 */}
        <HowItWorksCircle
          title="Set Up"
          description="Add your timetable, upload notes, set reminders."
        />

        <HiOutlineArrowLongDown
          className="block md:hidden"
          size={50}
          color="#767278"
        />
        <HiOutlineArrowLongRight
          className="hidden md:block"
          size={70}
          color="#767278"
        />

        <HowItWorksCircle
          title="Start Learning"
          description="Get AI help and take quizzes to stay sharp"
        />
      </div>

      <Button text="Get Started" />
    </div>
  );
};

export default HowItWorks;
