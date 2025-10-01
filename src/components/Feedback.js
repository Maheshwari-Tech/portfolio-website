import React, { useState } from 'react';

function Feedback() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Feedback sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send feedback.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send feedback.');
    }
  };

  return (
    <section id="feedback">
      <h2>Send Me Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Send Feedback</button>
      </form>
    </section>
  );
}

export default Feedback;
