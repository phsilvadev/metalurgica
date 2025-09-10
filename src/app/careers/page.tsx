"use client";

import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Voltar ao Início
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Trabalhe Conosco
              </h1>
              <p className="text-gray-600">
                Faça parte da nossa equipe de especialistas
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-background text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Construa sua Carreira Conosco
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Na Metalurgica moreira, valorizamos o talento, a dedicação e a
            inovação. Junte-se a nós e ajude a construir o futuro das estruturas
            metálicas no Brasil.
          </p>
        </div>
      </section>

      <section className="py-12 h-[700px] flex justify-center items-center flex-col">
        <div className="container mx-auto px-4">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Envie seu Currículo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Envie seu currículo diretamente pelo WhatsApp e entraremos em
                contato quando houver uma oportunidade adequada ao seu perfil.
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20enviar%20meu%20currículo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Enviar pelo WhatsApp
        </a>
      </section>

      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para saber mais sobre as oportunidades de
            carreira na Metalúrgica Moreira.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-background text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
            Entrar em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}
