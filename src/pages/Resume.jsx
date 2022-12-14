import React from "react";
import { FaBook, FaCalendarDay } from "react-icons/fa";
import SkillBar from "react-skillbars";
function Resume() {
  const skills = [
    { type: "CSS", level: 85 },
    { type: "JAVASCRIPT", level: 80 },
    { type: "HTML", level: 85 },
    { type: "JAVA", level: 80 },
  ];
  const colors = {
    bar: "#2980b9",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };
  return (
    <div className="w-full bg-bgColor p-[15px] mb-12" name="skills">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center space-y-[20px]">
          <h1 className="text-primary text-[32px]">SKILLS</h1>
        </div>
        <div className="grid grid-cols-1 justify-center items-center w-full gap-[50px] py-[20px] h-[40vh] max-w-[1000px]">
          <SkillBar skills={skills} colors={colors} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
