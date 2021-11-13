import React from "react";
import Footer from "../Footer/Footer";
import "./Faq.css";

const AllDoctors = () => {
  return (
    <div>
      <section className="doctor-banner h-96 w-full bg-yellow-50">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="mb-4 mt-16 text-center text-4xl md:text-4xl lg:text-6xl poppins font-semibold text-gray-700">
            Frequently Asked Questions
          </h1>
        </div>
      </section>
      <section className="container">
        <div className="mx-auto w-2/4">
          <div className="my-16">
            <h2 className="font-semibold ">Do you have gift certificates? </h2>
            <p>Yes.</p>
            <br />
            <h2 className="font-semibold ">
              Are you open to the public? Do I need an appointment?
            </h2>
            <p>
              Currently, we are taking work by mail and by appointment
              Monday-Friday, 2-4pm. For an appointment please call or email.{" "}
            </p>
            <br />
            <h3>Regarding appointments we ask the following:</h3>
            <ul>
              <li>
                1. Please be on time. If you are going to be early or late
                please call so that we can avoid overlapping appointments.
              </li>
              <li>2. For now, one person at a time. </li>
              <li>3. Masks are required.</li>
            </ul>
            <br />
            <h2 className="font-semibold ">​May I send my book to you?</h2>
            <p>
              Yes. We recommend getting a rough estimate by phone first. If you
              decide to ship your book please include your name, phone number,
              address, and email address. When we receive your book we will call
              with an estimate.
            </p>
            <br />
            <h2 className="font-semibold ">What is your process?</h2>
            <p>
              We are happy to provide a rough estimate by phone or email. If you
              decide to bring or ship your book to us we will offer an exact
              estimate after we have looked over it. We do ask for a 50% deposit
              to schedule the work. The balance is due within 30 days of
              completion.
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AllDoctors;
