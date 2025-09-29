
import React from "react";
import Button from "../../../Component/Button";
import HeroImage from "../../../assets/Group 1.png";

const Hero: React.FC = () => {
  return (
    <div className="w-full md:h-[360px] lg:h-[480px] h-auto lg:mt-[160px] md:mt-[100px] mt-[120px] flex justify-center items-center py-5">
      <div className="w-[90%] md:h-[440px] h-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col lg:gap-6 md:gap-2 gap-5 max-w-[650px] text-center md:text-left">
          <h1 className="text-[#102844] font-inter font-bold lg:text-[48px] text-[25px] md:text-[30px] leading-snug">
            Organize Your Study.
            <br />
            Achieve More.
          </h1>
          <p className="text-[#767278] font-poppins font-normal  text-[16px] md:text-[15px] lg:text-[20px] lg:leading-8 leading-7">
            Stay on top of your study schedule with ease.{" "}
            <br className="lg:flex hidden" /> Organize and manage all your
            learning materials in one place. <br className="lg:flex hidden" />
            Boost your focus and productivity with smart tools built for
            students. <br className="lg:flex hidden" />
            Learn better, stay consistent, and achieve more every day.
          </p>

          <div className="flex justify-center mt-4 md:justify-start md:mt-2">
            <Button text="Get Started" />
          </div>
        </div>

        <img
          src={HeroImage}
          alt="Hero"
          className="w-[200px] hidden md:flex md:w-[300px] lg:w-[420px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
