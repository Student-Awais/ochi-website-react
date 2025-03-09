import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-zinc-900">
      <h1 className="font-['Neu'] text-[4.1vw] px-14 font-thin py-20 leading-none tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to{" "}
        <span className="underline">
          raise funds, sell prod­ucts, ex­plain com­plex ideas{" "}
        </span>
        , and
        <span className="underline"> hire great peo­ple</span>.
      </h1>
      <div className="border-t-[1.7px] border-[#c3d875] flex h-[30vw] mb-10  ">
        <div className="w-[50%]  ">
          <p className="px-14 py-4">What you can expect:</p>
        </div>
        <div className="w-[50%] flex ">
          <div className="flex flex-col w-[50%] gap-4  ">
            {[
              "We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.",
              "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.",
            ].map((items, index) => (
              <p key={index} className="px-3 py-4">
                {items}
              </p>
            ))}
          </div>
          <div
            className=" w-[50%]  h-[50%] flex
          flex-col px-20"
          >
            <p className="relative top-[80%]  mb-5">S:</p>
            {["Instagram", "Behance", "Facebook", "Linkedin"].map(
              (items, index) => (
                <a
                  key={index}
                  className=" flex flex-col  relative top-[80%]  underline decoration-slate-600 "
                >
                  {items}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="border-t-[1.7px] border-[#c3d875] w-full  h-[36vw] flex   ">
        <div className="w-1/2 px-12">
          <h1 className="text-[4.5vw]">Our approach:</h1>
          <button className="px-6 py-3 gap-5 uppercase bg-slate-800 rounded-full flex items-center justify-between text-white">
            READ MORE
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]  relative top-4 right-10">
          <img
            className="rounded-xl"
            src="/Homepage-Photo-1326x939.jpg "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
