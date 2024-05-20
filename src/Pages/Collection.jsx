import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpg";
import art6 from "../assets/art6.jpg";
import art7 from "../assets/art7.jpg";
import art8 from "../assets/art8.jpg";
import art9 from "../assets/art9.jpg";

const images = [art1, art2, art3, art4, art5, art6, art7, art8, art9];
const Collection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex + 1
    );
  };
  return (
    <div className="w-full bg-black py-32 min-h-[100vh]">
      <div className="bg-black text-white px-5 md:flex md:justify-between">
        <div className="flex flex-col justify-center items-center md:flex md:items-start">
          <h2 className="font-serif py-3 md:text-start text-4xl md:text-6xl">
            Art Collections
          </h2>
          <p className="text-center md:text-start leading-8 md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Lorem
            ipsum dolor sit amet consectetur adipisicing. <br />
            Lorem ipsum dolor sit amet consectetur. <br />
            Lorem, ipsum.
          </p>
          <div className="flex gap-3 py-10 md:pt-20">
            <>
              <button
                onClick={prevSlide}
                className="bg-black text-white rounded-full p-1"
              >
                <FaArrowCircleLeft className="h-10 w-10 md:h-[100px] md:w-[100px]" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black text-white rounded-full p-1"
              >
                <FaArrowCircleRight className="w-10 h-10 md:h-[100px] md:w-[100px]" />
              </button>
            </>
          </div>
        </div>
        <div className="py-7 px-7 flex justify-center items-center md:h-[800px]">
          <img
            className="w-[400px] h-[400px] object-cover md:w-[900px] md:h-[700px] md:object-fill"
            src={images[currentImage]}
            alt=""
          />
        </div>
      </div>
      <div className="px-5 text-center bg-[#f3f1ec] h-[40vh] flex flex-col justify-center items-center md:grid md:grid-cols-2 md:text-start">
        <h2 className="font-serif py-3 md:text-start text-4xl md:text-5xl">
          We focus on modern complexities and burden of our time.
        </h2>
        <div>
          <p className="text-center md:text-start font-bold leading-8 md:pl-[20px] md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            nobis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illo? <br />
            lorem5
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
