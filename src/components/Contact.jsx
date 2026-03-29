import React from "react";

function Contact() {
  return (
    <div className="container my-5" id = "contact">

      {/* Heading */}
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row">

        {/* Left Side - Info */}
        <div className="col-md-6 mb-4">
          <h4>Get in Touch</h4>
          <p>We’d love to hear from you! Reach out for any queries.</p>

          <p><strong>📍 Address:</strong> Madras Classic Cafe, India</p>
          <p><strong>📞 Phone:</strong> +91 9876543210</p>
          <p><strong>📧 Email:</strong> contact@mcc.com</p>
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;