import { MdArrowOutward } from "react-icons/md";

const Mobile = () => {
  return (
    <div className="bg-black pt-36">
      <div className="flex flex-col  mx-5  space-y-10  justify-around">
        {/* Featured Works Section */}
        <div className="flex flex-col items-center  order-1 ">
          <div className="flex flex-col space-y-5 text-white text-center ">
            <h1>• Featured Works</h1>
            <p className="text-xl ">
              Take a look at <br />
              our projects
            </p>
          </div>

          <div className="w-[250px] h-[150px]  mt-5 bg-[#121212] rounded-lg relative">
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
            <h1 className="text-xl  text-center ">Poppin App Design</h1>
          </div>
        </div>

        {/* Other Sections */}
        <div className="flex flex-col items-center  order-2 ">
          {/* First project */}
          <div className="w-[250px] h-[150px]  bg-[#121212] rounded-lg"></div>
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
            <h1 className="text-xl  text-center ">Roboto Landing page</h1>
          </div>

          {/* Second project */}
          <div className="w-[250px] h-[150px]  bg-[#121212] mt-5 rounded-lg"></div>
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
            <h1 className="text-xl  text-center ">Groteck Website</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
