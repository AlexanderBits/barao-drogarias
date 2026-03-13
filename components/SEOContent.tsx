import React from 'react';

const SEOContent: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Drogarias Barão - Sua Farmácia em Santa Cruz e Região
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-red-600 mb-2">Remédio em Santa Cruz</h3>
            <p className="text-sm text-gray-600">
              Procurando <strong>remédio em Santa Cruz Rio de Janeiro</strong>? A Drogarias Barão oferece entrega rápida e o melhor preço em medicamentos controlados e genéricos no coração da Zona Oeste.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-red-600 mb-2">Farmácia em Guapimirim RJ</h3>
            <p className="text-sm text-gray-600">
              Sua melhor opção de <strong>farmácia em Guapimirim RJ</strong>. Atendemos toda a região com uma linha completa de perfumaria e cuidados com a saúde.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-red-600 mb-2">Remédio em Santo Aleixo</h3>
            <p className="text-sm text-gray-600">
              Precisando de <strong>remédio em Santo Aleixo</strong>? Oferecemos atendimento personalizado e estoque variado para garantir sua saúde e bem-estar.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-red-600 mb-2">Jardim Esmeralda RJ</h3>
            <p className="text-sm text-gray-600">
              Visite nossa unidade de <strong>farmácia em Jardim Esmeralda Rio de Janeiro</strong>. Temos ofertas exclusivas e entrega em domicílio para sua comodidade.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-xs">
          <p>
            Palavras-chave: Barão Drogarias, farmácia 24h Santa Cruz, comprar remédio Guapimirim, farmácia perto de mim Santo Aleixo, drogaria Jardim Esmeralda RJ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
