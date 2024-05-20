import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import angelanddemos from "../assets/angelanddemons.jpg";
import angerpt from "../assets/anger-pt.jpg";
import envy from "../assets/envyy-ls.jpg";
import lusst from "../assets/lusst-ptt.jpg";
import lust from "../assets/lust-pt.jpg";
import pride from "../assets/priddi-ls.jpg";
import sloth from "../assets/slotfulness-pt.jpg";

const images = [angelanddemos, angerpt, envy, lusst, lust, pride, sloth];

const Library = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlider = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlider = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex + 1
    );
  };
  return (
    <aside className=" py-32 h-[100vh] bg-black">
      <>
        <div className="px-5 h-[90%]">
          <div className="border-b-2 border-white flex gap-2">
            <div className="h-[70px] w-[100px] md:h-[100px] md:w-1/4">
              <h2 className="font-bold text-xl font-serif text-white md:text-3xl">
                Year
              </h2>
            </div>
            <div className="h-[70px] w-1/2 md:h-[100px] md:w-1/2">
              <h2 className="font-bold text-xl font-serif text-white md:text-3xl">
                Art
              </h2>
            </div>
            <div className="h-[70px] w-1/3 md:h-[100px] md:w-1/3">
              <h2 className="font-bold text-xl font-serif text-white md:text-3xl">
                Description
              </h2>
            </div>
          </div>
          <div className="flex  gap-2 my-2">
            <div className=" w-[100px] md:w-1/4 h-[700px]">
              <h2 className="font-bold font-serif text-xl text-white md:text-5xl">
                1901
              </h2>
            </div>
            <div className=" w-1/2 md:w-1/2 h-[700px]">
              <img
                className="w-full h-[500px] object-cover rounded-2xl"
                src={images[currentImage]}
                alt=""
              />
            </div>
            <div className=" w-1/3 md:w-1/3 h-[700px] text-white">
              <h2 className="font-bold font-serif pb-4 text-xl md:text-3xl">
                De Expresso Hangat
              </h2>
              <p className="font-serif text-l md:text-2xl">
                Think about art when you trapped. Think about art when you
                joyful <br />
                Think about art when you are thinking
              </p>

              <div className="flex items-end pt-15 gap-3 py-10 md:pt-20">
                <>
                  <button
                    onClick={prevSlider}
                    className="bg-black text-white rounded-full p-1"
                  >
                    <FaArrowCircleLeft className="h-10 w-10 md:h-[100px] md:w-[100px]" />
                  </button>
                  <button
                    onClick={nextSlider}
                    className="bg-black text-white rounded-full p-1"
                  >
                    <FaArrowCircleRight className="w-10 h-10 md:h-[100px] md:w-[100px]" />
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f3f1ec] h-[40%] w-full text-center px-5 md:flex md:justify-between md:text-start">
          <h2 className="font-bold text-xl font-serif py-4 md:text-4xl">
            AS ABOVE, SO BELOW
          </h2>
          <p className="font-serif text-xl md:text-2xl py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            quaerat blanditiis distinctio. <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Lorem ipsum dolor sit.
          </p>
        </div>
      </>
    </aside>
  );
};

export default Library;
