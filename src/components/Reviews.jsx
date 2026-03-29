import React, { useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";


const Reviews = () => {
  const [activeVideo, setActiveVideo] = useState(video1);

  const videos = [video1, video2, video3 , video4 , video5];

  return (
    <div className="container-fluid bg-dark text-white py-5" id = 'reviews'>

      {/* Heading */}
      <h2 className="text-center mb-4">Customers Reviews</h2>

      {/* Review Text */}
      <div className="container">
        <p className="text-center fs-4" style={{ lineHeight: "1.8" }}>
          As a seasoned food critic, my expectations are always high when stepping
          into a new dining establishment. Madras Classic Cafe, with its elegant
          design and welcoming ambiance, delivers a truly delightful experience ❤️.
        </p>

        <p className="text-center fs-4" style={{ lineHeight: "1.8" }}>
          I recently dined at Madras Classic Cafe 🏬, and it was a delightful experience. The crispy, golden fries 🍤 were perfectly seasoned and complemented the juicy, tender burger. The fresh, vibrant salad added a refreshing touch to the meal. Service was attentive and friendly,
           making the visit even more enjoyable. Overall, a fantastic spot for delicious 😋 comfort food!
        </p>
      </div>

      {/* Main Video Player */}
      <div className="d-flex justify-content-center my-5">
        <video
          key={activeVideo}
          src={activeVideo}
          controls
          autoPlay
          className="rounded shadow"
          style={{ width: "60%", maxHeight: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Video Thumbnails */}
      <div className="container">
        <div className="d-flex gap-3 overflow-auto">

          {videos.map((vid, index) => (
            <video
              key={index}
              src={vid}
              onClick={() => setActiveVideo(vid)}
              className="rounded"
              style={{
                width: "200px",
                height: "120px",
                objectFit: "cover",
                cursor: "pointer",
                opacity: activeVideo === vid ? 1 : 0.6,
                border: activeVideo === vid ? "2px solid white" : "none",
              }}
            />
          ))}

        </div>
      </div>

    </div>
  );
};

export default Reviews;