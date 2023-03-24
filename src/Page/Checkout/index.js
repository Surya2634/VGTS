import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StoreUserDetails } from "../../Store/UserStore.js";
import { useNavigate, useLocation } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState([
    { name: "", address: "", contact: "", email: "" },
  ]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigateCheckout = () => {
    navigate("/orderConfirmation", { state: { id: location.state.id } });
  };

  const validateForm = (e) => {
    let isvalid = true;

    if ((user.contact + "").length !== 10) {
      alert("Please, provide valid phone number");
      isvalid = false;
      return isvalid;
    }

    return isvalid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(StoreUserDetails(user));
    if (validateForm(e)) {
      navigateCheckout();
    }
  };

  return (
    <>
      <h1>Please Enter your Shipping details</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>Address</label>
        <textarea type="text" name="address" onChange={handleChange} required />
        <label>Contact No</label>
        <input type="number" name="contact" onChange={handleChange} required />
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} required />
        <button type="submit">Purchase</button>
      </form>
    </>
  );
};

export default Checkout;
