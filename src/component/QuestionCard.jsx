import React from "react";

const QuestionCard = ({ icons, num, text1, note1, note2, note3 }) => {
  return (
    <>
      <div className="border-b border-black flex justify-between gap-5 py-10">
        <h2 className="font-bold py-4 text-2xl font-serif md:text-6xl md:font-light ">
          {num}
        </h2>
        <div className="">
          <h2 className="font-bold font-serif text-xl py-4 md:text-4xl">
            {text1}
          </h2>
          <p className="font-bold font-serif text-xl md:text-2xl">
            {note1}
            <br />
            {note2} <br />
            {note3}
          </p>
        </div>
        <div>{icons}</div>
      </div>
    </>
  );
};

export default QuestionCard;
