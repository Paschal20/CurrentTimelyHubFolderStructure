import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../../assets/Frame 8687 (1).png";
import Button from "../../../Component/Button";
import { useActiveSection } from "./ActiveSectionContext";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection(); // Use context only

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 125, // offset for header
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsOpen(false); // close sidebar if open
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const sections = [
        "home",
        "about",
        "features",
        "how-it-works",
        "benefits",
        "contact",
      ];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]); // Add setActiveSection to dependencies

  return (
    <header className="w-full lg:h-[130px] h-[90px] fixed top-0 left-0 z-50 flex justify-center items-end bg-[#f5f7f9]">
      <div className="w-[90%] lg:h-[80px] md:h-[70px] h-[50px] bg-white shadow-[0px_3px_5px_rgba(0,0,0,0.04)] rounded-[50px] flex justify-between items-center px-3 lg:px-5">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="lg:w-[185px] w-[110px] h-auto cursor-pointer"
          onClick={() => scrollToSection("home")}
        />

        {/* Desktop Menu */}
        <ul
          className="
          hidden md:flex justify-between font-poppins text-[#3f3e3f] font-normal
          md:w-[380px] md:text-[14px]
          lg:w-[500px] lg:text-[16px]
        "
        >
          <li
            onClick={() => scrollToSection("home")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "home" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "about" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("features")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "features" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            Features
          </li>
          <li
            onClick={() => scrollToSection("how-it-works")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "how-it-works"
                ? "text-[#0d9165] font-semibold"
                : ""
            }`}
          >
            How It Works
          </li>
          <li
            onClick={() => scrollToSection("benefits")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "benefits" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            Benefits
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "contact" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            Contact
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button text="Login" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <FiMenu
            className="text-[#0d9165] text-3xl cursor-pointer transition-transform duration-300"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-white shadow-lg rounded-l-2xl transition-transform duration-500 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <FiX
            className="text-[#0d9165] text-3xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center gap-6 py-6 font-poppins text-[#3f3e3f] text-[16px] font-[400]">
          <li
            onClick={() => scrollToSection("home")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "home" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "about" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("features")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "features" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            Features
          </li>
          <li
            onClick={() => scrollToSection("how-it-works")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "how-it-works"
                ? "text-[#0d9165] font-semibold"
                : ""
            }`}
          >
            How It Works
          </li>
          <li
            onClick={() => scrollToSection("benefits")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "benefits" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            Benefits
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className={`hover:text-[#0d9165] transition-colors duration-300 cursor-pointer ${
              activeSection === "contact" ? "text-[#0d9165] font-semibold" : ""
            }`}
          >
            Contact
          </li>
          <Button text="Login" className="" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
