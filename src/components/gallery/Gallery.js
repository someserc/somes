import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/gallery/vintageJeep.jpg"
import img2 from "../../assets/gallery/jeep.jpg"
import img3 from "../../assets/gallery/camera.jpg"

const Gallery = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel slide container" data-bs-ride="carousel"
        >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              src={img1}
              className="d-block w-100 img-fluid rounded"
              alt="..."
              style={{ width: "1140px", height: "450px" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src={img2}
              className="d-block w-100 rounded"
              alt="..."
              style={{ width: "1140px", height: "450px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100 rounded"
              style={{ width: "1140px", height: "450px" }}
              alt="..."
            />
          </div>
        </div>
        <div className="carousel-middle">
          <Link to="/gallery" className="btn btn-primary">
            View More
          </Link>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon " aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon " aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Gallery;
