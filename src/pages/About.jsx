import React from "react";
import { profile } from "../assets/img";

const About = () => {
  return (
    <div className="w-full bg-bgColor mb-12" name="about">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <div className="text-center px-5 py-[30px] space-y-[20px]">
          <div className="mx-auto">
            <h1 className="text-primary text-[32px]">ABOUT</h1>
          </div>
          <div className="flex flex-col md:flex-row-reverse max-w-[1000px] w-full h-[700px] md:h-[80vh] mx-auto justify-between overflow-hidden rounded-lg">
            <div className="bg-bgColor flex-1 h-[50%] md:h-full w-full overflow-hidden relative">
              <img
                src={profile}
                alt="image"
                className="absolute top-[-130px] md:top-[-140px] md:h-[700px] w-[400px]"
              />
            </div>
            <div className="bg-bgColor h-full w-full flex-1 flex flex-col items-start justify-center  ">
              <div className="h-full w-full flex-1 flex flex-col items-start justify-center p-6 space-y-5">
                <p className="text-[22px]">
                  Hello There! I'm French Chezka Gazo, I'm a student of Sorsogon
                  State University. BS in Information Technology and I am a Web
                  Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
