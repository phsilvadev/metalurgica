"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { IMAGENS } from "../mock/imagens";
import { DetailsComponent } from "../components/Details/Details";

export default function GalleryPage() {
  const [IndexImag, setIndexImag] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const handleOpenModalImage = (index: number) => {
    setIndexImag(index);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <DetailsComponent
        initialIndex={IndexImag}
        open={open}
        onClose={() => setOpen(false)}
      />
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
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
                  Galeria de Fotos
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {IMAGENS.map((item, index) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tem um projeto em mente?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos transformar sua ideia em realidade
            com estruturas metálicas de qualidade.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-background text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Solicitar Orçamento
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
