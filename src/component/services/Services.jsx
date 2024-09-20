import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-8xl rounded-lg mx-auto bg-[#151515] ml-10">
        {/* Header */}
        <div className="mb-12 flex flex-wrap pt-10 ml-10 space-x-28 ">
          <h2 className="text-lg font-light tracking-wide mb-4">
            • Our Services
          </h2>
          <p className="text-2xl font-semibold leading-relaxed max-w-2xl">
            We are a close-knit team of experts <br /> dedicated to crafting
            memorable and <br /> emotionally engaging websites, digital <br />
            experiences, and native apps.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Service Card 1 */}
          <div className="hover:bg-[#4034EB] rounded-xl p-6 relative group mx-5 my-5">
            <div className="absolute top-4 right-4 bg-transparent border border-white rounded-full p-2 transition-all ">
              <MdArrowOutward />
            </div>
            <h3 className="text-xl font-bold mb-4 ">BRAND IDENTITY</h3>
            <p className="text-sm font-light">
              We provide digital solutions such as Website <br /> Design, Mobile
              App Design, Landing <br /> Page design, Illustration, Animation,
              etc. <br /> that increase company values.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="hover:bg-[#4034EB] rounded-xl p-6 relative group mx-5 my-5">
            <div className="absolute top-4 right-4 bg-transparent border border-white rounded-full p-2 transition-all ">
              <MdArrowOutward />
            </div>
            <h3 className="text-xl font-bold mb-4">UX/UI DESIGN</h3>
            <p className="text-sm font-light">
              We provide digital solutions such as Website <br /> Design, Mobile
              App Design, Landing <br /> Page design, Illustration, Animation,
              etc. <br /> that increase company values.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="hover:bg-[#4034EB] rounded-xl p-6 relative group mx-5 my-5">
            <div className="absolute top-4 right-4 bg-transparent border border-white rounded-full p-2 transition-all ">
              <MdArrowOutward />
            </div>
            <h3 className="text-xl font-bold mb-4">WEBFLOW DEVELOPER</h3>
            <p className="text-sm font-light">
              We provide digital solutions such as Website <br /> Design, Mobile
              App Design, Landing <br /> Page design, Illustration, Animation,
              etc. <br /> that increase company values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
