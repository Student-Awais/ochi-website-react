import React from "react";
import { motion } from "framer-motion";
const Marqueee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px]  flex gap-10 overflow-hidden whitespace-nowrap font-['Found'] ">
        <motion.h1
          // initial={{ x: 0 }}
          // animate={{ x: "-100%" }}
          // transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[28vw] -mt-40 -mb-[120px]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          // initial={{ x: 0 }}
          // animate={{ x: "-100%" }}
          // transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[28vw] -mt-40 -mb-[120px]"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marqueee;
