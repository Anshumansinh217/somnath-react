import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Manual validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim()) {
      alert("Please fill in all required fields: Name, Email, and Subject.");
      return;
    }

    // Submit the form (e.g. send data to backend or email service)
    setSubmitted(true);

    // Reset form data (optional)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    // Hide the thank-you message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-container py-5">
      <div className="contact-glass shadow-lg p-4 p-md-5">
        <div className="text-center mb-4">
          <h1 className="contact-title"> Connect with Somnath</h1>
          <p className="contact-subtext">Have questions, blessings, or feedback? We'd love to hear from you.</p>
        </div>

        <div className="row g-4">
          {/* Left Info */}
          <div className="col-md-6">
            <div className="info-box">
              <h4 className="info-title">Temple Info</h4>
              <ul className="info-list">
                <li><strong>📍 Location:</strong> Somnath Temple, Prabhas Patan, Gujarat</li>
                <li><strong>📞 Phone:</strong> +91 2876 231 200</li>
                <li><strong>📧 Email:</strong> info@somnathtemple.in</li>
                <li><strong>🕒 Hours:</strong> 6:00 AM – 9:30 PM (All Days)</li>
              </ul>

              <div className="social-icons mt-4">
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-md-6">
            <div className="form-box">
              <h4 className="info-title">Send a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control form-field"
                    placeholder="Your Name *"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-field"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control form-field"
                    placeholder="Subject *"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control form-field"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="btn btn-glass w-100 mt-3" type="submit">Submit</button>
              </form>

              {submitted && (
                <div className="text-center mt-4" style={{ color: "#d58000", fontWeight: "600" }}>
                  🙏 Thank you for your message! We will get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-5">
          <h4 className="info-title text-center">🌍 Our Location</h4>
          <div className="map-wrapper mt-3 rounded-4 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1924865476694!2d70.40143001539956!3d20.888059796387862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5b1becc0a3ab%3A0x7cf77f11b30b13c3!2sSomnath%20Temple!5e0!3m2!1sen!2sin!4v1611821938421!5m2!1sen!2sin"
              title="Somnath Temple Map"
              allowFullScreen=""
              loading="lazy"
              className="w-100"
              height="350"
              style={{ border: "0" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
