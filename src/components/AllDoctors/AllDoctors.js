import React from "react";
import Doctors from "../Doctors Showcase/Doctors";
import Footer from "../Footer/Footer";
import "./AllDoctors.css";

const AllDoctors = () => {
  return (
    <div>
      <section className="doctor-banner h-96 w-full bg-yellow-50">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="mb-4 mt-16 text-center text-4xl md:text-4xl lg:text-6xl poppins font-semibold text-gray-700">
            All Doctors
          </h1>
        </div>
      </section>
      <section>
        <Doctors></Doctors>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AllDoctors;
