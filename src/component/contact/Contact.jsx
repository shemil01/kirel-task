import { FaDribbble, FaInstagram, FaPhoneAlt, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tw4p6e8", "template_2x2grrc", formRef.current, {
        publicKey: "tCoR5hwF8CIL4t2pG",
      })
      .then(
        (result) => {
          alert("Message sending successfull");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="bg-black pb-16 pt-20 overflow-hidden">
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-32 text-white mx-10"
      >
        <div>
          <h1 className="text-4xl">
            Feel free to connect <br /> with us!
          </h1>
          <div className="flex space-x-2 mt-4">
            <span className="rounded-full w-8 h-8 flex justify-center items-center border border-[#1E1E1F]">
              <FaXTwitter />
            </span>
            <span className="rounded-full w-8 h-8 flex justify-center items-center border border-[#1E1E1F]">
              <FaInstagram />
            </span>
            <span className="rounded-full w-8 h-8 flex justify-center items-center border border-[#1E1E1F]">
              <FaDribbble />
            </span>
            <span className="rounded-full w-8 h-8 flex justify-center items-center border border-[#1E1E1F]">
              <FaBehance />
            </span>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex space-x-5">
              <FaPhoneAlt /> <span>0972663633</span>
            </div>
            <div className="flex space-x-5">
              <IoMdMail /> <span> hello@wefo.com</span>
            </div>
          </div>
        </div>

        <div>
          <form className="w-[400px]" ref={formRef} onSubmit={sendEmail}>
            <div className="flex flex-col w-full">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border-b-[3px] border-[#2D2D2E] focus:outline-none focus:border-blue-500 pb-2 placeholder:text-[#7C7C7C] w-full"
              />
            </div>

            <div className="flex flex-col w-full mt-4">
              <label>Email</label>
              <input
                type="text"
                placeholder="Your email address"
                className="bg-transparent border-b-[3px] border-[#2D2D2E] focus:outline-none focus:border-blue-500 pb-2 placeholder:text-[#7C7C7C] w-full"
              />
            </div>

            <div className="flex flex-col w-full mt-4">
              <label>Message</label>
              <textarea
                type="text"
                placeholder="Write your message here..."
                className="bg-transparent w-full border-none resize-none placeholder:text-[#7C7C7C] focus:outline-none"
              />
              <hr className="w-full border-t-[3px] border-[#2D2D2E] opacity-35 mt-2" />
            </div>
          </form>

          <span className="bg-transparent border w-40 border-[#2D2D2E] text-white px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between mt-8">
            <p>Send</p>
            <MdArrowOutward className="mr-2" />
          </span>
        </div>
      </motion.div>
      <footer className="text-white space-y-10 mx-10 mt-16">
        <hr className="w-full border-t-[3px] border-[#2D2D2E] opacity-35" />
        <div className="flex justify-between">
          <h1>Wefo</h1>
          <div className="flex space-x-2">
            <h1>Privacy</h1>
            <h1>Term</h1>
            <h1>Security</h1>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
