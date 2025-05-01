import React, { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          placeholder="username"
        />
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormData;
// rafce
