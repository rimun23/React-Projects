import React, { useState } from "react";
function TicketForAirbus() {
  const [formData, setFormData] = useState({
    name: "",
    agreeToPhoto: false,
    ticketType: "",
    menu: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ticketType || !formData.menu) {
      alert("choose a ticket type or menu!");
    } else {
      console.log("submitted data", formData);
    }
    setFormData({
      name: "",
      agreeToPhoto: false,
      ticketType: "",
      menu: "",
    });
  };
  return (
    <div className="all">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="zag">KazAIR</h1>
        <input
          type="text"
          value={formData.name}
          name="name"
          placeholder="enter your firstname"
          onChange={handleChange}
        />
        <label>
          {" "}
          Сonfirm to take a photo report
          <input
            type="checkbox"
            name="agreeToPhoto"
            checked={formData.agreeToPhoto}
            onChange={handleCheckBoxChange}
            className="checkBox"
          />
        </label>
        <label>Choose a ticket type</label>
        <select name="ticketType" onChange={handleChange}>
          <option value="standart">Standart</option>
          <option value="VIP">VIP</option>
          <option value="premium">Premium</option>
        </select>
        <label>Choose menu</label>
        <select name="menu" onChange={handleChange}>
          <option value="standart">Standart</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="seafood">Seafood</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default TicketForAirbus;
