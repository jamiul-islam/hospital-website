import React from "react";
import "./about.css";
import Footer from "../Footer/Footer";
import AboutUs from "./AboutUs";

const About = () => {
  return (
    <>
      <div>
        <section className="about-banner h-96 w-full bg-yellow-50">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="mb-4 mt-16 text-center text-4xl md:text-4xl lg:text-6xl poppins font-semibold text-gray-700">
              About US
            </h1>
          </div>
        </section>

        {/* tailwindcards */}

        <section class="text-blueGray-700 bg-white mt-20">
          <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
            <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
              <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {" "}
                #19th on trending{" "}
              </h2>
              <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
                {" "}
                We offer the best service in the whole Northern-Bangladesh{" "}
              </h1>
              <p class="mb-8 text-base leading-relaxed text-left text-gray-600 ">
                {" "}
                Founded in 1980, Bumrungrad International Hospital has been a
                global pioneer in providing world-class healthcare services and
                international patient support for nearly four decades.
                Bumrungrad is an internationally accredited, multi-specialty
                hospital listed on the Stock Exchange of Thailand since 1989.
                One of the largest private hospitals in Southeast Asia,
                Bumrungrad International Hospital cares for over 1.1 million
                patients from more than 190 countries annually.{" "}
              </p>
              <div class="flex flex-col justify-center lg:flex-row">
                <button class="flex items-center px-6 py-3 mt-auto font-semibold ease-in-out bg-green-400 hover:bg-green-300 focus:shadow-outline focus:outline-none ring-offset-current ring-offset-2 text-sm rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
                  {" "}
                  Show me{" "}
                </button>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
                  {" "}
                  rich hospital for poor people <br class="hidden lg:block" />
                  <a
                    href="/"
                    className="inline-flex items-center font-semibold text-green-400 md:mb-2 lg:mb-0 hover:text-black "
                    title="read more"
                  >
                    {" "}
                    Read more about it »{" "}
                  </a>
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
              <img
                class="object-cover object-center rounded-lg "
                alt="hero"
                src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </div>
          </div>
        </section>
      </div>
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
