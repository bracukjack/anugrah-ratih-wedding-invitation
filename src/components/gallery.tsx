// components/Gallery.js
"use client";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";

const photos: string[] = [
  "/gallery/gallry1.jpg",
  "/gallery/gallry2.jpg",
  "/gallery/gallry27.jpg",
  "/gallery/gallry3.jpg",
  "/gallery/gallry4.jpg",
  "/gallery/gallry7.jpg",
  "/gallery/gallry8.jpg",
  "/gallery/gallry26.jpg",
  "/gallery/gallry10.jpg",
  "/gallery/gallry11.jpg",
  "/gallery/gallry12.jpg",
  "/gallery/gallry13.jpg",
  "/gallery/gallry14.jpg",
  "/gallery/gallry15.jpg",
  "/gallery/gallry16.jpg",
  "/gallery/gallry17.jpg",
  "/gallery/gallry18.jpg",
  "/gallery/gallry19.jpg",
  "/gallery/gallry20.jpg",
  "/gallery/gallry21.jpg",
  "/gallery/gallry22.jpg",
  "/gallery/gallry23.jpg",
  "/gallery/gallry24.jpg",
  "/gallery/gallry25.jpg",
];

const Gallery: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="w-full">
        <div className="columns-2 gap-3 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-3">
          {photos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="gallery"
              width={500}
              height={500}
              className="rounded-lg"
              onClick={() => {
                setCurrentIndex(index);
                setToggler(!toggler);
              }}
            />
          ))}
        </div>
      </div>

      <FsLightbox toggler={toggler} sources={photos} slide={currentIndex + 1} />
    </div>
  );
};

export default Gallery;
