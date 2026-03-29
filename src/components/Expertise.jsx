import React from "react";
import videoFile from "../assets/food4_1.mp4";
import Card from "react-bootstrap/Card";
import indian from "../assets/indian.jpeg";
import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";

const Expertise = () => {
  return (
    <div>
      {/* 🎥 Video Section */}
      <div className="position-relative" id = "expertise">
        <video
          autoPlay
          muted
          loop
          className="w-100"
          style={{ height: "80vh", objectFit: "cover" }}
        >
          <source src={videoFile} type="video/mp4" />
        </video>

        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1> My Expertice</h1>
          <p>At our restaurant, our mission is to create delicious and memorable dining experiences.</p>
        </div>
      </div>

      {/* 🍽️ Cards Section */}
      <div className="container my-5">
        <div className="row g-4">
          
          {/* Card 1 */}
          <div className="col-md-4">
            <Card className="bg-dark text-white h-100 shadow">
              <Card.Img src={indian} alt="Indian Food" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                <Card.Title>Indian Cuisine</Card.Title>
                <Card.Text>Rich flavors and traditional spices.</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <Card className="bg-dark text-white h-100 shadow">
              <Card.Img src={italian} alt="Italian Food" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                <Card.Title>Italian Cuisine</Card.Title>
                <Card.Text>Delicious pasta and cheesy pizzas.</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <Card className="bg-dark text-white h-100 shadow">
              <Card.Img src={japanese} alt="Japanese Food" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                <Card.Title>Japanese Cuisine</Card.Title>
                <Card.Text>Fresh sushi and elegant flavors.</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Expertise;