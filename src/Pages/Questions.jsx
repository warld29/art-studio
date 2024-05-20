import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import QuestionCard from "../component/QuestionCard";

const Questions = () => {
  return (
    <div className="px-5 py-32 h-[100vh] bg-[#f3f1ec] mt-15">
      <QuestionCard
        num={"001"}
        icons={
          <FaArrowCircleRight className="hidden md:block md:h-[100px] w-[100px]" />
        }
        text1={"Why you should choose Artisans?"}
        note1={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, exercitationem."
        }
        note2={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, exercitationem."
        }
        note3={"Lorem ipsum, dolor sit amet consectetur."}
      />
      <QuestionCard
        num={"002"}
        icons={
          <FaArrowCircleRight className="hidden md:block md:h-[100px] w-[100px]" />
        }
        text1={"How Artisans work for you?"}
        note1={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, exercitationem."
        }
        note2={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, exercitationem."
        }
        note3={"Lorem ipsum, dolor sit amet consectetur."}
      />
      <QuestionCard
        num={"003"}
        icons={
          <FaArrowCircleRight className="hidden md:block md:h-[100px] w-[100px]" />
        }
        text1={"Why we choose to unlock your creativity?"}
        note1={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, exercitationem."
        }
        note2={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, exercitationem."
        }
        note3={"Lorem ipsum, dolor sit amet consectetur."}
      />
    </div>
  );
};

export default Questions;
