import React from "react";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
const Slider = () => {
  const carouselItems = [
    {
      backgroundImage:
        "url('https://images.freecreatives.com/wp-content/uploads/2015/09/avengers-wallpapers-.jpg')",
      title: "Avenger Assembled ",
      description: "Avenger Assembled to Save World",
    },
    {
      backgroundImage:
        "url('https://e1.pxfuel.com/desktop-wallpaper/843/490/desktop-wallpaper-5-years-of-baahubali-the-beginning-25-lesser-kalakeya.jpg')",
      title: "Bahubali Fighting",
      description: "Bahubali is standing before you for your protection",
    },
    {
      backgroundImage: "url('https://wallpaperaccess.com/full/2464223.jpg')",
      title: "Spiderman Homecoming",
      description: "Bahubali is standing before you for your protection",
    },
  ];

  return (
    <Carousel className="main">
      {carouselItems.map((item, index) => (
        <Carousel.Item
          key={index}
          className="w-full h-screen"
          style={{
            backgroundImage: item.backgroundImage,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.9,
          }}
        >
          <div className="bg-layer"></div>
          <div className="flex flex-col items-center justify-center text-white h-full mt-20">
            <h3 className="text-6xl font-bold">{item.title}</h3>
            <p className="text-md mt-2">{item.description}</p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-4">
              <a
                href="#"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#4361ee] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Learn more
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-[#6c757d] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  class="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch video
              </a>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
