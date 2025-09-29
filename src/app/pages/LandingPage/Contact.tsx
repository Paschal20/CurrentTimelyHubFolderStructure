import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { PiWhatsappLogo, PiNoteLight } from "react-icons/pi";
import { useActiveSection } from "./ActiveSectionContext";
import { useInView } from "react-intersection-observer";

const Contact: React.FC = () => {
  const { activeSection } = useActiveSection();
  const isActive = activeSection === "contact";

  // For left card
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // For right card
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-around items-center py-6 lg:py-10 overflow-x-hidden"
    >
      <div className="relative mb-10 leading-10">
        <h1
          className={`font-inter font-bold text-[28px] md:text-[32px] lg:text-[36px] ${
            isActive ? "text-[#0d9165]" : "text-[#102844]"
          }`}
        >
          CONTACT
        </h1>
        {/* Animated underline */}
        <div
          className={`absolute left-0 h-[3px] bg-[#0d9165] transition-all duration-700 ease-out ${
            isActive ? "w-full" : "w-0"
          }`}
        ></div>
      </div>

      {/* Wrapper */}
      <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between gap-8">
        {/* Left Card */}
        <div
          ref={leftRef}
          className={`bg-white rounded-lg shadow-sm p-6 flex-1 transition duration-300 transform hover:scale-105 hover:shadow-lg ${
            leftInView
              ? "animate__animated animate__slideInLeft animate__slow"
              : ""
          }`}
        >
          {/* Email */}
          <div className="flex items-start gap-3 mb-6">
            <MdOutlineEmail className="text-[#0d9165] text-xl sm:text-2xl md:text-3xl" />
            <div>
              <h3 className="font-semibold text-[#0F161E] font-inter text-[16px] sm:text-[18px] md:text-[20px]">
                Email Us
              </h3>
              <p className="text-[#767278] font-inter text-[14px] sm:text-[15px] md:text-[16px]">
                omotolaniadele242@gmail.com
              </p>
              <p className="text-[#767278] font-inter text-[14px] sm:text-[15px] md:text-[16px]">
                We’ll respond within 24 hours.
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-3">
            <PiWhatsappLogo className="text-[#0d9165] text-xl sm:text-2xl md:text-3xl" />
            <div>
              <h3 className="font-semibold text-[#0F161E] font-inter text-[16px] sm:text-[18px] md:text-[20px]">
                Chat on WhatsApp
              </h3>
              <p className="text-[#767278] font-inter text-[14px] sm:text-[15px] md:text-[16px]">
                Quick replies during the day.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div
          ref={rightRef}
          className={`bg-white rounded-lg shadow-sm p-6 flex-1 transition duration-300 transform hover:scale-105 hover:shadow-lg ${
            rightInView
              ? "animate__animated animate__slideInRight custom-duration"
              : ""
          }`}
        >
          {/* Call */}
          <div className="flex items-start gap-3 mb-6">
            <BsTelephone className="text-[#0d9165] text-lg sm:text-xl md:text-2xl" />
            <div>
              <h3 className="font-semibold text-[#0F161E] font-inter text-[16px] sm:text-[18px] md:text-[20px]">
                Call Us
              </h3>
              <p className="text-[#767278] font-inter text-[14px] sm:text-[15px] md:text-[16px]">
                09026662785
              </p>
              <p className="text-[#767278] font-inter text-[14px] sm:text-[15px] md:text-[16px]">
                Available during the day.
              </p>
            </div>
          </div>

          {/* Feedback */}
          <div className="flex items-start gap-3">
            <PiNoteLight className="text-[#0d9165] text-xl sm:text-2xl md:text-3xl" />
            <div className="w-full">
              <h3 className="font-semibold text-[#0F161E] font-inter text-[16px] sm:text-[18px] md:text-[20px]">
                Send Feedback
              </h3>
              <p className="text-[#767278] font-inter text-[14px] sm:text-[15px] md:text-[16px] mb-2">
                Quick replies during the day.
              </p>

              {/* Feedback Form */}
              <div className="flex w-full gap-2">
                <input
                  type="text"
                  placeholder="write here...."
                  className="flex-1 border text-[#0d9165] rounded-md 
                px-2 md:px-2 lg:px-4
                py-1 md:py-1 lg:py-2.5
                text-[10px] md:text-[13px]
                outline-none"
                />
                <button
                  className="md:text-[18px] md:px-5 py-1 px-3 md:py-1 lg:py-2
              lg:px-9  rounded-md font-[400] text-[15px] cursor-pointer bg-[#0d9165] font-inter text-[white] 
              hover:rounded-[30px] hover:bg-white hover:text-[#0d9165] border hover:border-[#0d9165] 
              transition-all duration-150 ease-in-out "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
