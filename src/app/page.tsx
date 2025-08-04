"use client";

import MapNot from "@public/map-sem-fundo.svg";
import Logo from "@public/logo.svg";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Calculator,
  Phone,
  Zap,
  Shield,
  Leaf,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Insta from "@public/social/instagram.png";
import ListServices from "./components/ListServices/ListServices";
import { DetailsComponent } from "./components/Details/Details";
import { IMAGENS } from "./mock/imagens";
import Whatsapp from "@public/social/whatsapp.png";
import Facebook from "@public/social/facebook.png";
import SectionImage from "@public/section-image-one.svg";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [img, setImag] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenModalImage = (slug: string) => {
    setImag(slug);
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
      <DetailsComponent slug={img} open={open} onClose={() => setOpen(false)} />
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <Image src={Logo} alt="Logo Moreira" width={180} />
          </div>

          <ul className="hidden md:flex space-x-8">
            {["home", "services", "gallery", "careers", "contact"].map(
              (item) => (
                <li key={item}>
                  {item === "careers" ? (
                    <a
                      href="/careers"
                      className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
                    >
                      Trabalhe Conosco
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
                    >
                      {item === "home" && "Início"}
                      {item === "services" && "Serviços"}
                      {item === "gallery" && "Galeria"}
                      {item === "contact" && "Contato"}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  )}
                </li>
              )
            )}
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
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
      >
        <div className="absolute inset-0  opacity-30"></div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-28 items-center relative z-10">
          <div className="space-y-6 me-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              <div className="text-[0.7em] font-medium">
                Buscando soluções profissionais em estruturas metálicas e
                concreto pré-moldado?
              </div>

              <div className="text-colo relative mt-4 font-extrabold">
                METALÚRGICA MOREIRA
                <span className="absolute bottom-0 left-0 w-full h-1 from-red-600 to-red-500 rounded"></span>
              </div>
              <p className="text-lg text-gray-600 font-normal leading-relaxed">
                Garantindo o desenvolmento do seu negócio
              </p>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 bg-background text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Calculator size={20} />
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <Phone size={20} />
                Entre em Contato
              </button>
            </div>
            <div className="flex">
              <Link href={"#"}>
                <Image src={Insta} alt="" />
              </Link>
              <Link href={"#"}>
                <Image src={Whatsapp} alt="" />
              </Link>
              <Link href={"#"}>
                <Image src={Facebook} alt="" />
              </Link>
            </div>
            w
          </div>
          <div className="relative">
            <Image
              src={SectionImage}
              alt="Estrutura Metálica"
              width={600}
              height={500}
              className="rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-600" />
        </div>
      </section>

      <section className="flex justify-end items-center relative overflow-hidden">
        <div className="w-[60%] text-[#fff] bg-background h-[1500px] rounded-[100%] absolute left-[-200px] flex justify-center items-center">
          <section className="w-[45%]">
            <div className="mb-[50px]">
              <h1 className="text-[3.5em] font-bold">ONDE ATUAMOS</h1>
              <h5>Nas seguintes região do Brasil</h5>
            </div>
            <p className="text-[1.3em] font-light">
              <strong className="font-bold">Metalúrgica Moreira</strong> está
              presente estrategicamente nas regiões Norte e Nordeste do Brasil,
              oferecendo soluções metalúrgicas sob medida com agilidade,
              qualidade e compromisso
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center mt-[70px] justify-center gap-2 bg-[#fff] text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Calculator size={20} />
              Solicitar Orçamento
            </button>
          </section>
        </div>
        <div className="w-[50%]  ps-[100px] pt-[100px]">
          <Image src={MapNot} alt="" className="w-[70%] " />
          <section className="p-5 flex gap-[10%]">
            {[
              ["Acre (AC)", "Amapá (AP)", "Amazonas (AM)", "Pará (PA)"],
              [
                "Rondônia (RO)",
                "Roraima (RR)",
                "Tocantins (TO)",
                "Alagoas (AL)",
              ],
              ["Bahia (BA)", "Ceará (CE)", "Maranhão (MA)", "Paraíba (PB)"],
              ["Piauí (PI)", "Rio Grande do Norte (RN)", "Sergipe (SE)"],
            ].map((item, index) => (
              <ul key={index}>
                {item.map((subItem, index) => (
                  <li className="mb-2" key={index}>
                    {subItem}
                  </li>
                ))}
              </ul>
            ))}
          </section>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluções completas em estruturas metálicas para todos os tipos de
              projetos
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
                <div className="w-20 h-20 bg-background from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
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

      {/* Services Section */}

      {/* About Section */}
      {/* <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Por que escolher a Metalúgica Moreira?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Metalúgica Moreira trabalha com estruturas metálicas em
                Balsas, nossos engenheiros estão preparados para qualquer
                desafio, sempre procurando atender todos os requisitos de
                qualquer obra.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Engenheiros Especializados",
                    desc: "Equipe preparada para elaboração de grandes e pequenos projetos",
                  },
                  {
                    icon: Wrench,
                    title: "Fabricação Própria",
                    desc: "Fabricamos e instalamos estruturas em todo território nacional",
                  },
                  {
                    icon: Handshake,
                    title: "Compromisso",
                    desc: "Agilidade e compromisso em todos os nossos projetos",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="bg-gray-50 p-6 rounded-2xl border-l-4 border-red-600 italic">
                <p className="text-gray-700 mb-4">
                  &ldquo;Só aqueles que arriscam ir longe demais podem descobrir
                  até onde é possível chegar.&rdquo;
                </p>
                <cite className="text-red-600 font-semibold not-italic">
                  - Eneas Soares, Co-Fundador & Diretor
                </cite>
              </blockquote>
            </div>

            <div className="relative">
              <Image
                src="/estrutura_metalica_6.jpg"
                alt="Sobre a Embrafer"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Galeria de Fotos
            </h2>
            <p className="text-lg text-gray-600">
              Conheça alguns dos nossos projetos realizados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {IMAGENS.slice(0, 4).map((item, index) => (
              <a
                key={index}
                onClick={() => handleOpenModalImage(item.slug)}
                className="relative group overflow-hidden rounded-2xl cursor-pointer block hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.slug}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    {/* <h4 className="text-lg font-semibold mb-2">{item.title}</h4> */}
                    {/* <p className="text-gray-300 mb-3">{item.desc}</p> */}
                    {/* <span className="inline-flex items-center text-sm font-medium text-red-300">
                      Ver detalhes
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span> */}
                  </div>
                </div>
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
                    info: "(99) 98814-7920 / (99) 98451-0890 / (99) 99144-6287",
                  },
                  {
                    icon: "envelope",
                    title: "Email",
                    info: "contato@embrafer.com",
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
                      <p className="text-gray-600">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5987340788447!2d-46.0394201!3d-7.509470899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d5ef60c6a2f87b%3A0x5a00d29b7df8f416!2sMetal%C3%BArgica%20Moreira!5e0!3m2!1spt-BR!2sbr!4v1754004927875!5m2!1spt-BR!2sbr"
                // width="760"
                // height="450"
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
                  (99) 99144-6287
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  contato@embrafer.com
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
            <p>
              &copy; 2025 Metalugica - Moreira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
