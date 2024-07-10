import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or suggestions, feel free to reach out to us.</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Email: support@libraryapp.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
  );
}
export default Contact;

