"use client";

import Logo from "@public/logo-home.png";
import { Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BARRA_CHATA from "@public/products/01.jpeg";
import FERRO_MECANICO_LISO from "@public/products/08.jpeg";
import LAMBRIL_ONDULADO from "@public/products/02.jpeg";
import LAMBRIL_BAGUETADO from "@public/products/03.jpeg";
import TELHA_TRAPEZIO from "@public/products/04.jpeg";
import PERFIL_SIMPLES_E_ENRIJECIDO from "@public/products/06.jpeg";
import TUBO_RETANGULAR from "@public/products/05.jpeg";
import TUBO_QUADRADO from "@public/products/07.jpeg";
import COLUNA_5_16_PRONTA_8MM_6M from "@public/products/09.jpeg";
import CANTONEIRA from "@public/products/11.jpeg";
import VERGALHAO from "@public/products/10.jpeg";
import TRELIÇA from "@public/products/12.jpeg";
import CHAPAS_METALICAS from "@public/products/13.jpeg";
import TUBO_REDONDO from "@public/products/14.jpeg";

export default function ProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "barra chata",
      image: BARRA_CHATA,
      description: "Barras chatas de aço para diversas aplicações estruturais",
    },
    {
      id: 2,
      name: "lambril ondulado",
      image: LAMBRIL_ONDULADO,
      description: "Lambril ondulado para revestimento e cobertura",
    },
    {
      id: 3,
      name: "lambril baguetado",
      image: LAMBRIL_BAGUETADO,
      description: "Lambril baguetado para acabamento e revestimento",
    },
    {
      id: 4,
      name: "telha trapézio",
      image: TELHA_TRAPEZIO,
      description: "Telhas trapézio metálicas para coberturas industriais",
    },
    {
      id: 5,
      name: "tubo retangular",
      image: TUBO_RETANGULAR,
      description: "Tubos retangulares para estruturas metálicas",
    },
    {
      id: 6,
      name: "perfil simples e enrijecido",
      image: PERFIL_SIMPLES_E_ENRIJECIDO,
      description: "Perfis simples e enrijecidos para estruturas",
    },
    {
      id: 7,
      name: "tubo quadrado",
      image: TUBO_QUADRADO,
      description: "Tubos quadrados para construção civil",
    },
    {
      id: 8,
      name: "ferro mecânico liso",
      image: FERRO_MECANICO_LISO,
      description: "Ferro mecânico liso para aplicações diversas",
    },
    {
      id: 9,
      name: "coluna 5/16 pronta 8mm 6m",
      image: COLUNA_5_16_PRONTA_8MM_6M,
      description: "Colunas prontas para estruturas metálicas",
    },
    {
      id: 10,
      name: "vergalhão",
      image: VERGALHAO,
      description: "Vergalhões de aço para construção civil",
    },
    {
      id: 11,
      name: "cantoneira",
      image: CANTONEIRA,
      description: "Cantoneiras metálicas para reforço estrutural",
    },
    {
      id: 12,
      name: "treliça",
      image: TRELIÇA,
      description: "Treliças metálicas para coberturas e estruturas",
    },
    {
      id: 13,
      name: "chapas metálicas",
      image: CHAPAS_METALICAS,
      description: "Chapas metálicas em diversos tamanhos e espessuras",
    },
    {
      id: 14,
      name: "tubo redondo",
      image: TUBO_REDONDO,
      description: "Tubos redondos para estruturas e aplicações diversas",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <div className="h-[50px] bg-[#D82224] w-full flex items-center px-4">
          <div className="container mx-auto flex justify-between items-center">
            <a
              href="https://maps.google.com/?q=R.+22,+N°50+-+Potosi,+Balsas+-+MA,+65800-000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors text-sm flex items-center gap-2"
            >
              <MapPin size={22} />
              <div>
                <div className="font-semibold">Balsas - MA</div>
                <div className="text-xs opacity-90">
                  R. 22, N°50 - Potosi, 65800-000
                </div>
              </div>
            </a>
            <a
              href="https://instagram.com/metalurgicamoreira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center ">
          <div className="flex flex-col">
            <Link href="/">
              <Image src={Logo} alt="Logo Moreira" width={180} />
            </Link>
          </div>

          <ul className="hidden md:flex space-x-8 justify-center items-center">
            {[
              "home",
              "production",
              "services",
              "gallery",
              "careers",
              "requestQuote",
            ].map((item) => (
              <li key={item}>
                {item === "careers" ? (
                  <a
                    href="/careers"
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
                  >
                    Trabalhe Conosco
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : item === "requestQuote" ? (
                  <a
                    href="https://wa.me/559991128580?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#D82224] text-white px-8 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Solicitar Orçamento
                  </a>
                ) : (
                  <button className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group">
                    {item === "home" && "Início"}
                    {item === "production" && "Produtos"}
                    {item === "services" && "Serviços"}
                    {item === "gallery" && "Galeria"}

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <main className="pt-32 mt-[90px] pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Nossos Produtos
            </h1>
            <p className="text-xl text-gray-600">
              Estruturas metálicas de alta qualidade para todos os tipos de
              projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-60 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src={Logo} alt="Logo Moreira" width={200} />
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {["Início", "Serviços", "Sobre", "Contato"].map((link) => (
                  <li key={link}>
                    <button className="text-gray-300 hover:text-red-600 transition-colors duration-300">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Coberturas Metálicas</li>
                <li>Estruturas Prediais</li>
                <li>Torres de Telecomunicação</li>
                <li>Escadas e Passarelas</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  (99) 99112-8580
                </p>

                <p className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Balsas - MA
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Aço Moreira. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
