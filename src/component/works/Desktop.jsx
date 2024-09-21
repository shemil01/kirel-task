import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

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

const Desktop = () => {
  const ref = useRef();

  return (
    <div className="bg-black pt-36">
      <div className="flex  flex-row mx-10 space-y-0 space-x-5 ">
        {/* first section */}
        <div className="flex flex-col  items-start">
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            className=" w-[600px] h-[450px] bg-[#121212] rounded-lg"
          ></motion.div>
          <div className="text-white space-y-5 mt-5">
            <div className="flex flex-wrap space-x-2">
              <span className="mt-5 border border-[#2D2D2E] text-white w-40 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                Development
              </span>
              <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                UI/UX
              </span>
              <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                Illustration
              </span>
            </div>
            <h1 className="text-2xl text-left">Roboto Landing page</h1>
          </div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            className=" w-[600px] h-[450px] bg-[#121212] mt-5 rounded-lg"
          ></motion.div>
          <div className="text-white space-y-5 mt-5">
            <div className="flex flex-wrap space-x-2">
              <span className="mt-5 border border-[#2D2D2E] text-white w-40 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                Development
              </span>
              <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                UI/UX
              </span>
              <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                Illustration
              </span>
            </div>
            <h1 className=" text-2xl text-left">Groteck Website</h1>
          </div>
        </div>

        {/* second section */}
        <div className="flex flex-col items-start">
          <div className="flex flex-col space-y-5 text-white text-left">
            <h1>• Featured Works</h1>
            <p className="text-2xl">
              Take a look at <br />
              our projects
            </p>
          </div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            className="w-[600px] h-[450px] mt-5 bg-[#121212] rounded-lg relative"
          >
            <span className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-transparent border border-[#2D2D2E] text-white px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
              <p>View project</p>
              <MdArrowOutward className="ml-2" />
            </span>
          </motion.div>

          <div className="text-white space-y-5 mt-5">
            <div className="flex flex-wrap space-x-2">
              <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                UI/UX
              </span>
              <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                Illustration
              </span>
            </div>
            <h1 className="text-2xl text-left">Poppin App Design</h1>
          </div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            className="w-[600px] h-[450px] bg-[#121212] mt-5 rounded-lg"
          ></motion.div>
          <div className="text-white space-y-5 mt-5">
            <div className="flex flex-wrap space-x-2">
              <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                Branding
              </span>
              <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                UI/UX
              </span>
            </div>
            <h1 className="text-2xl text-left">Helvatica Branding</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
