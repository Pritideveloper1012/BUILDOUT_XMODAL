import React, { useState } from "react";
import "./XModal.css";

const XModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Email validation
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Invalid email. Please check your email address.");
        return false;
      }
    }

    // Phone validation
    if (formData.phone) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        return false;
      }
    }

    // DOB validation
    if (formData.dob) {
      const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dobRegex.test(formData.dob)) {
        alert("Invalid date of birth.");
        return false;
      }
      const dobDate = new Date(formData.dob);
      const today = new Date();
      if (dobDate > today) {
        alert("Invalid date of birth.");
        return false;
      }
    }

    // Username last (required check)
    if (!formData.username || formData.username.trim() === "") {
      alert("Please fill the Username field.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert("Form submitted successfully!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default XModal;
