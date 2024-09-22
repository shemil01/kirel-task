import { MdArrowOutward } from "react-icons/md";
import {  motion } from "framer-motion";
import { useRef } from "react";

//animation
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

const Services = () => {
  const ref = useRef();
  return (
    <section className="bg-black text-white py-16 px-8 overflow-hidden">
      <div className="max-w-8xl rounded-lg mx-auto bg-[#151515] ">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="mb-12 flex md:flex-wrap flex-col pt-10 ml-10 md:space-x-28 "
        >
          <h2 className="text-lg font-light tracking-wide mb-4">
            • Our Services
          </h2>

          <p className="text-2xl font-semibold leading-relaxed max-w-2xl">
            We are a close-knit team of experts <br /> dedicated to crafting
            memorable and <br /> emotionally engaging websites, digital <br />
            experiences, and native apps.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Service Card 1 */}
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="hover:bg-[#4034EB] rounded-xl p-6 relative group mx-5 my-5"
          >
            <div className="absolute top-4 right-4 bg-transparent border border-white rounded-full p-2 transition-all ">
              <MdArrowOutward />
            </div>
            <h3 className="text-xl font-bold mb-4 ">BRAND IDENTITY</h3>
            <p className="text-sm font-light">
              We provide digital solutions such as Website <br /> Design, Mobile
              App Design, Landing <br /> Page design, Illustration, Animation,
              etc. <br /> that increase company values.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="hover:bg-[#4034EB] rounded-xl p-6 relative group mx-5 my-5"
          >
            <div className="absolute top-4 right-4 bg-transparent border border-white rounded-full p-2 transition-all ">
              <MdArrowOutward />
            </div>
            <h3 className="text-xl font-bold mb-4">UX/UI DESIGN</h3>
            <p className="text-sm font-light">
              We provide digital solutions such as Website <br /> Design, Mobile
              App Design, Landing <br /> Page design, Illustration, Animation,
              etc. <br /> that increase company values.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="hover:bg-[#4034EB] rounded-xl p-6 relative group mx-5 my-5"
          >
            <div className="absolute top-4 right-4 bg-transparent border border-white rounded-full p-2 transition-all ">
              <MdArrowOutward />
            </div>
            <h3 className="text-xl font-bold mb-4">WEBFLOW DEVELOPER</h3>
            <p className="text-sm font-light">
              We provide digital solutions such as Website <br /> Design, Mobile
              App Design, Landing <br /> Page design, Illustration, Animation,
              etc. <br /> that increase company values.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
