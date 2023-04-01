import React from "react";

const MainTitle = ({ title, subtitle }) => {
    return (
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">{title}</div>
        <div className="text-md md:text-xl">{subtitle}</div>
      </div>
    );
};

export default MainTitle;