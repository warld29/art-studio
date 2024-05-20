import React from "react";
import roses from "../assets/roses.jpg";

const About = () => {
  return (
    <main className=" bg-[#f3f1ec] px-5 pt-32 ">
      <div>
        <div className="flex flex-col justify-between py-7 md:flex-row">
          <h2 className="font-light font-serif md:pr-10 text-center md:text-left md:w-full text-5xl py-4 md:text-6xl">
            Believers <br /> <span className="font-bold">in Humanity.</span>
          </h2>
          <p className="md:w-1/2 text-center md:text-left md:flex md:justify-end md:text-2xl md:py-4 text-xl">
            Discover only the greatest art creation, <br />
            project, and festival beyond humanity <br /> in many veriety around
            the world.
          </p>
        </div>
        <div className="w-full">
          <img className="w-full h-[650px] object-cover" src={roses} alt="" />
        </div>
        <div className="flex flex-col justify-between py-7 md:flex-row">
          <h2 className="font-bold font-3xl font-serif md:pr-10 text-center md:text-2xl md:text-left md:w-full py-3">
            The brush trascend beyond the canvas.
          </h2>
          <p className="md:w-1/2 text-center md:text-left text-l md:text-2xl">
            It is the work of great artist to not just tell story as the should
            be relatable. <br />
            As the sun rises at different part of the world at different time,
            however, we experience it alike. <br />
            It transcent canvans and it is commonplace.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
