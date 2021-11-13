import React from "react";
import AboutUs from "../components/About/AboutUs";
import Doctors from "../components/Doctors Showcase/Doctors";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";
import DoctorSVG from "../assets/doctors.svg";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <section className="relative pt-24 bg-blueGray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words bg-green-400 w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src="https://images.pexels.com/photos/7088491/pexels-photo-7088491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Best Hospital in Bogura
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    We are happy to provide a rough estimate by phone or email.
                    If you decide to bring or ship your book to us we will offer
                    an exact estimate after we have looked over it. We do ask
                    for a 50% deposit to schedule the work. The balance is due
                    within 30 days of completion.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Best Neurology Surgeon
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        The class will complete several different binding styles
                        as we discuss which structures are best for different
                        needs.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Best Cardiology Surgeon
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Please bring a project. We do have books that will serve
                        as good first victims. No leather please!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Best Pathology Surgeon
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        This class will also focus on developing hand skills and
                        getting comfortable with adhesives and materials.​
                        Materials included.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Best Medicine Specialist
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        No leather please! We will cover broken spines, tattered
                        covers, adhesives, basic page repair methods
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className=" my-24 text-center font-medium text-4xl">
          Some of Our Doctors
        </h1>
        <Doctors />
      </div>
      <AboutUs />
      <section className="mb-16 -mt-30 relative pt-16 bg-blueGray-50">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="container mx-auto"
        >
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                <img
                  alt=""
                  src={DoctorSVG}
                  className="w-max align-middle rounded-t-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold">
                        Best healthcare you can ever get
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Why wait? book your place today! <br /> as we discuss
                        which structures are best for different needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="my-28 w-full flex justify-center items-center">
          <div class="container flex flex-col gap-4 mx-8">
            <label class="text-gray-400 font-semibold tracking-wider text-lg">
              Last Week
            </label>
            <div class="bg-gray-100 rounded-lg w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400">
              <div class="relative flex-1 flex flex-col gap-2 px-4">
                <label class="text-gray-800 text-base font-semibold tracking-wider">
                  Total Visitor
                </label>
                <label class="text-green-800 text-4xl font-bold">14K</label>
                <div class="absolute bg-red-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                  - 5%
                </div>
              </div>
              <div class="relative flex-1 flex flex-col gap-2 px-4">
                <label class="text-gray-800 text-base font-semibold tracking-wider">
                  Total Checkout
                </label>
                <label class="text-green-800 text-4xl font-bold">6K</label>
                <div class="absolute bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                  + 10%
                </div>
              </div>
              <div class="relative flex-1 flex flex-col gap-2 px-4">
                <label class="text-gray-800 text-base font-semibold tracking-wider">
                  Total Profit
                </label>
                <label class="text-green-800 text-4xl font-bold">$1.2M</label>
                <div class="absolute bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                  + 5%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeScreen;
