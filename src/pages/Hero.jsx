import { Typewriter } from "react-simple-typewriter";
import { profile } from "../assets/img";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-bgColor mb-[50px]" name="home">
      <div className="mx-auto max-w-[1200px] w-full h-full flex justify-between items-center px-4">
        <div className="w-full mx-auto md:flex-col lg:flex-row flex justify-center md:justify-between items-center py-[50px] text-center lg:text-left">
          <div className="">
            <h1 className="text-[40px] md:text-[50px] lg:text-[58px] text-white">
              <span>
                <Typewriter
                  words={["Hi, I'm Jayvee Genavia"]}
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <h2 className="text-[20px] lg:text-[25px]">
              <span className="text-white">Future Web Developer</span>
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

          <div className="hidden lg:flex lg:flex-col w-[50%] h-screen overflow-hidden relative">
            <img
              src={profile}
              alt="profile picture"
              className="absolute bottom-0 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
