import { FaDribbble, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-row text-white ml-10">
        <div>
          <h1>
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
            <span className="rounded-full w-8 h-8 flex justify-center items-center border border-[#1E1E1F]"></span>
          </div>
          <div className="flex flex-col">
            <FaPhoneAlt /> <span>0972663633</span>
            <IoMdMail />  <span> hello@wefo.com</span>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
