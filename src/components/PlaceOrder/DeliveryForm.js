import React, { useState } from "react";
import swal from "sweetalert";
import { useDelivery } from "../../contexts/DeliveryProvider";
import useAuth from "../../hooks/useAuth";
import TextField from "../Form/TextField";

const DeliveryForm = () => {
  const { user } = useAuth();

  const [change, setChange] = useState({
    name: `${user.displayName}`,
    age: "",
    address: "",
    country: "",
  });
  const { setInput, setDisabled } = useDelivery();

  //handle Change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setChange((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      name: change.name,
      age: change.age,
      address: change.address,
      country: change.country,
    });
    swal(
      "Information Updated!",
      "Your shipping details updated successfully!",
      "success"
    );
    setDisabled(false);
  };

  return (
    <div className="flex flex-col mt-20">
      <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700">
        Please Fill up the form Carefully
      </h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3">
          <TextField
            type="text"
            placeholder="full name"
            name="name"
            value={change.name}
            onChange={handleChange}
            required
          />
          <TextField
            type="text"
            placeholder="age"
            name="age"
            value={change.age}
            onChange={handleChange}
            required
          />
          <TextField
            type="text"
            placeholder="mailing address"
            name="address"
            value={change.address}
            onChange={handleChange}
            required
          />
          <TextField
            type="text"
            placeholder="country"
            name="country"
            value={change.country}
            onChange={handleChange}
            required
          />
          <TextField type="text" placeholder="phone number" />
          <TextField type="email" placeholder="email (optional)" />
          <button className="w-full px-6 py-3 rounded-lg bg-green-400 text-white poppins ring-red-300 focus:ring-4 transition duration-500">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryForm;
