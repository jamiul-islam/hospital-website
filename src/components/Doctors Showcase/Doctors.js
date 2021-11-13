import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import DoctorItem from "./DoctorItem";
import Skeleton from "./Skeleton";

const Doctors = () => {
  const [menuTab, setMenuTab] = useState("Neurologist");
  const [loading, setLoading] = useState(false);
  const [doctors] = useFetch();
  console.log(doctors);

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //doctor menu tab
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };

  return (
    <section className="my-12 mb-16 max-w-screen-xl mx-auto px-6">
      {/* doctor Menu tab  */}
      <div className="flex items-center justify-center space-x-6">
        <p
          className={
            menuTab === "Medicine"
              ? "active_menu_tab poppins bg-green-400"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Medicine")}
        >
          Medicine
        </p>
        <p
          className={
            menuTab === "Neurologist"
              ? "active_menu_tab poppins bg-green-400"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Neurologist")}
        >
          Neurologist
        </p>
        <p
          className={
            menuTab === "Cardiologist"
              ? "active_menu_tab poppins bg-green-400"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Cardiologist")}
        >
          Cardiologist
        </p>
      </div>

      {/* all doctors  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {doctors
          .filter((item) => menuTab === item.type)
          .map((item) =>
            loading ? (
              <Skeleton key={item.id} />
            ) : (
              <DoctorItem key={item.id} {...item} />
            )
          )}
      </div>
    </section>
  );
};

export default Doctors;
