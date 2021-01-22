import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
  });

  const inputChangeHandler = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // setFormData({
    //   [name]: value,
    // });
    setFormData((prevStore) => {
      // prevStore is previous state
      // if (name === "fName") {
      //   return {
      //     firstName: value,
      //     lastName: prevStore.lastName,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     firstName: prevStore.firstName,
      //     lastName: value,
      //   };
      // }

      return {
        ...prevStore,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("formdata>>", formData);
    setFormData({
      fName: "",
      lName: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input
        type="text"
        name="fName"
        value={formData.fName}
        onChange={inputChangeHandler}
      />

      <label>Last Name</label>
      <input
        type="text"
        name="lName"
        value={formData.lName}
        onChange={inputChangeHandler}
      />

      <label>email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={inputChangeHandler}
      />

      <label>phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={inputChangeHandler}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
