import { Typewriter } from "react-simple-typewriter";
import { profile } from "../assets/img";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#ECF0F3] mb-[50px]" name="home">
      <div className="mx-auto max-w-[1200px] w-full h-full flex justify-between items-center px-4 md:px-[30px]">
        <div className="w-full mx-auto border-red-100 rounded-[50px] md:flex-col lg:flex-row flex justify-center md:justify-between items-center px-[30px] py-[50px] lg:p-[60px] text-center lg:text-left">
          <div className="">
            <h1 className="text-[40px] md:text-[50px] lg:text-[90px] text-primary">
              <span className="font-qwitcher">
                <Typewriter
                  words={["I'm French Chezka Gazo"]}
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <h2 className="text-[20px] lg:text-[25px]">
              <span className="text-bgColor">
                This is my official Portfolio website
              </span>
            </h2>
            <button>
              <Link
                type="button"
                to="contact"
                spy={true}
                smooth={true}
                offset={-43}
                duration={300}
                delay={500}
                isDynamic={true}
                className="border-none bg-primary rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80"
              >
                Contact me
              </Link>
            </button>
          </div>

          <div className="hidden lg:flex gap-10 p-4 lg:flex-col w-[400px] h-screen overflow-hidden relative">
            <img
              src={profile}
              alt="profile picture"
              className="bg-cover absolute top-[-51px] left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
