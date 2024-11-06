// components/Gallery.js
"use client";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const photos = [
  // slide
  { id: 0, url: "/gallery/slidebali3.jpg" },
  { id: 1, url: "/gallery/slidebali5.jpg" },
  { id: 2, url: "/gallery/slidebali1.jpg" },
  { id: 3, url: "/gallery/slidebali4.jpg" },
  { id: 4, url: "/gallery/slidebali2.jpg" },
  { id: 5, url: "/gallery/slidebali6.jpg" },
  { id: 6, url: "/gallery/slidebali7.jpg" },
  { id: 7, url: "/gallery/slidebali8.jpg" },
  { id: 8, url: "/gallery/slidebali9.jpg" },
  { id: 9, url: "/gallery/slidebali10.jpg" },

  { id: 10, url: "/gallery/portraitbali1.jpg" },
  { id: 11, url: "/gallery/portraitbali2.jpg" },

  { id: 12, url: "/gallery/slidecasual12.jpg" },
  { id: 13, url: "/gallery/slidecasual8.jpg" },
  { id: 14, url: "/gallery/slidecasual3.jpg" },
  { id: 15, url: "/gallery/slidecasual4.jpg" },
  { id: 16, url: "/gallery/slidecasual5.jpg" },
  { id: 17, url: "/gallery/slidecasual1.jpg" },
  { id: 18, url: "/gallery/slidecasual7.jpg" },
  { id: 19, url: "/gallery/slidecasual2.jpg" },
  { id: 20, url: "/gallery/slidecasual9.jpg" },
  { id: 21, url: "/gallery/slidecasual10.jpg" },
  { id: 22, url: "/gallery/slidecasual11.jpg" },
  { id: 23, url: "/gallery/slidecasual6.jpg" },
  { id: 24, url: "/gallery/slidecasual13.jpg" },

  { id: 25, url: "/gallery/portraitcasual1.jpg" },
  { id: 26, url: "/gallery/portraitcasual2.jpg" },
];

const Gallery: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="w-full">
        <Swiper
          className="mb-3"
          spaceBetween={12}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {photos
            .filter((photo) => photo.id >= 0 && photo.id <= 9)
            .map((photo) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={photo.id}
              >
                <Image
                  src={photo.url}
                  alt="gallery"
                  width={500}
                  height={500}
                  className="rounded-lg flex justify-center items-center"
                  onClick={() => {
                    setCurrentIndex(photo.id);
                    setToggler(!toggler);
                  }}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="columns-1 gap-3 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:my-3">
          {photos
            .filter((photo) => photo.id >= 10 && photo.id <= 11)
            .map((photo) => (
              <Image
                key={photo.id}
                src={photo.url}
                alt="gallery"
                width={500}
                height={500}
                className="rounded-lg"
                onClick={() => {
                  setCurrentIndex(photo.id);
                  setToggler(!toggler);
                }}
              />
            ))}
        </div>

        <Swiper
          className="mb-3"
          spaceBetween={12}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {photos
            .filter((photo) => photo.id >= 12 && photo.id <= 24)
            .map((photo) => (
              <SwiperSlide key={photo.id}>
                <Image
                  key={photo.id}
                  src={photo.url}
                  alt="gallery"
                  width={500}
                  height={500}
                  className="rounded-lg"
                  onClick={() => {
                    setCurrentIndex(photo.id);
                    setToggler(!toggler);
                  }}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="columns-1 gap-3 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:my-3">
          {photos
            .filter((photo) => photo.id >= 25 && photo.id <= 26)
            .map((photo) => (
              <Image
                key={photo.id}
                src={photo.url}
                alt="gallery"
                width={500}
                height={500}
                className="rounded-lg"
                onClick={() => {
                  setCurrentIndex(photo.id);
                  setToggler(!toggler);
                }}
              />
            ))}
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={photos.map((photo) => photo.url)}
        slide={currentIndex + 1}
      />
    </div>
  );
};

export default Gallery;
