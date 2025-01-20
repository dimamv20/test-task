import React, { useState } from 'react';
import '../App.css';

const BookingCamper = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    alert('Booking request sent!');
  };

  return (
    <div className="booking-container">
      <div className="booking-form">
        <h3 className="booking-title">Book your campervan now</h3>
        <p className="booking-subtitle">Stay connected! We are always ready to help you.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="bookingDate"
            placeholder="Booking date*"
            value={formData.bookingDate}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn-submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default BookingCamper;
