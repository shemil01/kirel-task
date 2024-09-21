import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Testimoni = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-black to-black">
      <div className="mx-10 pt-5 md:flex space-x-5 space-y-5 md:space-x-40">
        <div>
          <h1 className="text-white">• Testimonials</h1>
        </div>
        <div className="text-white">
          <p>
            A studio filled with passion, professionalism, <br />
            and boundless creativity. They exceeded my <br /> expectations with
            their excellent services, <br />
            high-quality products, and affordable prices. <br />
            I'm extremely satisfied!
          </p>
          <div className="flex flex-col mt-4 space-y-2">
            {/* Flex for image and text side by side */}
            <div className="flex items-center space-x-4">
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/110923080813-spotify-music-facebook.jpg?q=w_3000,h_2237,x_0,y_0,c_fill"
                alt="Kathryn Murphy"
                className="rounded-full w-10 h-10"
              />
              <div>
                <h1>Kathryn Murphy</h1>
                <p>Senior Marketing, Spotify</p>
              </div>
            </div>
            <div className="flex space-x-2 mb-6">
              <span className="rounded-full w-8 h-8 flex justify-center items-center border border-[#605D8B] mt-2">
                <IoArrowBack />
              </span>
              <span className="rounded-full w-8 h-8 flex justify-center items-center border border-[#605D8B] mt-2">
                <IoArrowForward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
