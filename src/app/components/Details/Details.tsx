"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGENS } from "@/app/mock/imagens";

type Props = {
  open: boolean;
  onClose: () => void;
  slug?: string; // ou imageUrl?: string
};

export const DetailsComponent = ({ open, onClose, slug }: Props) => {
  const initialIndex = slug ? IMAGENS.findIndex((img) => img.slug === slug) : 0;

  const [currentIndex, setCurrentIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === IMAGENS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? IMAGENS.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.84)] fixed w-screen h-screen top-0 left-0 z-[999999] ${
        open ? "flex" : "hidden"
      } justify-center items-center`}
    >
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
        src={IMAGENS[currentIndex].image}
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
