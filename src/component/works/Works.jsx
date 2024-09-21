import { MdArrowOutward } from "react-icons/md";

const Work = () => {
  return (
    <div className="bg-black pt-36">
      <div className="flex flex-col md:flex-row mx-5 md:mx-10 space-y-10 md:space-y-0 md:space-x-5 justify-around">
        {/* first section */}
        <div className="flex flex-col items-center md:items-start">
          {/* Responsive image size */}
          <div className="w-[250px] h-[150px] md:w-[500px] md:h-[350px] bg-[#121212] rounded-lg"></div>
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
            <h1 className="text-xl md:text-2xl text-center md:text-left">Roboto Landing page</h1>
          </div>
          
          <div className="w-[250px] h-[150px] md:w-[500px] md:h-[350px] bg-[#121212] mt-5 rounded-lg"></div>
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
            <h1 className="text-xl md:text-2xl text-center md:text-left">Groteck Website</h1>
          </div>
        </div>

        {/* second section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col space-y-5 text-white text-center md:text-left">
            <h1>• Featured Works</h1>
            <p className="text-xl md:text-2xl">
              Take a look at <br />
              our projects
            </p>
          </div>

          <div className="w-[250px] h-[150px] md:w-[500px] md:h-[350px] mt-5 bg-[#121212] rounded-lg relative">
            <span className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-transparent border border-[#2D2D2E] text-white px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
              <p>View project</p>
              <MdArrowOutward className="ml-2" />
            </span>
          </div>

          <div className="text-white space-y-5 mt-5">
            <div className="flex flex-wrap space-x-2">
              <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                UI/UX
              </span>
              <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                Illustration
              </span>
            </div>
            <h1 className="text-xl md:text-2xl text-center md:text-left">Poppin App Design</h1>
          </div>

          <div className="w-[250px] h-[150px] md:w-[500px] md:h-[350px] bg-[#121212] mt-5 rounded-lg"></div>
          <div className="text-white space-y-5 mt-5">
            <div className="flex flex-wrap space-x-2">
              <span className="mt-5 border border-[#2D2D2E] text-white w-28 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                Branding
              </span>
              <span className="mt-5 border border-[#2D2D2E] text-white w-20 px-6 py-2 rounded-full hover:bg-indigo-600 flex justify-between items-center">
                UI/UX
              </span>
            </div>
            <h1 className="text-xl md:text-2xl text-center md:text-left">Helvatica Branding</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
