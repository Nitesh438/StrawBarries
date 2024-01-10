import React from "react";
import Navbar from "../Navbar";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main className="bg-primaryDark md:py-6 md:px-12">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shodow-md">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
            {/* text-container */}
            <div className="text-white space-y-4 p-4  mt-[100px] md:mt-0">
              <h1 className="text-3xl pl-6 md:pl-14">01__________</h1>
              <h1 className="text-5xl font-bold text-shadow">A HELTHY FRUIT</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button className="border border-white px-4 py-2 rounded-lg ">
                Shop me
              </button>
            </div>
            {/* img-container */}
            <div>
              <img
                src="/src/assets/image/strawberry.png"
                alt="Hero"
                className="w-[400px] img-shadow relative z-[1] "
              />
            </div>
            {/* Blank-container */}
            <div className="md:hidden"></div>
          </div>
        </div>
        <h1 className="text-center text-[80px] text-white uppercase font-bold sm:text -[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow ">
          berries
        </h1>
        {sidebar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from bg-primary to to-secondary z-10">
            <div className="w-full h-full flex flex-col justify-center items-center gap-6  ">
              {/* Lining */}

              <div className="w-[1px] h-[70px] bg-white"></div>

              {/* social media icons */}

              <div className="inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <FaFacebook className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <IoLogoLinkedin className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <FaInstagramSquare className="text-2xl" />
              </div>

              {/* Lining */}

              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
