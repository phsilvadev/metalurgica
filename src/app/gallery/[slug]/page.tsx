'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Ruler, Tag, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const galleryData: { [key: string]: {
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  images: string[];
  features: string[];
  specifications: { [key: string]: string };
  client: string;
  duration: string;
} } = {
  'galpao-industrial': {
    title: 'Galpão Industrial',
    category: 'Industrial',
    location: 'Balsas - MA',
    year: '2024',
    area: '2.500 m²',
    description: 'Projeto completo de galpão industrial com estrutura metálica robusta, desenvolvido para atender às necessidades de uma indústria de grande porte. A estrutura foi projetada para suportar equipamentos pesados e proporcionar amplo espaço interno sem pilares intermediários.',
    images: [
      '/estrutura_metalica_1.jpg',
      '/estrutura_metalica_2.jpg',
      '/estrutura_metalica_3.jpg'
    ],
    features: [
      'Estrutura em aço galvanizado',
      'Cobertura com telhas termoacústicas',
      'Pé direito de 12 metros',
      'Sistema de drenagem pluvial',
      'Preparação para ponte rolante',
      'Fechamento lateral em alvenaria'
    ],
    specifications: {
      'Área Total': '2.500 m²',
      'Pé Direito': '12 metros',
      'Vão Livre': '25 metros',
      'Comprimento': '100 metros',
      'Tipo de Aço': 'ASTM A572 Gr. 50',
      'Cobertura': 'Telha termoacústica 30mm'
    },
    client: 'Indústria Metalúrgica Balsas Ltda.',
    duration: '4 meses'
  },
  'cobertura-metalica': {
    title: 'Cobertura Metálica',
    category: 'Comercial',
    location: 'Balsas - MA',
    year: '2024',
    area: '1.800 m²',
    description: 'Cobertura metálica para área comercial com design moderno e funcional. O projeto priorizou a estética e a funcionalidade, criando um ambiente agradável para clientes e funcionários.',
    images: [
      '/estrutura_metalica_2.jpg',
      '/estrutura_metalica_5.jpg',
      '/estrutura_metalica_6.jpg'
    ],
    features: [
      'Design arquitetônico moderno',
      'Estrutura leve e resistente',
      'Iluminação natural otimizada',
      'Sistema de ventilação integrado',
      'Acabamento em pintura eletrostática',
      'Instalação rápida e limpa'
    ],
    specifications: {
      'Área Coberta': '1.800 m²',
      'Altura Máxima': '8 metros',
      'Vão Livre': '20 metros',
      'Inclinação': '10%',
      'Material': 'Aço carbono SAE 1020',
      'Acabamento': 'Pintura eletrostática'
    },
    client: 'Shopping Center Balsas',
    duration: '2 meses'
  },
  'estrutura-predial': {
    title: 'Estrutura Predial',
    category: 'Predial',
    location: 'Balsas - MA',
    year: '2023',
    area: '3.200 m²',
    description: 'Estrutura metálica completa para edifício comercial de múltiplos pavimentos. O projeto contemplou toda a estrutura principal, desde as fundações até a cobertura, garantindo segurança e durabilidade.',
    images: [
      '/estrutura_metalica_3.jpg',
      '/estrutura_metalica_4.jpg',
      '/estrutura_metalica_7.jpg'
    ],
    features: [
      'Estrutura para 5 pavimentos',
      'Lajes mistas (steel deck + concreto)',
      'Escadas metálicas integradas',
      'Sistema anti-incêndio',
      'Proteção contra corrosão',
      'Flexibilidade para layout interno'
    ],
    specifications: {
      'Área por Pavimento': '640 m²',
      'Número de Pavimentos': '5',
      'Altura Total': '20 metros',
      'Carga de Projeto': '500 kg/m²',
      'Tipo de Laje': 'Steel deck + concreto',
      'Proteção': 'Tinta intumescente'
    },
    client: 'Construtora Horizonte Ltda.',
    duration: '6 meses'
  },
  'projeto-residencial': {
    title: 'Projeto Residencial',
    category: 'Residencial',
    location: 'Balsas - MA',
    year: '2023',
    area: '450 m²',
    description: 'Casa residencial com estrutura metálica, combinando modernidade, sustentabilidade e conforto. O projeto foi desenvolvido para uma família que buscava uma construção rápida e de alta qualidade.',
    images: [
      '/estrutura_metalica_7.jpg',
      '/estrutura_metalica_1.jpg',
      '/estrutura_metalica_8.jpeg'
    ],
    features: [
      'Arquitetura contemporânea',
      'Estrutura 100% metálica',
      'Isolamento termoacústico',
      'Grandes vãos livres',
      'Sustentabilidade ambiental',
      'Construção industrializada'
    ],
    specifications: {
      'Área Construída': '450 m²',
      'Número de Pavimentos': '2',
      'Quartos': '4 suítes',
      'Garagem': '3 vagas',
      'Estrutura': 'Aço galvanizado',
      'Fechamento': 'Drywall + isolamento'
    },
    client: 'Família Silva',
    duration: '3 meses'
  },
  'torre-telecomunicacao': {
    title: 'Torre de Telecomunicação',
    category: 'Telecomunicação',
    location: 'Balsas - MA',
    year: '2024',
    area: '45 m altura',
    description: 'Torre autoportante para telecomunicações com 45 metros de altura. Projeto desenvolvido seguindo rigorosamente as normas técnicas e de segurança para estruturas de telecomunicações.',
    images: [
      '/estrutura_metalica_4.jpg',
      '/estrutura_metalica_3.jpg',
      '/estrutura_metalica_2.jpg'
    ],
    features: [
      'Torre autoportante',
      'Estrutura treliçada',
      'Sistema de aterramento',
      'Proteção contra descargas atmosféricas',
      'Plataformas de trabalho',
      'Escada marinheiro com guarda-corpo'
    ],
    specifications: {
      'Altura': '45 metros',
      'Tipo': 'Autoportante treliçada',
      'Carga de Vento': '150 km/h',
      'Base': '4x4 metros',
      'Material': 'Aço galvanizado a fogo',
      'Antenas': 'Capacidade para 12 antenas'
    },
    client: 'TeleCom Balsas S.A.',
    duration: '1 mês'
  },
  'cobertura-esportiva': {
    title: 'Cobertura Esportiva',
    category: 'Esportivo',
    location: 'Balsas - MA',
    year: '2023',
    area: '1.200 m²',
    description: 'Cobertura para quadra poliesportiva com estrutura metálica espacial. O projeto proporcionou proteção contra intempéries mantendo excelente ventilação natural.',
    images: [
      '/estrutura_metalica_5.jpg',
      '/estrutura_metalica_6.jpg',
      '/estrutura_metalica_1.jpg'
    ],
    features: [
      'Estrutura espacial',
      'Cobertura translúcida',
      'Ventilação natural',
      'Iluminação LED integrada',
      'Arquibancadas metálicas',
      'Drenagem pluvial eficiente'
    ],
    specifications: {
      'Área Coberta': '1.200 m²',
      'Dimensões da Quadra': '40x30 metros',
      'Altura Livre': '12 metros',
      'Tipo de Cobertura': 'Policarbonato alveolar',
      'Estrutura': 'Treliça espacial',
      'Capacidade': '500 pessoas'
    },
    client: 'Prefeitura Municipal de Balsas',
    duration: '2 meses'
  },
  'galpao-agricola': {
    title: 'Galpão Agrícola',
    category: 'Agrícola',
    location: 'Balsas - MA',
    year: '2024',
    area: '4.000 m²',
    description: 'Armazém para produtos agrícolas com grande capacidade de estocagem. Estrutura projetada para resistir às condições climáticas da região e facilitar o manuseio de grãos.',
    images: [
      '/estrutura_metalica_6.jpg',
      '/estrutura_metalica_1.jpg',
      '/estrutura_metalica_5.jpg'
    ],
    features: [
      'Grande capacidade de armazenagem',
      'Ventilação natural cruzada',
      'Piso industrial',
      'Sistema de secagem integrado',
      'Portões de grande abertura',
      'Estrutura resistente à corrosão'
    ],
    specifications: {
      'Área Total': '4.000 m²',
      'Capacidade': '8.000 toneladas',
      'Pé Direito': '15 metros',
      'Vão Livre': '30 metros',
      'Portões': '6 metros de altura',
      'Ventilação': 'Sistema natural'
    },
    client: 'Cooperativa Agrícola de Balsas',
    duration: '5 meses'
  },
  'estrutura-industrial-2': {
    title: 'Complexo Industrial',
    category: 'Industrial',
    location: 'Balsas - MA',
    year: '2024',
    area: '5.500 m²',
    description: 'Complexo industrial completo com múltiplas edificações interligadas. Projeto desenvolvido para otimizar o fluxo produtivo e garantir máxima eficiência operacional.',
    images: [
      '/estrutura_metalica_8.jpeg',
      '/estrutura_metalica_3.jpg',
      '/estrutura_metalica_4.jpg'
    ],
    features: [
      'Múltiplas edificações integradas',
      'Sistema de transporte interno',
      'Controle ambiental',
      'Estrutura modular expansível',
      'Sistemas de segurança avançados',
      'Eficiência energética'
    ],
    specifications: {
      'Área Total': '5.500 m²',
      'Edificações': '3 galpões + escritórios',
      'Altura Máxima': '18 metros',
      'Ponte Rolante': '20 toneladas',
      'Energia': 'Sistema fotovoltaico',
      'Certificação': 'ISO 14001'
    },
    client: 'Indústria Química Cerrado Ltda.',
    duration: '8 meses'
  }
}

