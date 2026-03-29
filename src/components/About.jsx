import React from "react";
import aboutImg from '../assets/about.jpeg'

function About() {
  return (
    <div className="container my-5" id = "about">
      
      {/* Heading */}
      <h2 className="text-center mb-4  
      ">About Us</h2>

      {/* Row */}
      <div className="row align-items-center">
        
        {/* Left Side - Image */}
        <div className="col-md-5 mb-3 mb-md-0">
          <img
            src={aboutImg}
            alt="About"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-md-6 text-gray">
          <h3>Welcome to Our Restaurant</h3>
          <p>
            We serve delicious and high-quality food made with fresh ingredients.
            Our goal is to provide an amazing dining experience with great taste
            and excellent service.
          </p>
          <p>
            We serve delicious and high-quality food made with fresh ingredients.
            Our goal is to provide an amazing dining experience with great taste
            and excellent service.
          </p>
          <p>
            We serve delicious and high-quality food made with fresh ingredients.
            Our goal is to provide an amazing dining experience with great taste
            and excellent service.
          </p>
          <p>
            Whether you love pasta, pizza, or desserts, we have something special
            for everyone.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;