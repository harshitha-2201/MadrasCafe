import React from 'react'
import videoFile from "../assets/food3_2.mp4"; 

const Hero = () => {
  return (
   <div className="position-relative">
  <video
    autoPlay
    muted
    loop
    className="w-100"
    style={{ height: "80vh", objectFit: "cover" }}
  >
    <source src={videoFile} type="video/mp4" />
  </video>

  {/* 🔥 Bottom Text */}
  <div
    className="position-absolute w-100 text-center text-white"
    style={{
      bottom: "40px",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  >
    <p className="fs-4 mb-1">Welcome to</p>
    <h1 className="display-3 fw-bold">MADRAS CLASSIC CAFE</h1>
  </div>
</div>
  )
}

export default Hero