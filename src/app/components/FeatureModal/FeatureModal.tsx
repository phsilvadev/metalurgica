"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  feature?: any;
}

export default function FeatureModal({ isOpen, onClose, onSave, feature }: FeatureModalProps) {
  const [formData, setFormData] = useState({
    title: feature?.title || '',
    description: feature?.description || '',
    icon: feature?.icon || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const method = feature ? 'PUT' : 'POST';
    const url = feature ? `/api/features/${feature.id}` : '/api/features';
    
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      onSave();
      onClose();
      setFormData({ title: '', description: '', icon: '' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {feature ? 'Editar Feature' : 'Nova Feature'}
          </h3>
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
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Descrição</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-2 border rounded-lg h-20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ícone (Emoji)</label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({...formData, icon: e.target.value})}
              className="w-full p-2 border rounded-lg"
              placeholder="⚡ 🛡️ 🌱 💰"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Use emojis como ícones (ex: ⚡ 🛡️ 🌱 💰)</p>
          </div>

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