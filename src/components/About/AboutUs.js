import React, { useEffect, useState } from "react";
import AboutItem from "./AboutItem";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);

  //fetching about us data
  useEffect(() => {
    fetch("/aboutus.json")
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);
  return (
    <div className="text-center mt-28 max-w-screen-xl mx-auto px-6">
      <h1 className="text-4xl poppins pb-4">Why you choose us</h1>
      <p className="mx-auto text-gray-500 text-sm poppins w-2/4">
        The Bogra International Hospital is a nonprofit American academic
        medical center focused on integrated health care, education, and
        research.
      </p>

      {/* about us cards  */}
      <div className="flex sm:flex-col md:flex-col xs:flex-col lg:flex-row items-center gap-10 mt-8">
        {aboutData.map((item) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
