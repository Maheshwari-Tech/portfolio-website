import React, { useState, useEffect } from 'react';

function Contact() {
  const [contact, setContact] = useState({});
  const [formType, setFormType] = useState('feedback');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    anonymous: false,
    date: '',
    time: ''
  });

  useEffect(() => {
    fetch('/storage/contact.json')
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching contact:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newData = { ...formData, [name]: type === 'checkbox' ? checked : value };
    if (name === 'anonymous' && checked) {
      newData.name = '';
      newData.email = '';
    }
    setFormData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = formType === 'feedback' ? 'feedback' : 'appointment';
    try {
      const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert(`${formType === 'feedback' ? 'Feedback sent' : 'Appointment booked'} successfully!`);
        setFormData({
          name: '',
          email: '',
          message: '',
          anonymous: false,
          date: '',
          time: ''
        });
      } else {
        alert(`Failed to ${formType === 'feedback' ? 'send feedback' : 'book appointment'}.`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Failed to ${formType === 'feedback' ? 'send feedback' : 'book appointment'}.`);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p><i className="fas fa-envelope"></i> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p><i className="fab fa-linkedin"></i> <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin?.replace('https://', '')}</a></p>
      </div>

      <div className="contact-form-container">
        <div className="form-tabs">
          <button
            className={formType === 'feedback' ? 'active' : ''}
            onClick={() => setFormType('feedback')}
          >
            Send Feedback
          </button>
          <button
            className={formType === 'appointment' ? 'active' : ''}
            onClick={() => setFormType('appointment')}
          >
            Book Appointment
          </button>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className={`common-fields ${formData.anonymous ? 'hidden' : ''}`}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          {formType === 'appointment' && (
            <div className="appointment-fields">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
            </div>
          )}

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

          {formType === 'feedback' && (
            <div className="anonymous-toggle">
              <label className="switch">
                <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
                <span className="slider round"></span>
              </label>
              <span className="toggle-label">Send anonymously</span>
            </div>
          )}

          <button type="submit">{formType === 'feedback' ? 'Send Feedback' : 'Book Appointment'}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
