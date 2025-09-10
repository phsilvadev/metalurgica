"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGENS } from "@/app/mock/imagens";
import Close from "@public/close-1.svg";
type Props = {
  open: boolean;
  onClose: () => void;
  initialIndex: number; // ou imageUrl?: string
};

export const DetailsComponent = ({ open, onClose, initialIndex }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  return (
    <div
      className={`bg-[rgba(0,0,0,0.84)] fixed w-screen h-screen top-0 left-0 z-[999999] ${
        open ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <Image
        onClick={onClose}
        src={Close}
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
