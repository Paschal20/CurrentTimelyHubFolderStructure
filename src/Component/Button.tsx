import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} md:text-[18px] md:px-5 py-1.5 px-7 md:py-1 lg:py-2
              lg:px-9  rounded-md font-[400] text-[20px] cursor-pointer bg-[#0d9165] font-inter text-[white] 
        hover:rounded-[30px] hover:bg-white hover:text-[#0d9165] border hover:border-[#0d9165] 
        transition-all duration-150 ease-in-out `}
    >
      {text}
    </button>
  );
};

export default Button;
