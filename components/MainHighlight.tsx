import React from 'react';
import { motion } from 'framer-motion';
import { assetPath } from '../utils';

interface MainHighlightProps {
  title: string;
  discount: string;
  imageSrc: string;
  oldPrice: number;
  newPriceInt: string;
  newPriceCents: string;
}

export default function MainHighlight({
  title,
  discount,
  imageSrc,
  oldPrice,
  newPriceInt,
  newPriceCents,
}: MainHighlightProps) {
  return (
    <div className="bg-red-600 rounded-3xl p-6 flex flex-col justify-between items-center relative shadow-2xl overflow-hidden h-full group border-4 border-red-700">
      {/* Title */}
      <div className="text-white font-oswald text-5xl md:text-6xl font-black uppercase text-center drop-shadow-md tracking-wide w-full mt-2 z-10" style={{ textShadow: '2px 2px 0px #000' }}>
        {title}
      </div>

      <div className="flex-grow w-full flex items-center justify-center relative my-6 group-hover:scale-105 transition-transform duration-500">
        {/* Discount Badge moved near the image */}
        <div className="absolute top-0 left-0 md:left-4 w-20 h-20 md:w-24 md:h-24 bg-black rounded-full flex items-center justify-center text-white font-oswald text-3xl md:text-4xl font-bold shadow-2xl z-20 border-4 border-white/20">
          -{discount}%
        </div>
        
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src={assetPath(imageSrc)} 
            alt={title} 
            className="max-h-72 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-white opacity-20 blur-3xl rounded-full z-0 w-3/4 h-3/4 m-auto"></div>
      </div>

      {/* Pricing Area */}
      <div className="w-full bg-black rounded-t-2xl flex flex-col items-center pt-8 pb-0 px-0 relative mt-auto border-t-[6px] border-yellow-400 shadow-[0_-10px_20px_rgba(0,0,0,0.4)]">
        {/* POR TAG - ENTRE PREÇO E PROMOÇÃO */}
        <div className="absolute top-6 left-[33.3%] -translate-x-1/2 z-30 transform hover:scale-110 transition-transform duration-300">
           <div className="bg-yellow-400 text-black font-oswald font-black px-5 md:px-8 py-1 md:py-1.5 rounded-full text-xl md:text-2xl uppercase border-4 border-black shadow-[4px_4px_0px_#000] whitespace-nowrap">
              Por
           </div>
        </div>

        <div className="flex w-full items-stretch mt-4 bg-yellow-400 rounded-b-xl overflow-hidden shadow-inner">
          <div className="w-1/3 bg-white/10 text-black flex flex-col items-center justify-center p-3 border-r-2 border-black/20">
            <span className="font-oswald text-xl font-bold uppercase mb-1">Preço</span>
            <span className="font-inter font-bold text-gray-500 line-through text-2xl decorative-price">
              R$ {oldPrice.toFixed(2)}
            </span>
          </div>
          
          <div className="w-2/3 flex flex-col items-center justify-center p-2 relative">
            <div className="flex items-start justify-center -mt-1">
              <span className="text-black font-oswald text-3xl font-bold mt-3 mr-1">R$</span>
              <motion.span 
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-black font-oswald text-[4.5rem] md:text-[5.5rem] font-black leading-none drop-shadow-sm tracking-tighter"
              >
                {newPriceInt}
              </motion.span>
              <div className="flex flex-col items-start mt-4">
                <span className="text-black font-oswald text-2xl md:text-3xl font-bold underline decoration-4 underline-offset-4 leading-none">{newPriceCents}</span>
                <span className="text-black font-oswald text-xs font-bold mt-1">UNID</span>
              </div>
            </div>
               <a 
                 href={`https://wa.me/5521999404847?text=Olá,%20gostaria%20de%20pedir%20o%20produto:%20${encodeURIComponent(title)}%20(Oferta%20Especial)%20por%20R$${newPriceInt},${newPriceCents}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-sm md:text-base font-bold py-1 md:py-2 px-4 rounded-full shadow-md transition-colors w-[90%] md:w-[80%] uppercase z-10"
               >
                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.423-.101.827z"/></svg>
                 PEDIR AGORA
               </a>
          </div>
        </div>
      </div>
    </div>
  );
}
