// components/Gallery.js
"use client";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const photos = [
  // slide
  { id: 0, url: "/gallery/portrait1.jpg" },
  { id: 1, url: "/gallery/portrait2.jpg" },
  { id: 2, url: "/gallery/portrait3.jpg" },
  { id: 3, url: "/gallery/portrait4.jpg" },
  { id: 4, url: "/gallery/portrait5.jpg" },

  { id: 5, url: "/gallery/landscape1.jpg" },
  { id: 6, url: "/gallery/landscape2.jpg" },
  { id: 7, url: "/gallery/landscape3.jpg" },

  // slide
  { id: 8, url: "/gallery/portrait9.jpg" },
  { id: 9, url: "/gallery/portrait10.jpg" },
  { id: 10, url: "/gallery/portrait11.jpg" },
  { id: 11, url: "/gallery/portrait6.jpg" },
  { id: 12, url: "/gallery/portrait7.jpg" },
  { id: 13, url: "/gallery/portrait8.jpg" },

  { id: 14, url: "/gallery/landscape4.jpg" },
  { id: 15, url: "/gallery/landscape5.jpg" },
  { id: 16, url: "/gallery/landscape6.jpg" },

  // slide
  { id: 17, url: "/gallery/landscape7.jpg" },
  { id: 18, url: "/gallery/landscape8.jpg" },
  { id: 19, url: "/gallery/landscape9.jpg" },
  { id: 20, url: "/gallery/landscape10.jpg" },
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
            .filter((photo) => photo.id >= 0 && photo.id <= 4)
            .map((photo) => (
              <SwiperSlide key={photo.id}>
                <Image
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
            .filter((photo) => photo.id >= 5 && photo.id <= 7)
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
            .filter((photo) => photo.id >= 8 && photo.id <= 13)
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
            .filter((photo) => photo.id >= 14 && photo.id <= 16)
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
            .filter((photo) => photo.id >= 17 && photo.id <= 20)
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
