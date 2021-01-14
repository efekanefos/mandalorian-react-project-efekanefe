import React from "react";

function Slide() {
  return (
    <div id="slide1">
      <h1 className="text-center pb-4">Some Cool Wallpapers For Your PC</h1>
      <div data-aos="zoom-in-up" id="slide" className="container pb-5">
        <div
          id="carouselExampleFade"
          class="container carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images6.alphacoders.com/103/thumb-1920-1038319.jpg"
                class="d-block w-100"
                alt="1"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images8.alphacoders.com/105/thumb-1920-1054300.jpg"
                class="d-block w-100"
                alt="2"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images8.alphacoders.com/105/thumb-1920-1056657.jpg"
                class="d-block w-100"
                alt="3"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slide;
