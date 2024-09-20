import { FaDribbble, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <section className="bg-black">
      <div className="flex  space-x-32 text-white ml-10">
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
            <span className="rounded-full w-8 h-8 flex justify-center items-center border border-[#1E1E1F]"></span>
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
        <form>
  <div className="flex flex-col w-full">
    <label>Name</label>
    <input
      type="text"
      placeholder="Your name"
      className="bg-transparent border-b-2 border-[#2D2D2E] focus:outline-none focus:border-blue-500 pb-2 placeholder:text-[#7C7C7C] w-full"
    />
  </div>

  <div className="flex flex-col w-full mt-4">
    <label>Email</label>
    <input
      type="text"
      placeholder="Your email address"
      className="bg-transparent border-b-2 border-[#2D2D2E] focus:outline-none focus:border-blue-500 pb-2 placeholder:text-[#7C7C7C] w-full"
    />
  </div>

  <div className="flex flex-col w-full mt-4">
    <label>Message</label>
    <textarea
      type="text"
      placeholder="Write your message here..."
      className="bg-transparent w-full border-none resize-none placeholder:text-[#7C7C7C] focus:outline-none"
    />
    <hr className="w-full border-t-2 border-[#2D2D2E] opacity-35" />
  </div>
</form>

            {/* <span className="bg-[#4034EB] text-white px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between">
            <p>Start a project</p> <MdArrowOutward className="mr-2" />
            </span> */}
      </div>
    </section>
  );
};

export default Contact;
