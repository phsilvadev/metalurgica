"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/estrutura_metalica_1.jpg",
  "/estrutura_metalica_2.jpg",
  "/estrutura_metalica_3.jpg",
];

export const DetailsComponent = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[rgba(0,0,0,0.84)] fixed w-screen h-screen top-0 left-0 z-[999999] hidden justify-center items-center">
      <Image
        onClick={onClose}
        src={require("@public/close-1.svg")}
        alt=""
        className="absolute right-9 top-7 w-[45px] h-[45px] cursor-pointer"
      />
      <button
        onClick={prevSlide}
        className="absolute left-5  text-3xl z-50 p-[15px] px-[18px] bg-[#fff] rounded-[100px]"
      >
        ⬅
      </button>

      <Image
        src={images[currentIndex]}
        alt={`imagem-${currentIndex}`}
        width={800}
        height={600}
        className="rounded-xl object-contain"
      />

      <button
        onClick={nextSlide}
        className="absolute right-5 text-3xl z-50 p-[15px] px-[18px] bg-[#fff] rounded-[100px]"
      >
        ➡
      </button>
    </div>
  );
};
