"use client";

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
  Users,
  Wrench,
  Handshake,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-white">
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
            <Image
              src={require("@public/logo.svg")}
              alt="Logo Moreira"
              width={180}
            />
          </div>

          <ul className="hidden md:flex space-x-8">
            {["home", "services", "about", "gallery", "careers", "contact"].map(
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
                      {item === "about" && "Sobre"}
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
                    {item === "about" && "Sobre"}
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
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-28 items-center relative z-10">
          <div className="space-y-6 me-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Estruturas Metálicas em{" "}
              <span className="text-red-600 relative">
                Balsas MA
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-500 rounded"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              O poder do aço com uma empresa de confiança. Soluções completas em
              estruturas metálicas com qualidade, segurança e agilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
          </div>
          <div className="relative">
            <Image
              src="/estrutura_metalica_1.jpg"
              alt="Estrutura Metálica"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-600" />
        </div>
      </section>

      {/* Features Section */}
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
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "/estrutura_metalica_2.jpg",
                title: "Coberturas Metálicas",
                desc: "Coberturas resistentes e duráveis para galpões, armazéns e edificações comerciais.",
                items: [
                  "Galpões industriais",
                  "Armazéns graneleiros",
                  "Coberturas esportivas",
                ],
              },
              {
                image: "/estrutura_metalica_3.jpg",
                title: "Estruturas Prediais",
                desc: "Estruturas completas para edifícios residenciais e comerciais.",
                items: [
                  "Casas e sobrados",
                  "Edifícios comerciais",
                  "Mezaninos",
                ],
              },
              {
                image: "/estrutura_metalica_4.jpg",
                title: "Torres e Telecomunicações",
                desc: "Torres metálicas para telecomunicações com projeto personalizado.",
                items: [
                  "Torres autoportantes",
                  "Torres estaiadas",
                  "Monopostes",
                ],
              },
              {
                image: "/estrutura_metalica_5.jpg",
                title: "Escadas e Passarelas",
                desc: "Escadas metálicas e passarelas para interior e exterior.",
                items: [
                  "Escadas industriais",
                  "Passarelas de acesso",
                  "Guarda-corpos",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
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
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Galeria de Obras
            </h2>
            <p className="text-lg text-gray-600">
              Conheça alguns dos nossos projetos realizados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                slug: "galpao-industrial",
                image: "/estrutura_metalica_1.jpg",
                title: "Galpão Industrial",
                desc: "Estrutura completa para indústria",
                category: "Industrial",
              },
              {
                slug: "cobertura-metalica",
                image: "/estrutura_metalica_2.jpg",
                title: "Cobertura Metálica",
                desc: "Cobertura para área comercial",
                category: "Comercial",
              },
              {
                slug: "estrutura-predial",
                image: "/estrutura_metalica_3.jpg",
                title: "Estrutura Predial",
                desc: "Edifício em estrutura metálica",
                category: "Predial",
              },
              {
                slug: "projeto-residencial",
                image: "/estrutura_metalica_7.jpg",
                title: "Projeto Residencial",
                desc: "Casa em estrutura metálica",
                category: "Residencial",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={`/gallery/${item.slug}`}
                className="relative group overflow-hidden rounded-2xl cursor-pointer block hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-300 mb-3">{item.desc}</p>
                    <span className="inline-flex items-center text-sm font-medium text-red-300">
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
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
                  { icon: Phone, title: "Telefone", info: "(41) 3082-8850" },
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
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
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

            <div className="bg-gray-50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
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
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src={require("@public/logo.svg")}
                alt="Logo Moreira"
                width={200}
              />
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
                  (41) 3082-8850
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
