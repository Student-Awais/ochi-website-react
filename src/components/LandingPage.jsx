import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="text mt-32">
        {["We Create", "eye-opening", "presentations"].map((items, index) => (
          <div key={index} className="masker font-['Found'] px-14 ">
            <div className="w-fit flex items-end overflow-hidden gap-[5.5px]">
              {index === 1 ? (
                <div className="w-32 h-[88px] relative top-[7px] rounded-sm bg-white mr-2"></div>
              ) : null}
              <h1 className="uppercase text-9xl leading-[0.75]">{items}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-[75px] flex justify-between items-center px-10 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <p
            key={index}
            className="text-md font-thin tracking-tight leading-none"
          >
            {items}
          </p>
        ))}
        <div className="start py-4 flex gap-2 items-center">
          <div className="px-3 py-1 border-[1px] rounded-full text-sm border-zinc-400  ">
            START THE PROJECT
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-zinc-400 p-2">
            <GoArrowUpRight size={20} color="white" className="stroke-[2]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
