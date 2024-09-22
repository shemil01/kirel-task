import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";


// animation
const itemVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};
const variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const Mobile = () => {
  const ref = useRef();
  return (
    <div className="bg-black pt-20 pl-10 overflow-hidden">
      <div>
        <div className="flex flex-col  space-y-5 text-white text-left">
          <h1>• Featured Works</h1>
          <p className="text-2xl">
            Take a look at <br />
            our projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1  space-y-10">
          {/* section 1 */}
          <div>
            <motion.div
              ref={ref}
              variants={variants}
              initial="initial"
              whileInView="animate"
              className=" w-[300px] h-[250px]  bg-[#121212] mt-5 rounded-lg"
            ></motion.div>
            <div className="text-white  ">
              <motion.div
                ref={ref}
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                className="flex flex-wrap space-x-2"
              >
                <span className="mt-5 border border-[#2D2D2E] text-white w-40 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  Development
                </span>
                <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  UI/UX
                </span>
                <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  Illustration
                </span>
              </motion.div>
              <h1 className="text-2xl text-left">Roboto Landing page</h1>
            </div>
          </div>
          {/* secion 2 */}
          <div className="md:pt-24">
            <motion.div
              ref={ref}
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="w-[300px] h-[250px] bg-[#121212] mt-5 rounded-lg relative flex items-center justify-end pr-8"
            >
              <span className="bg-transparent border border-[#2D2D2E] text-white px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                <p>View project</p>
                <MdArrowOutward className="ml-2" />
              </span>
            </motion.div>
            <div className="text-white">
              <motion.div
                ref={ref}
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                className="flex flex-wrap space-x-2"
              >
                <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  UI/UX
                </span>
                <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  Illustration
                </span>
              </motion.div>
              <h1 className="text-2xl text-left">Poppin App Design</h1>
            </div>
          </div>

          {/* section 3 */}
          <div>
            <motion.div
              ref={ref}
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="w-[300px] h-[250px]  bg-[#121212] mt-5 rounded-lg"
            ></motion.div>
            <div className="text-white ">
              <motion.div
                ref={ref}
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                className="flex flex-wrap space-x-2"
              >
                <span className="mt-5 border border-[#2D2D2E] text-white w-40 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  Development
                </span>
                <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  UI/UX
                </span>
                <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  Illustration
                </span>
              </motion.div>
              <h1 className=" text-2xl text-left">Groteck Website</h1>
            </div>
          </div>

          {/* section 4 */}

          <div className="md:pt-24">
            <motion.div
              ref={ref}
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="w-[300px] h-[250px]  bg-[#121212] mt-5 rounded-lg"
            ></motion.div>
            <div className="text-white ">
              <motion.div
                ref={ref}
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                className="flex flex-wrap space-x-2"
              >
                <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  Branding
                </span>
                <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                  UI/UX
                </span>
              </motion.div>
              <h1 className="text-2xl text-left">Helvatica Branding</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
