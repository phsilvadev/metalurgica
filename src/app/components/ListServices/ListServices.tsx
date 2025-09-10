"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

const services = [
  {
    title: "Coberturas Metálicas",
    desc: "Coberturas resistentes e duráveis para galpões, armazéns e edificações comerciais.",
    items: [
      "Galpões industriais",
      "Armazéns graneleiros",
      "Coberturas esportivas",
    ],
  },

  {
    title: "Torres e Telecomunicações",
    desc: "Torres metálicas para telecomunicações com projeto personalizado.",
    items: ["Torres autoportantes", "Torres estaiadas", "Monopostes"],
  },

  {
    title: "Fabricação de Estruturas Pré-moldadas",
    desc: "Produção especializada de estruturas metálicas sob medida para diversos tipos de obras.",
    items: [
      "Estruturas sob medida para galpões",
      "Pré-moldados para fundações",
    ],
  },
  {
    title: "Aluguel de Munck",
    desc: "Serviço de locação de caminhão Munck para movimentação e içamento de cargas pesadas.",
    items: [
      "Içamento de estruturas metálicas",
      "Transporte de equipamentos pesados",
      "Locação com operador qualificado",
    ],
  },
  {
    title: "Perfuração de Solo",
    desc: "Perfuração de solo para fundações, postes e projetos de engenharia civil.",
    items: [
      "Perfuração para fundações profundas",

      "Perfuração para postes e estacas",
    ],
  },
  {
    title: "Implantação de Postes Rurais",
    desc: "Instalação eficiente de postes em áreas rurais com equipamentos especializados.",
    items: ["Implantação de postes de energia", "Postes para iluminação rural"],
  },
];

const ListServices = () => {
  return (
    <div>
      <div className="hidden aspect-square-custom">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg h-[360px]"
              >
                <div className="p-6">
                  <h3 className="text-xl  font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-start mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2  bg-red-600 rounded-full mr-3"></span>
                        <span className="text-start">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden aspect-square-custom-992">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg h-[360px]"
              >
                <div className="p-6">
                  <h3 className="text-xl  font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-start mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2  bg-red-600 rounded-full mr-3"></span>
                        <span className="text-start">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg h-[360px]"
              >
                <div className="p-6">
                  <h3 className="text-xl  font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-start mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2  bg-red-600 rounded-full mr-3"></span>
                        <span className="text-start">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ListServices;
