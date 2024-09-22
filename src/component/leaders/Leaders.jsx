import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRef } from "react";

//animation
const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, 
      ease: "easeOut", 
      staggerChildren: 0.2,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const Leaders = () => {
  const ref = useRef();
  return (
    <section className="bg-black text-white py-20 overflow-hidden ">
      {/* give animation this div */}
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className="container pl-10 md:mx-32 px-4"
      >
        <div className="text-left">
          <p className="text-sm text-gray-400">• Our leader</p>
        </div>

        {/* laptop-l is customized size */}
        <div className="text-left laptop-l:ml-36">
          <p>
            Each product is crafted with passion and <br /> dedication. Meet our
            leader!
          </p>

          <div className="space-y-5 mt-10">
            {/* First row */}
            <div className="flex flex-wrap justify-start gap-3">
              <div className="w-[270px] h-20 border border-[#39393A] rounded-full"></div>
              <div className="w-[250px] h-20 border border-[#39393A] rounded-full flex overflow-hidden">
                <div className="bg-[#332ABC] w-1/2 h-full rounded-l-full"></div>
                <div className="bg-[#4034EB] w-1/2 h-full rounded-r-full flex flex-col justify-center  space-y-1">
                  <h1 className="text-sm font-bold">Cody Fisher</h1>
                  <p className="text-xs text-gray-300">Manager</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#7971F1]">
                      <FaXTwitter className="text-sm" />
                    </span>
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#7971F1]">
                      <FaInstagram className="text-sm" />
                    </span>
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#7971F1]">
                      <FaLinkedinIn className="text-sm" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[270px] h-20 border border-[#39393A] rounded-full"></div>
            </div>

            {/* Second row */}
            <div className="flex flex-wrap justify-start gap-3">
              <div className="w-[320px] h-20 border border-[#39393A] rounded-full"></div>
              <div className="w-[250px] h-20 border border-[#39393A] rounded-full flex overflow-hidden">
                <div className="bg-[#111111] w-1/2 h-full rounded-l-full"></div>
                <div className="bg-[#151515] w-1/2 h-full rounded-r-full flex flex-col justify-center  space-y-1">
                  <h1 className="text-sm font-bold">Kristin Watson</h1>
                  <p className="text-xs text-gray-300">Manager</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#5B5B5B]">
                      <FaXTwitter className="text-sm" />
                    </span>
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#5B5B5B]">
                      <FaInstagram className="text-sm" />
                    </span>
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#5B5B5B]">
                      <FaLinkedinIn className="text-sm" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[220px] h-20 border border-[#39393A] rounded-full"></div>
            </div>

            {/* Third row */}
            <div className="flex flex-wrap justify-start gap-3">
              <div className="w-[220px] h-20 border border-[#39393A] rounded-full"></div>
              <div className="w-[250px] h-20 border border-[#39393A] rounded-full flex overflow-hidden">
                <div className="bg-[#111111] w-1/2 h-full rounded-l-full"></div>
                <div className="bg-[#151515] w-1/2 h-full rounded-r-full flex flex-col justify-center  space-y-1">
                  <h1 className="text-sm font-bold">Leslie Alexander</h1>
                  <p className="text-xs text-gray-300">Design Leader</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#5B5B5B]">
                      <FaXTwitter className="text-sm" />
                    </span>
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#5B5B5B]">
                      <FaInstagram className="text-sm" />
                    </span>
                    <span className="rounded-full w-6 h-6 flex justify-center items-center border border-[#5B5B5B]">
                      <FaLinkedinIn className="text-sm" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[320px] h-20 border border-[#39393A] rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Leaders;
