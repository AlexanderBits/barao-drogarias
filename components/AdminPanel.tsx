import React, { useState, useRef } from 'react';
import { ProductsData, MainHighlightData, PromoSecondaryData } from '../types';

interface AdminPanelProps {
  products: ProductsData;
  setProducts: React.Dispatch<React.SetStateAction<ProductsData>>;
  onLogout: () => void;
}

export default function AdminPanel({ products, setProducts, onLogout }: AdminPanelProps) {
  const [successMessage, setSuccessMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Function to handle image upload (Simulation with Base64 to avoid backend need)
  const handleImageUpload = (file: File, callback: (url: string) => void) => {
    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      callback(base64String);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleMainChange = (id: number, field: keyof MainHighlightData, value: string | number) => {
    setProducts((prev) => ({
      ...prev,
      mainHighlights: prev.mainHighlights.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleSecondaryChange = (id: number, field: keyof PromoSecondaryData, value: string | number) => {
    setProducts((prev) => ({
      ...prev,
      promoSecondary: prev.promoSecondary.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleSave = () => {
    localStorage.setItem('barao_products', JSON.stringify(products));
    setSuccessMessage('Alterações salvas com sucesso! (Armazenamento local)');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const addMainHighlight = () => {
    if (products.mainHighlights.length >= 5) {
      alert("Máximo de 5 destaques atingido!");
      return;
    }
    const newId = products.mainHighlights.length ? Math.max(...products.mainHighlights.map(p => p.id)) + 1 : 1;
    setProducts((prev) => ({
      ...prev,
      mainHighlights: [
        ...prev.mainHighlights,
        {
          id: newId,
          title: "NOVO DESTAQUE",
          discount: "0",
          imageSrc: "",
          oldPrice: 0,
          newPriceInt: "0",
          newPriceCents: "00",
        }
      ],
    }));
  };

  const removeMainHighlight = (id: number) => {
    setProducts((prev) => ({
      ...prev,
      mainHighlights: prev.mainHighlights.filter(item => item.id !== id),
    }));
  };

  const addPromoSecondary = () => {
    const newId = products.promoSecondary.length ? Math.max(...products.promoSecondary.map(p => p.id)) + 1 : 1;
    setProducts((prev) => ({
      ...prev,
      promoSecondary: [
        ...prev.promoSecondary,
        {
          id: newId,
          title: "NOVO PRODUTO",
          imageSrc: "",
          oldPrice: 0,
          newPriceInt: "0",
          newPriceCents: "00",
        }
      ],
    }));
  };

  const removePromoSecondary = (id: number) => {
    setProducts((prev) => ({
      ...prev,
      promoSecondary: prev.promoSecondary.filter(item => item.id !== id),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Admin */}
      <div className="bg-red-700 shadow-md">
        <div className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-white text-2xl font-oswald font-bold tracking-widest uppercase text-center sm:text-left">
            Painel Admin - Barão
          </h1>
          <div className="flex flex-wrap gap-2 md:space-x-4">
            <button 
              id="reset-btn"
              onClick={(e) => {
                const btn = e.currentTarget;
                if (btn.innerText === "RESETAR PADRÃO") {
                  btn.innerText = "CONFIRMAR RESET?";
                  btn.className = "px-3 py-2 bg-orange-600 text-white font-bold rounded-md shadow uppercase text-[10px] md:text-xs";
                  setTimeout(() => {
                    btn.innerText = "RESETAR PADRÃO";
                    btn.className = "px-3 py-2 bg-red-900 hover:bg-red-800 text-white font-bold rounded-md shadow uppercase text-[10px] md:text-xs";
                  }, 3000);
                } else {
                  localStorage.removeItem('barao_products');
                  window.location.href = "/";
                }
              }}
              className="px-3 py-2 bg-red-900 hover:bg-red-800 text-white font-bold rounded-md shadow uppercase text-[10px] md:text-xs transition-all"
            >
              Resetar Padrão
            </button>
            <a href="/" className="px-3 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-md shadow uppercase text-xs md:text-sm">
              Ver Encarte Ao Vivo
            </a>
            <button onClick={onLogout} className="px-3 py-2 bg-gray-900 hover:bg-black text-white rounded-md text-xs md:text-sm">
              Sair
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Main Highlights Editor (CAROUSEL ITEMS) */}
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-red-600 h-[700px] overflow-y-auto">
          <div className="flex justify-between items-center border-b pb-2 mb-4 sticky top-0 bg-white z-10">
             <h2 className="text-xl font-bold">Seção 1: Destaques (Máx 5)</h2>
             <button 
               onClick={addMainHighlight} 
               className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-semibold"
             >
               + Adicionar Destaque
             </button>
          </div>
          
          <div className="space-y-6">
            {products.mainHighlights.map((item, index) => (
              <div key={item.id} className="border p-4 rounded-lg bg-gray-50 relative">
                <button 
                  onClick={() => removeMainHighlight(item.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                  title="Remover Destaque"
                >
                  X
                </button>
                <h3 className="font-bold mb-3 text-red-700 uppercase tracking-tighter">Destaque #{index + 1}</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Título do Produto</label>
                    <input 
                      type="text" 
                      value={item.title}
                      onChange={(e) => handleMainChange(item.id, 'title', e.target.value)}
                      className="w-full border p-2 rounded focus:ring-2 focus:ring-red-400"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Desconto (%)</label>
                      <input 
                        type="text" 
                        value={item.discount}
                        onChange={(e) => handleMainChange(item.id, 'discount', e.target.value)}
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Preço Antigo</label>
                      <input 
                        type="number" 
                        value={item.oldPrice}
                        onChange={(e) => handleMainChange(item.id, 'oldPrice', parseFloat(e.target.value) || 0)}
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Novo R$ (Inteiro)</label>
                      <input 
                        type="text" 
                        value={item.newPriceInt}
                        onChange={(e) => handleMainChange(item.id, 'newPriceInt', e.target.value)}
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Centavos</label>
                      <input 
                        type="text" 
                        value={item.newPriceCents}
                        onChange={(e) => handleMainChange(item.id, 'newPriceCents', e.target.value)}
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 flex justify-between">
                      <span>Imagem (URL ou Upload)</span>
                      {isUploading && <span className="text-xs text-blue-600 animate-pulse italic">Carregando...</span>}
                    </label>
                    <div className="flex space-x-2">
                      <input 
                        type="text" 
                        placeholder="http://..."
                        value={item.imageSrc}
                        onChange={(e) => handleMainChange(item.id, 'imageSrc', e.target.value)}
                        className="flex-grow border p-2 rounded text-xs"
                      />
                      <label className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded text-xs font-bold cursor-pointer shrink-0">
                        📁 UPLOAD
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleImageUpload(e.target.files[0], (url) => handleMainChange(item.id, 'imageSrc', url));
                            }
                          }}
                        />
                      </label>
                    </div>
                    {item.imageSrc && (
                       <div className="mt-2 h-16 w-16 bg-gray-200 rounded overflow-hidden border">
                          <img src={item.imageSrc} className="w-full h-full object-contain" alt="Preview"/>
                       </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Secondary Editor */}
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-yellow-400 h-[700px] overflow-y-auto">
          <div className="flex justify-between items-center border-b pb-2 mb-4 sticky top-0 bg-white z-10">
             <h2 className="text-xl font-bold">Seção 2: Cards Amarelos</h2>
             <button 
               onClick={addPromoSecondary} 
               className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-semibold"
             >
               + Novo Produto
             </button>
          </div>

          <div className="space-y-6">
            {products.promoSecondary.map((item, index) => (
              <div key={item.id} className="border p-4 rounded-lg bg-gray-50 relative">
                <button 
                  onClick={() => removePromoSecondary(item.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                >
                  X
                </button>
                <h3 className="font-bold mb-3 text-gray-700 uppercase tracking-tighter">Produto #{index + 1}</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Título</label>
                    <input 
                      type="text" 
                      value={item.title}
                      onChange={(e) => handleSecondaryChange(item.id, 'title', e.target.value)}
                      className="w-full border p-2 rounded text-sm"
                    />
                  </div>
                  <div className="flex space-x-2">
                     <div className="w-1/3">
                        <label className="block text-xs font-semibold mb-1">R$ De</label>
                        <input 
                          type="number" 
                          value={item.oldPrice}
                          onChange={(e) => handleSecondaryChange(item.id, 'oldPrice', parseFloat(e.target.value) || 0)}
                          className="w-full border p-2 rounded text-sm"
                        />
                     </div>
                     <div className="w-1/3">
                        <label className="block text-xs font-semibold mb-1">R$ Por</label>
                        <input 
                          type="text" 
                          value={item.newPriceInt}
                          onChange={(e) => handleSecondaryChange(item.id, 'newPriceInt', e.target.value)}
                          className="w-full border p-2 rounded text-sm"
                        />
                     </div>
                     <div className="w-1/3">
                        <label className="block text-xs font-semibold mb-1">Cent.</label>
                        <input 
                          type="text" 
                          value={item.newPriceCents}
                          onChange={(e) => handleSecondaryChange(item.id, 'newPriceCents', e.target.value)}
                          className="w-full border p-2 rounded text-sm"
                        />
                     </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Imagem</label>
                    <div className="flex space-x-2">
                       <input 
                        type="text" 
                        value={item.imageSrc}
                        onChange={(e) => handleSecondaryChange(item.id, 'imageSrc', e.target.value)}
                        className="flex-grow border p-2 rounded text-xs"
                      />
                      <label className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded text-xs font-bold cursor-pointer shrink-0">
                        📁 FOTO
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleImageUpload(e.target.files[0], (url) => handleSecondaryChange(item.id, 'imageSrc', url));
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Save FAB Container */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex flex-col sm:flex-row justify-between items-center shadow-2xl z-50">
         <span className="text-green-600 font-bold mb-2 sm:mb-0">{successMessage}</span>
         <button 
           onClick={handleSave} 
           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg flex items-center space-x-2 w-full sm:w-auto ml-auto"
         >
           <span>Salvar Todas Alterações</span>
         </button>
      </div>

    </div>
  );
}
