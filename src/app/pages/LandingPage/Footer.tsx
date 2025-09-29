import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import FooterImage from "../../../assets/Frame 8687 (2).png"

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 130,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full bg-[#0d9165] text-white pt-10 lg:px-16 md:px-[35px] px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-start gap-4 md:w-1/3">
          <div className="flex items-center gap-2">
            <img
              src={FooterImage}
              alt="Timely Hub Logo"
              className="lg:w-[200px] w-[150px] cursor-pointer"
              onClick={() => scrollToSection("home")}
            />
          </div>
          <p className="lg:text-[30px] text-[22px] font-semibold font-inter lg:leading-10 leading-8">
            Need help with <br /> anything?
          </p>
          <div className="flex gap-3 mt-2">
            <div className="w-8 h-8 flex items-center justify-center bg-white text-[#0d9165] rounded-sm hover:bg-gray-200 transition cursor-pointer">
              <FaTwitter size={18} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-white text-[#0d9165] rounded-sm hover:bg-gray-200 transition cursor-pointer">
              <FaLinkedin size={18} />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:gap-16 md:w-2/3">
          <div className="font-inter">
            <h3 className="font-medium  text-[18px] mb-3">Home</h3>
            <ul className="space-y-2 text-sm text-[#f0efef]">
              <li
                onClick={() => scrollToSection("about")}
                className="hover:underline cursor-pointer"
              >
                About
              </li>
              <li
                onClick={() => scrollToSection("features")}
                className="hover:underline cursor-pointer"
              >
                Features
              </li>
              <li
                onClick={() => scrollToSection("how-it-works")}
                className="hover:underline cursor-pointer"
              >
                How it works
              </li>
              <li
                onClick={() => scrollToSection("benefits")}
                className="hover:underline cursor-pointer"
              >
                Student Benefits
              </li>
            </ul>
          </div>

          <div className="font-inter">
            <h3 className="font-medium text-[18px] mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-[#f0efef]">
              <li className="hover:underline cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:underline cursor-pointer">
                Privacy & Policy
              </li>
              <li
                onClick={() => scrollToSection("contact")}
                className="hover:underline cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>

          <div className="font-inter">
            <h3 className="font-medium text-[18px] mb-3">Help</h3>
            <ul className="space-y-2 text-sm text-[#f0efef]">
              <li className="hover:underline cursor-pointer">FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 py-4">
        <p className="text-center text-sm text-white/80">
          © {new Date().getFullYear()} Timely Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