export default function GalleryDetailPage({ params }: { params: { slug: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  
  const project = galleryData[params.slug]

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando projeto...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Projeto não encontrado</h1>
          <p className="text-gray-600 mb-8">O projeto que você está procurando não existe.</p>
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Voltar à Galeria
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/gallery"
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Voltar à Galeria
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-800">{project.title}</h1>
              </div>
              <p className="text-gray-600">Detalhes completos do projeto</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Gallery */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />
          
          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>
        
        {/* Thumbnail Gallery */}
        {project.images.length > 1 && (
          <div className="container mx-auto px-4 py-6">
            <div className="flex gap-4 justify-center overflow-x-auto">
              {project.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index ? 'border-red-600' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Info */}
              <div className="grid md:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-red-600" />
                  <div>
                    <p className="text-sm text-gray-500">Localização</p>
                    <p className="font-semibold text-gray-800">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-red-600" />
                  <div>
                    <p className="text-sm text-gray-500">Ano</p>
                    <p className="font-semibold text-gray-800">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler size={20} className="text-red-600" />
                  <div>
                    <p className="text-sm text-gray-500">Área</p>
                    <p className="font-semibold text-gray-800">{project.area}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Tag size={20} className="text-red-600" />
                  <div>
                    <p className="text-sm text-gray-500">Categoria</p>
                    <p className="font-semibold text-gray-800">{project.category}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre o Projeto</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Características Principais</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Especificações Técnicas</h2>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                  {Object.entries(project.specifications).map(([key, value], index) => (
                    <div key={index} className={`flex justify-between items-center p-4 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}>
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-600">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Summary */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Resumo do Projeto</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Cliente</p>
                    <p className="font-semibold text-gray-800">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Duração</p>
                    <p className="font-semibold text-gray-800">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Concluído
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Interessado em um projeto similar?</h3>
                <p className="text-red-100 mb-6">
                  Entre em contato conosco e vamos desenvolver a solução ideal para suas necessidades.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 w-full justify-center"
                >
                  <ExternalLink size={18} />
                  Solicitar Orçamento
                </Link>
              </div>

              {/* Related Projects */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Projetos Relacionados</h3>
                <div className="space-y-4">
                  {Object.entries(galleryData)
                    .filter(([slug, data]) => data.category === project.category && slug !== params.slug)
                    .slice(0, 2)
                    .map(([slug, data]) => (
                      <Link 
                        key={slug}
                        href={`/gallery/${slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                          <Image
                            src={data.images[0]}
                            alt={data.title}
                            width={60}
                            height={60}
                            className="w-15 h-15 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                              {data.title}
                            </h4>
                            <p className="text-sm text-gray-500">{data.area}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
                <Link 
                  href="/gallery"
                  className="block mt-4 text-center text-red-600 hover:text-red-700 font-medium"
                >
                  Ver todos os projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

