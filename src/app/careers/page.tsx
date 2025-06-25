'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Upload, User, Mail, MapPin, Briefcase, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'apply'>('jobs')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    position: '',
    experience: '',
    education: '',
    message: '',
    resume: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const availableJobs = [
    {
      id: 'engenheiro-estrutural',
      title: 'Engenheiro Estrutural',
      department: 'Engenharia',
      location: 'Balsas - MA',
      type: 'CLT - Tempo Integral',
      salary: 'R$ 8.000 - R$ 12.000',
      description: 'Responsável pelo desenvolvimento de projetos estruturais em aço, cálculos estruturais e acompanhamento de obras.',
      requirements: [
        'Graduação em Engenharia Civil ou Estrutural',
        'CREA ativo',
        'Experiência mínima de 3 anos em estruturas metálicas',
        'Conhecimento em AutoCAD e software de cálculo estrutural',
        'Conhecimento em normas técnicas (NBR 8800, NBR 6120, etc.)'
      ],
      benefits: [
        'Plano de saúde e odontológico',
        'Vale refeição e alimentação',
        'Participação nos lucros',
        'Plano de carreira',
        'Treinamentos e capacitações'
      ]
    },
    {
      id: 'soldador-especializado',
      title: 'Soldador Especializado',
      department: 'Produção',
      location: 'Balsas - MA',
      type: 'CLT - Tempo Integral',
      salary: 'R$ 3.500 - R$ 5.000',
      description: 'Execução de soldas em estruturas metálicas seguindo procedimentos técnicos e normas de qualidade.',
      requirements: [
        'Curso técnico em soldagem ou experiência comprovada',
        'Certificação em soldagem (desejável)',
        'Experiência mínima de 2 anos em soldagem estrutural',
        'Conhecimento em diferentes processos de soldagem',
        'Capacidade de leitura e interpretação de desenhos técnicos'
      ],
      benefits: [
        'Plano de saúde',
        'Vale refeição',
        'Adicional de periculosidade',
        'Equipamentos de proteção fornecidos',
        'Oportunidade de certificações'
      ]
    },
    {
      id: 'tecnico-projetos',
      title: 'Técnico em Projetos',
      department: 'Engenharia',
      location: 'Balsas - MA',
      type: 'CLT - Tempo Integral',
      salary: 'R$ 4.000 - R$ 6.000',
      description: 'Desenvolvimento de desenhos técnicos, detalhamentos de projetos e apoio à equipe de engenharia.',
      requirements: [
        'Curso técnico em Edificações, Mecânica ou áreas afins',
        'Experiência com AutoCAD e softwares de desenho técnico',
        'Conhecimento em estruturas metálicas',
        'Capacidade de trabalhar em equipe',
        'Atenção aos detalhes e precisão'
      ],
      benefits: [
        'Plano de saúde',
        'Vale refeição e transporte',
        'Participação nos lucros',
        'Ambiente de trabalho moderno',
        'Oportunidades de crescimento'
      ]
    },
    {
      id: 'montador-estruturas',
      title: 'Montador de Estruturas',
      department: 'Montagem',
      location: 'Balsas - MA',
      type: 'CLT - Tempo Integral',
      salary: 'R$ 2.800 - R$ 4.200',
      description: 'Montagem e instalação de estruturas metálicas em campo, seguindo projetos e especificações técnicas.',
      requirements: [
        'Ensino médio completo',
        'Experiência em montagem de estruturas metálicas',
        'Curso de trabalho em altura (NR-35)',
        'Disponibilidade para viagens',
        'Boa condição física'
      ],
      benefits: [
        'Plano de saúde',
        'Vale refeição',
        'Adicional de periculosidade',
        'Ajuda de custo para viagens',
        'Equipamentos de segurança fornecidos'
      ]
    },
    {
      id: 'analista-qualidade',
      title: 'Analista de Qualidade',
      department: 'Qualidade',
      location: 'Balsas - MA',
      type: 'CLT - Tempo Integral',
      salary: 'R$ 5.000 - R$ 7.500',
      description: 'Controle de qualidade dos processos produtivos, inspeções e auditorias internas.',
      requirements: [
        'Graduação em Engenharia ou áreas afins',
        'Experiência em controle de qualidade industrial',
        'Conhecimento em normas ISO 9001',
        'Conhecimento em ensaios não destrutivos (desejável)',
        'Capacidade analítica e organização'
      ],
      benefits: [
        'Plano de saúde e odontológico',
        'Vale refeição e alimentação',
        'Participação nos lucros',
        'Plano de carreira estruturado',
        'Certificações profissionais'
      ]
    },
    {
      id: 'assistente-comercial',
      title: 'Assistente Comercial',
      department: 'Comercial',
      location: 'Balsas - MA',
      type: 'CLT - Tempo Integral',
      salary: 'R$ 3.000 - R$ 4.500',
      description: 'Apoio à equipe comercial, elaboração de propostas, atendimento a clientes e follow-up de vendas.',
      requirements: [
        'Ensino superior em Administração, Marketing ou áreas afins',
        'Experiência em vendas ou atendimento ao cliente',
        'Conhecimento em pacote Office',
        'Boa comunicação e relacionamento interpessoal',
        'Organização e proatividade'
      ],
      benefits: [
        'Plano de saúde',
        'Vale refeição e transporte',
        'Comissões sobre vendas',
        'Ambiente de trabalho dinâmico',
        'Oportunidades de crescimento'
      ]
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        position: '',
        experience: '',
        education: '',
        message: '',
        resume: null
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const applyForJob = (jobId: string) => {
    const job = availableJobs.find(j => j.id === jobId)
    if (job) {
      setFormData(prev => ({ ...prev, position: job.title }))
      setActiveTab('apply')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <h1 className="text-2xl font-bold text-gray-800">Trabalhe Conosco</h1>
              <p className="text-gray-600">Faça parte da nossa equipe de especialistas</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Construa sua Carreira Conosco</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Na Embrafer, valorizamos o talento, a dedicação e a inovação. Junte-se a nós e ajude a construir 
            o futuro das estruturas metálicas no Brasil.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ambiente Colaborativo</h3>
              <p className="text-red-100">Trabalhe em equipe com profissionais experientes e apaixonados</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Crescimento Profissional</h3>
              <p className="text-red-100">Oportunidades de desenvolvimento e plano de carreira estruturado</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Benefícios Completos</h3>
              <p className="text-red-100">Pacote de benefícios competitivo e ambiente de trabalho seguro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'jobs'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Vagas Disponíveis
              </button>
              <button
                onClick={() => setActiveTab('apply')}
                className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'apply'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Enviar Currículo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeTab === 'jobs' ? (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Vagas Disponíveis</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Confira nossas oportunidades de emprego e encontre a posição ideal para seu perfil profissional.
                </p>
              </div>

              <div className="grid gap-8">
                {availableJobs.map((job) => (
                  <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Briefcase size={16} />
                                {job.department}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={16} />
                                {job.location}
                              </span>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                                {job.type}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-red-600">{job.salary}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6">{job.description}</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Requisitos:</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Benefícios:</h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="lg:ml-8">
                        <button
                          onClick={() => applyForJob(job.id)}
                          className="w-full lg:w-auto bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          <Send size={18} />
                          Candidatar-se
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Envie seu Currículo</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Preencha o formulário abaixo e envie seu currículo. Entraremos em contato quando houver uma oportunidade adequada ao seu perfil.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <p className="text-green-800">Currículo enviado com sucesso! Entraremos em contato em breve.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-center gap-3">
                  <AlertCircle size={20} className="text-red-600" />
                  <p className="text-red-800">Erro ao enviar currículo. Tente novamente.</p>
                </div>
              )}

              <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                        placeholder="(99) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cidade *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                        placeholder="Sua cidade"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cargo de Interesse
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                      >
                        <option value="">Selecione uma vaga</option>
                        {availableJobs.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                        <option value="Outros">Outros</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experiência Profissional
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                      >
                        <option value="">Selecione</option>
                        <option value="Sem experiência">Sem experiência</option>
                        <option value="1-2 anos">1-2 anos</option>
                        <option value="3-5 anos">3-5 anos</option>
                        <option value="5-10 anos">5-10 anos</option>
                        <option value="Mais de 10 anos">Mais de 10 anos</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Formação Acadêmica
                      </label>
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                        placeholder="Ex: Engenharia Civil - Universidade Federal"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currículo (PDF) *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                        />
                        <Upload size={20} className="absolute right-3 top-3 text-gray-400" />
                      </div>
                      {formData.resume && (
                        <p className="mt-2 text-sm text-green-600">
                          Arquivo selecionado: {formData.resume.name}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem Adicional
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                        placeholder="Conte-nos um pouco sobre você e por que gostaria de trabalhar na Embrafer..."
                      />
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-red-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Enviar Currículo
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para saber mais sobre as oportunidades de carreira na Embrafer.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
            Entrar em Contato
          </Link>
        </div>
      </section>
    </div>
  )
}

