import React from "react";

const About = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-row mx-10 space-x-40">
        <div className="flex flex-col space-y-5">
          <h1 className="text-white">•Who are we</h1>
          <div className="w-48 h-20 bg-blue-600 rounded-full"></div>
        </div>
        <div className="space-y-10">
          <p className="text-2xl font-semibold leading-relaxed max-w-2xl text-white">
            We are a close-knit team of experts <br /> dedicated to crafting
            memorable and <br /> emotionally engaging websites, digital <br />
            experiences, and native apps.
          </p>
          <div className="w-40 h-10 bg-blue-600 rounded-full flex items-center justify-center">learn more</div>
        </div>
      </div>
    </section>
  );
};

export default About;
