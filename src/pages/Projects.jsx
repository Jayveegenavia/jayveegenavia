import React from "react";
import { Project } from "../components/Project";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full flex flex-col max-w-[1200px] mx-auto my-[50px] space-y-2 px-[15px] md:px-[30px] pt-2"
    >
      <div className="mx-auto text-center">
        <h1 className="text-primary text-[32px]">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full py-[50px] gap-[32px] flex-1">
        <Project
          title="Note Taking App"
          alt="image"
          image="https://images.ctfassets.net/lzny33ho1g45/5iJ10OKtmYa4BZpYvhb2xw/e890aa9115b53ef2d41c9135902285a2/Best_note_taking_apps.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760"
        />
        <Project
          title="Weather App"
          alt="image"
          image="https://www.igeeksblog.com/wp-content/uploads/2022/06/Best-weather-apps-for-iPhone-and-iPad.jpg"
        />
        <Project
          title="Chat App"
          alt="image"
          image="https://res.cloudinary.com/smartsupp/image/upload/w_1200,h_680,c_fill,q_auto,f_auto/v0/upload/mig_gy5unxi4_smartsupp-mobile-app-cover2x.png"
        />
        <Project
          title="Portfolio"
          alt="image"
          image="https://publuu.com/wp-content/uploads/2021/02/to.jpg"
        />
      </div>
    </div>
  );
};

export default Projects;
