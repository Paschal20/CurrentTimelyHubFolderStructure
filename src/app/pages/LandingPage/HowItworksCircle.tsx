import React from 'react'

interface HowItWorksProps {
  title: string;
  description: string;
}

const HowItWorksCircle: React.FC<HowItWorksProps> = ({title, description}) => {
  return (
    <div className="w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[150px] rounded-full flex flex-col text-center items-center justify-center border-3 border-[#0d9165] bg-white">
      <h3 className="font-inter font-semibold md:text-[15px] lg:text-[18px] text-[#102844]">
        {title}
      </h3>
      <p className="font-inter text-[15px] md:text-[14px] lg:text-[16px] text-[#767278] leading-6 w-[90%]">
        {description}
      </p>
    </div>
  );
};

export default HowItWorksCircle