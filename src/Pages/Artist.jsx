import React from "react";
import artist from "../assets/artist.jpg";

const Artist = () => {
  return (
    <article>
      <div className="px-5 py-32 min-h-[100vh] bg-[#f3f1ec]">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-5xl font-serif py-4 text-center md:text-7xl">
              Meet <br />
              <span className="font-bold">the Artist</span>
            </h2>
            <p className="text-center text-l py-7 md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex flex-col justify-center gap-5 py-7 border-b-2 border-black md:grid md:grid-cols-2 md:gap-7">
              <div className="h-[400px] w-[400px] bg-black text-white font-bold text-5xl  flex justify-center items-center md:h-[500px] md:w-[100%]">
                <h2 className="text-center font-serif">Foulie E.</h2>
              </div>

              <div className="w-full md:w-[100%]">
                <img
                  className="w-[400px] h-[400px] object-cover md:h-[500px] md:w-[700px] md:object-center"
                  src={artist}
                  alt=""
                />
              </div>
            </div>
            <div className="px-5 text-center bg-[#f3f1ec] flex flex-col justify-center items-center md:grid md:grid-cols-2 md:text-start">
              <h2 className="font-serif py-3 md:text-start text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="text-center md:text-start leading-8 md:pl-[20px] md:text-2xl md:pt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo,
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Artist;
