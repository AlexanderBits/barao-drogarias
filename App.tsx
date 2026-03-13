import React, { useState, useEffect } from 'react';
import { Box } from 'lucide-react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import MainHighlightCarousel from './components/MainHighlightCarousel';
import ProductGrid from './components/ProductGrid';
import PromoCard from './components/PromoCard';
import FooterCredit from './components/FooterCredit';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import defaultProducts from './products.json';
import { ProductsData } from './types';

const App: React.FC = () => {
  const [products, setProducts] = useState<ProductsData>(defaultProducts as unknown as ProductsData);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Load from local storage if exists on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('barao_products');
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (e) {
        console.error("Failed to parsing local storage products", e);
      }
    }
  }, []);

  const Home = () => {
    const promoCards = (products.promoSecondary || []).map((card) => (
      <PromoCard key={card.id} {...card} />
    ));

    return (
      <div className="flex flex-col min-h-screen font-sans bg-gray-100">
        <HeroSection />
        
        <main className="flex-grow">
          <ProductGrid 
            mainHighlight={
               <MainHighlightCarousel highlights={products.mainHighlights || []} />
            } 
            promoCards={promoCards} 
          />
        </main>

        <FooterCredit />
        
        {/* Caixa de Remédios clicável para a administração */}
        <a 
          href="#/admin" 
          className="fixed bottom-3 right-4 z-50 text-white/30 hover:text-white hover:scale-110 transition-all p-2 rounded-full hover:bg-white/10"
          title="Acesso Administrativo"
        >
          <Box size={20} />
        </a>

        {/* Botão Flutuante do WhatsApp */}
        <a 
          href="https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20tirar%20uma%20dúvida" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-16 right-4 z-40 bg-green-500 text-white rounded-full p-3 md:p-4 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center group"
          title="Fale no WhatsApp"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.423-.101.827z"/></svg>
          <span className="absolute right-full mr-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Entrega Grátis!
          </span>
        </a>
      </div>
    );
  };

  const AdminRoute = () => {
    if (!isAuthenticated) {
      return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
    }
    return <AdminPanel products={products} setProducts={setProducts} onLogout={() => setIsAuthenticated(false)} />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;