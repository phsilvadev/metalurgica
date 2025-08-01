"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import { IMAGENS } from "../mock/imagens";
import { DetailsComponent } from "../components/Details/Details";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [img, setImag] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenModalImage = (slug: string) => {
    setImag(slug);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <DetailsComponent slug={img} open={open} onClose={() => setOpen(false)} />
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

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    viewMode === "grid"
                      ? "bg-white text-red-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    viewMode === "list"
                      ? "bg-white text-red-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      {/* <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={20} className="text-gray-600" />
            <span className="text-gray-700 font-medium">
              Filtrar por categoria:
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {IMAGENS.map((item, index) => (
                <Link
                  href={""}
                  key={index}
                  onClick={() => handleOpenModalImage(item.slug)}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.slug}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {IMAGENS.map((item, index) => (
                <Link
                  key={index}
                  href={`/gallery/${item.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.slug}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
