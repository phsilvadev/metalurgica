"use client";

import { useState } from 'react';
import { X } from 'lucide-react';
import ImageUpload from '../ImageUpload/ImageUpload';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  content: any;
}

export default function ContentModal({ isOpen, onClose, onSave, content }: ContentModalProps) {
  const [formData, setFormData] = useState({
    key: content?.key || '',
    title: content?.title || '',
    subtitle: content?.subtitle || '',
    description: content?.description || '',
    image: content?.image || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      onSave();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Editar Conteúdo</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Título</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subtítulo</label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Descrição</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-2 border rounded-lg h-20"
            />
          </div>

          {content?.key === 'hero' && (
            <div>
              <label className="block text-sm font-medium mb-1">Imagem de Fundo</label>
              <ImageUpload
                currentImage={formData.image}
                onUpload={(url) => setFormData({...formData, image: url})}
              />
            </div>
          )}

          <div className="flex space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#D82224] text-white rounded-lg hover:bg-[#c01e20]"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}