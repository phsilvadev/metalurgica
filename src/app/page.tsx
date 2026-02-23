"use client";

import Logo from "@public/logo-home.png";
import {
  Instagram,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Shield,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { DetailsComponent } from "./components/Details/Details";
import ListServices from "./components/ListServices/ListServices";
import { IMAGENS } from "./mock/imagens";
import bgHeroSection from "@public/hero-section-bg.jpeg";
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indeImage, setIndexImag] = useState<number>(0);
  const [open, setOpen] = useState(false);
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

  const content = {
    hero: {
      title: "Do aço à estrutura tudo em um só lugar",
      subtitle:
        "Soluções completas em metalurgia para o Norte e Nordeste do Brasil",
    },
    products: {
      title: "NOSSOS PRODUTOS",
      subtitle: "",
    },
    services: {
      title: "Nossos Serviços",
      subtitle:
        "Soluções completas em estruturas metálicas para todos os tipos de projetos",
    },
    gallery: {
      title: "Galeria de Fotos",
      subtitle: "Conheça alguns dos nossos projetos realizados",
    },
  };

  const handleOpenModalImage = (index: number) => {
    setIndexImag(index);
    setOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        .products-swiper {
          padding-bottom: 40px !important;
          overflow: visible !important;
        }
      `}</style>
      <DetailsComponent
        initialIndex={indeImage}
        open={open}
        onClose={() => setOpen(false)}
      />
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-lg ${isScrolled ? "bg-[#fff]" : "bg-white/40"}`}
      >
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
              href="https://www.instagram.com/aco_moreira/"
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
            <Image src={Logo} alt="Logo Moreira" width={180} />
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
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
                  >
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {[
                "home",
                "services",
                "about",
                "gallery",
                "careers",
                "contact",
                "requestQuote",
                "contactUs",
              ].map((item) =>
                item === "careers" ? (
                  <a
                    key={item}
                    href="/careers"
                    className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Trabalhe Conosco
                  </a>
                ) : (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors duration-300"
                  >
                    {item === "home" && "Início"}
                    {item === "services" && "Serviços"}
                    {item === "gallery" && "Galeria"}
                    {item === "contact" && "Contato"}
                    {item === "requestQuote" && "Solicitar Orçamento"}
                    {item === "contactUs" && "Entre em Contato"}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="xl:min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden p-[50px] pb-[150px] pt-[200px] xl:p-0 xl:pt-0 xl:pb-0"
      >
        <Image
          src={bgHeroSection}
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8">{content.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-[#D82224] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Nossos Serviços
            </button>
            <a
              href="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              Nossos Produtos
            </a>
          </div>
        </div>
      </section>

      <section
        id="production"
        className="py-20 pb-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {content.products.title}
            </h2>
          </div>

          {/* Swiper de Produtos */}
          <Swiper
            slidesPerView={4}
            spaceBetween={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="px-10">
                <div className="bg-gray-800 w-[87%] rounded-2xl overflow-hidden hover:bg-gray-700 transition-colors duration-300">
                  <div className="h-60 bg-gray-700 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white text-center capitalize">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <a
          href="/products"
          className="mx-auto block bg-[#D82224] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors w-fit"
        >
          Ver Mais Produtos
        </a>
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D82224]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {content.services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.services.subtitle}
            </p>
          </div>

          <ListServices />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Velocidade",
                desc: "Estruturas pré-fabricadas que aceleram sua obra",
              },
              {
                icon: Shield,
                title: "Segurança",
                desc: "Máxima segurança e longevidade para seu projeto",
              },
              {
                icon: Leaf,
                title: "Sustentabilidade",
                desc: "Material 100% reaproveitável e ecologicamente correto",
              },
              {
                icon: TrendingUp,
                title: "Economia",
                desc: "Previsibilidade de custos e excelente custo-benefício",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-[#D82224] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {content.gallery.title}
            </h2>
            <p className="text-lg text-gray-600">{content.gallery.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {IMAGENS.slice(0, 4).map((item, index) => (
              <a
                key={index}
                onClick={() => handleOpenModalImage(index)}
                className="relative group overflow-hidden rounded-2xl cursor-pointer block hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.slug}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 bg-background text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0l-4-4m4 4l-4 4"
                />
              </svg>
              Ver Todas as Galerias
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Entre em Contato
                </h2>
                <p className="text-lg text-gray-600">
                  Solicite seu orçamento sem compromisso. Nossa equipe está
                  pronta para atender você.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Telefone",
                    info: [
                      "(99) 99112-8580 - Revenda",
                      "(99) 98814-7920",
                      "(99) 98451-0890",
                      "(99) 99144-6287",
                    ],
                  },
                  {
                    icon: "envelope",
                    title: "Email",
                    info: "contato@acomoreira.com.br",
                  },
                  {
                    icon: "map-pin",
                    title: "Localização",
                    info: "Balsas - MA",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                      {contact.icon === Phone ? (
                        <Phone size={24} className="text-white" />
                      ) : contact.icon === "envelope" ? (
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {contact.title}
                      </h4>

                      {Array.isArray(contact.info) ? (
                        contact.info.map((tel) => <p key={tel}>{tel}</p>)
                      ) : (
                        <p>{contact.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl h-[400px] xl:h-auto">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5987340788447!2d-46.0394201!3d-7.509470899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d5ef60c6a2f87b%3A0x5a00d29b7df8f416!2sMetal%C3%BArgica%20Moreira!5e0!3m2!1spt-BR!2sbr!4v1754004927875!5m2!1spt-BR!2sbr"
                loading="lazy"
              ></iframe>
              {/* <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Descreva seu projeto"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                  Enviar Mensagem
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
