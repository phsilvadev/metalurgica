'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Filter, Grid, List } from 'lucide-react'

const galleryItems = [
  {
    slug: 'galpao-industrial',
    image: '/estrutura_metalica_1.jpg',
    title: 'Galpão Industrial',
    desc: 'Estrutura completa para indústria',
    category: 'Industrial',
    location: 'Balsas - MA',
    year: '2024',
    area: '2.500 m²'
  },
  {
    slug: 'cobertura-metalica',
    image: '/estrutura_metalica_2.jpg',
    title: 'Cobertura Metálica',
    desc: 'Cobertura para área comercial',
    category: 'Comercial',
    location: 'Balsas - MA',
    year: '2024',
    area: '1.800 m²'
  },
  {
    slug: 'estrutura-predial',
    image: '/estrutura_metalica_3.jpg',
    title: 'Estrutura Predial',
    desc: 'Edifício em estrutura metálica',
    category: 'Predial',
    location: 'Balsas - MA',
    year: '2023',
    area: '3.200 m²'
  },
  {
    slug: 'projeto-residencial',
    image: '/estrutura_metalica_7.jpg',
    title: 'Projeto Residencial',
    desc: 'Casa em estrutura metálica',
    category: 'Residencial',
    location: 'Balsas - MA',
    year: '2023',
    area: '450 m²'
  },
  {
    slug: 'torre-telecomunicacao',
    image: '/estrutura_metalica_4.jpg',
    title: 'Torre de Telecomunicação',
    desc: 'Torre autoportante para telecomunicações',
    category: 'Telecomunicação',
    location: 'Balsas - MA',
    year: '2024',
    area: '45 m altura'
  },
  {
    slug: 'cobertura-esportiva',
    image: '/estrutura_metalica_5.jpg',
    title: 'Cobertura Esportiva',
    desc: 'Cobertura para quadra poliesportiva',
    category: 'Esportivo',
    location: 'Balsas - MA',
    year: '2023',
    area: '1.200 m²'
  },
  {
    slug: 'galpao-agricola',
    image: '/estrutura_metalica_6.jpg',
    title: 'Galpão Agrícola',
    desc: 'Armazém para produtos agrícolas',
    category: 'Agrícola',
    location: 'Balsas - MA',
    year: '2024',
    area: '4.000 m²'
  },
  {
    slug: 'estrutura-industrial-2',
    image: '/estrutura_metalica_8.jpeg',
    title: 'Complexo Industrial',
    desc: 'Estrutura para complexo industrial',
    category: 'Industrial',
    location: 'Balsas - MA',
    year: '2024',
    area: '5.500 m²'
  }
]

const categories = ['Todos', 'Industrial', 'Comercial', 'Predial', 'Residencial', 'Telecomunicação', 'Esportivo', 'Agrícola']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredItems = selectedCategory === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
                <h1 className="text-2xl font-bold text-gray-800">Galeria de Obras</h1>
                <p className="text-gray-600">Conheça todos os nossos projetos realizados</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    viewMode === 'grid' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    viewMode === 'list' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'
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
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={20} className="text-gray-600" />
            <span className="text-gray-700 font-medium">Filtrar por categoria:</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            Mostrando {filteredItems.length} projeto{filteredItems.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'Todos' && ` na categoria "${selectedCategory}"`}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item, index) => (
                <Link 
                  key={index}
                  href={`/gallery/${item.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.desc}</p>
                      
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex justify-between">
                          <span>Localização:</span>
                          <span className="font-medium">{item.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ano:</span>
                          <span className="font-medium">{item.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Área:</span>
                          <span className="font-medium">{item.area}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center text-sm font-medium text-red-600 group-hover:text-red-700">
                          Ver detalhes
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item, index) => (
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
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">{item.desc}</p>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div>
                            <span className="text-sm text-gray-500">Localização</span>
                            <p className="font-medium text-gray-800">{item.location}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Ano</span>
                            <p className="font-medium text-gray-800">{item.year}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Área</span>
                            <p className="font-medium text-gray-800">{item.area}</p>
                          </div>
                        </div>
                        
                        <span className="inline-flex items-center text-lg font-medium text-red-600 group-hover:text-red-700">
                          Ver detalhes completos
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
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
            Entre em contato conosco e vamos transformar sua ideia em realidade com estruturas metálicas de qualidade.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Solicitar Orçamento
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

