import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div style={{ backgroundColor: "#000000" }}>
          <img
            className="d-block w-100"
            src="https://images7.alphacoders.com/131/thumb-1920-1312721.jpeg"
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ backgroundColor: "#000000" }}>
          <img
            className="d-block w-100"
            src="https://dlcdnrog.asus.com/rog/media/1637784966993.webp"
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ backgroundColor: "#000000" }}>
          <img
            className="d-block w-100"
            src="https://wallpapers.com/images/hd/black-and-white-office-desk-desktop-i5qgtxi9v4hw81fv.jpg"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
