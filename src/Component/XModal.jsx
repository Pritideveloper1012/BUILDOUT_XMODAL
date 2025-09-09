import React, { useState } from "react";
import "./XModal.css";


function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!username) return alert("Please fill the Username field.");
    if (!email) return alert("Please fill the Email field.");
    if (!phone) return alert("Please fill the Phone field.");
    if (!dob) return alert("Please fill the Date of Birth field.");

    if (!email.includes("@"))
      return alert("Invalid email. Please check your email address.");

    if (!/^\d{10}$/.test(phone))
      return alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );

    const selectedDate = new Date(dob);
    const today = new Date();
    if (selectedDate > today)
      return alert(
        "Invalid Date of Birth. Please select a valid date."
      );

    // All validations passed
    closeModal();
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <div className="app">
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone:</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;
