"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Image as ImageIcon, Package, Users, BarChart3, Home, LogOut, Menu, X, FileText, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import ProductModal from "../../components/ProductModal/ProductModal";
import ContentModal from "../../components/ContentModal/ContentModal";
import FeatureModal from "../../components/FeatureModal/FeatureModal";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productModal, setProductModal] = useState({ open: false, product: null });
  const [contentModal, setContentModal] = useState({ open: false, content: null });
  const [featureModal, setFeatureModal] = useState({ open: false, feature: null });
  const [content, setContent] = useState<any[]>([]);
  const [features, setFeatures] = useState([]);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/verify');
      if (!res.ok) {
        router.push('/admin/login');
        return;
      }
      fetchData();
    } catch (error) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const [productsRes, servicesRes, galleryRes, contentRes, featuresRes] = await Promise.all([
        fetch("/api/products"),
        fetch("/api/services"),
        fetch("/api/gallery"),
        fetch("/api/content"),
        fetch("/api/features"),
      ]);

      setProducts(await productsRes.json());
      setServices(await servicesRes.json());
      setGallery(await galleryRes.json());
      setContent(await contentRes.json());
      setFeatures(await featuresRes.json());
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  const deleteItem = async (type: string, id: string) => {
    if (!confirm("Tem certeza que deseja excluir?")) return;

    try {
      await fetch(`/api/${type}/${id}`, { method: "DELETE" });
      fetchData();
    } catch (error) {
      alert("Erro ao excluir item");
    }
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "content", label: "Conteúdo", icon: FileText },
              { id: "products", label: "Produtos", icon: Package },
              { id: "services", label: "Serviços", icon: Users },
              { id: "features", label: "Features", icon: Zap },
              { id: "gallery", label: "Galeria", icon: ImageIcon },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {setActiveTab(item.id); setSidebarOpen(false)}}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-[#D82224] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon size={20} className="mr-3" />
                {item.label}
              </button>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <button
              onClick={() => window.open('/', '_blank')}
              className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Home size={20} className="mr-3" />
              Ver Site
            </button>
            <button
              onClick={logout}
              className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              Sair
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
                >
                  <Menu size={24} />
                </button>
                <h1 className="text-2xl font-bold text-gray-900">
                  {activeTab === 'dashboard' && 'Dashboard'}
                  {activeTab === 'content' && 'Conteúdo'}
                  {activeTab === 'products' && 'Produtos'}
                  {activeTab === 'services' && 'Serviços'}
                  {activeTab === 'features' && 'Features'}
                  {activeTab === 'gallery' && 'Galeria'}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Dashboard Stats */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Package className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Produtos</p>
                      <p className="text-2xl font-bold text-gray-900">{products.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Serviços</p>
                      <p className="text-2xl font-bold text-gray-900">{services.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <ImageIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Imagens Galeria</p>
                      <p className="text-2xl font-bold text-gray-900">{gallery.length}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Resumo do Sistema</h3>
                <p className="text-gray-600">Bem-vindo ao painel administrativo da Metalúrgica Moreira. Use o menu lateral para gerenciar produtos, serviços e galeria de imagens.</p>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="px-6 py-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Gerenciar Produtos</h2>
                <button 
                  onClick={() => setProductModal({ open: true, product: null })}
                  className="bg-[#D82224] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#c01e20] transition-colors"
                >
                  <Plus size={20} className="mr-2" />
                  Novo Produto
                </button>
              </div>
              <div className="p-6">
                {products.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum produto</h3>
                    <p className="mt-1 text-sm text-gray-500">Comece criando um novo produto.</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {products.map((product: any) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4">
                          {product.image && (
                            <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                          )}
                          <div>
                            <h3 className="font-medium text-gray-900">{product.name}</h3>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => setProductModal({ open: true, product })}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => deleteItem("products", product.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="px-6 py-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Gerenciar Serviços</h2>
                <button className="bg-[#D82224] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#c01e20] transition-colors">
                  <Plus size={20} className="mr-2" />
                  Novo Serviço
                </button>
              </div>
              <div className="p-6">
                {services.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum serviço</h3>
                    <p className="mt-1 text-sm text-gray-500">Comece criando um novo serviço.</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {services.map((service: any) => (
                      <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4">
                          {service.icon && (
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-2xl">{service.icon}</span>
                            </div>
                          )}
                          <div>
                            <h3 className="font-medium text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => deleteItem("services", service.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="px-6 py-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Gerenciar Galeria</h2>
                <button className="bg-[#D82224] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#c01e20] transition-colors">
                  <Plus size={20} className="mr-2" />
                  Nova Imagem
                </button>
              </div>
              <div className="p-6">
                {gallery.length === 0 ? (
                  <div className="text-center py-12">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma imagem</h3>
                    <p className="mt-1 text-sm text-gray-500">Comece adicionando uma nova imagem.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {gallery.map((item: any) => (
                      <div key={item.id} className="group relative bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-square overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
                          <div className="flex justify-end space-x-2 mt-3">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit size={16} />
                            </button>
                            <button 
                              onClick={() => deleteItem("gallery", item.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Content Management */}
          {activeTab === "content" && (
            <div className="space-y-6">
              {[
                { key: 'hero', title: 'Seção Hero', subtitle: 'Título e subtítulo principal' },
                { key: 'products', title: 'Seção Produtos', subtitle: 'Título e descrição dos produtos' },
                { key: 'services', title: 'Seção Serviços', subtitle: 'Título e descrição dos serviços' },
                { key: 'gallery', title: 'Seção Galeria', subtitle: 'Título e descrição da galeria' },
              ].map((section) => {
                const sectionContent = Array.isArray(content) ? content.find((c: any) => c.key === section.key) : null;
                return (
                  <div key={section.key} className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                        <p className="text-gray-600 text-sm">{section.subtitle}</p>
                        {sectionContent && (
                          <div className="mt-2 text-sm text-gray-500">
                            <p><strong>Título:</strong> {sectionContent.title || 'Não definido'}</p>
                            <p><strong>Subtítulo:</strong> {sectionContent.subtitle || 'Não definido'}</p>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setContentModal({ open: true, content: { key: section.key, ...sectionContent } })}
                        className="px-4 py-2 bg-[#D82224] text-white rounded-lg hover:bg-[#c01e20] transition-colors flex items-center gap-2"
                      >
                        <Edit size={16} />
                        Editar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Features Management */}
          {activeTab === "features" && (
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="px-6 py-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Gerenciar Features</h2>
                <button 
                  onClick={() => setFeatureModal({ open: true, feature: null })}
                  className="bg-[#D82224] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#c01e20] transition-colors"
                >
                  <Plus size={20} className="mr-2" />
                  Nova Feature
                </button>
              </div>
              <div className="p-6">
                {features.length === 0 ? (
                  <div className="text-center py-12">
                    <Zap className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma feature</h3>
                    <p className="mt-1 text-sm text-gray-500">Comece criando uma nova feature.</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {features.map((feature: any) => (
                      <div key={feature.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#D82224] rounded-lg flex items-center justify-center">
                            <span className="text-2xl">{feature.icon}</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => setFeatureModal({ open: true, feature })}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => deleteItem("features", feature.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <ProductModal
        isOpen={productModal.open}
        onClose={() => setProductModal({ open: false, product: null })}
        onSave={() => {fetchData(); setProductModal({ open: false, product: null })}}
        product={productModal.product}
      />

      <ContentModal
        isOpen={contentModal.open}
        onClose={() => setContentModal({ open: false, content: null })}
        onSave={() => {fetchData(); setContentModal({ open: false, content: null })}}
        content={contentModal.content}
      />

      <FeatureModal
        isOpen={featureModal.open}
        onClose={() => setFeatureModal({ open: false, feature: null })}
        onSave={() => {fetchData(); setFeatureModal({ open: false, feature: null })}}
        feature={featureModal.feature}
      />

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}