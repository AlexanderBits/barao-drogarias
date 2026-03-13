import React from 'react';
import { motion } from 'framer-motion';
import { assetPath } from '../utils';

interface PromoCardProps {
  title: string;
  imageSrc: string;
  oldPrice: number;
  newPriceInt: string;
  newPriceCents: string;
}

export default function PromoCard({
  title,
  imageSrc,
  oldPrice,
  newPriceInt,
  newPriceCents,
}: PromoCardProps) {
  return (
    <div className="bg-[#FFCC00] rounded-2xl p-2 md:p-3 flex flex-col relative shadow-lg overflow-hidden group border-2 border-yellow-500 hover:shadow-2xl transition-all duration-300 h-full min-h-[350px] md:min-h-[400px]">
      {/* Title Section */}
      <div className="font-oswald text-xl md:text-2xl font-black text-black text-center mb-2 w-full tracking-tight leading-tight h-12 md:h-14 flex items-center justify-center overflow-hidden z-20">
        <span className="line-clamp-2 uppercase drop-shadow-sm">
          {title}
        </span>
      </div>

      {/* Image Area - MEDICAMENTO EM CIMA DA MARGEM DE PREÇO */}
      <div className="flex-grow w-full flex flex-col items-center justify-end pb-2 md:pb-4 relative z-10">
        {/* Glow behind product */}
        <div className="absolute inset-x-0 bottom-6 bg-white/40 blur-2xl rounded-full w-24 h-24 md:w-32 md:h-32 mx-auto z-0 pointer-events-none group-hover:bg-white/60 transition-colors"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <img 
            src={assetPath(imageSrc)} 
            alt={title} 
            className="max-h-40 md:max-h-52 w-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out pointer-events-none"
          />
        </div>
      </div>

      {/* Price Margin Section */}
      <div className="w-full relative z-20 mt-4">
          <div className="flex items-stretch bg-red-700 rounded-b-xl h-24 md:h-28 overflow-hidden border-t-[6px] border-black/10 shadow-inner relative">
            
            {/* POR TAG - ENTRE PREÇO E PROMOÇÃO - REBAIXADA */}
            <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 z-30 transform hover:scale-110 transition-transform duration-300">
              <div className="bg-white text-black font-oswald font-black px-3 md:px-5 py-0.5 md:py-1 rounded-sm text-sm md:text-base uppercase border-[3px] border-red-700 shadow-[3px_3px_0px_rgba(185,28,28,1)] whitespace-nowrap">
                Por
              </div>
            </div>

            <div className="w-2/5 bg-white text-black flex flex-col items-center justify-center p-1 border-r-2 border-red-900 border-dashed relative">
              <span className="font-oswald text-[10px] md:text-xs font-bold uppercase text-red-700 mb-0">Preço</span>
              <span className="font-sans font-black text-red-600/80 line-through text-xs md:text-sm -mt-1 leading-none">
                R${oldPrice.toFixed(2)}
              </span>
              
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-red-700 rounded-br-full opacity-20"></div>
            </div>
            
            <div className="w-3/5 bg-red-700 text-white flex flex-col items-center justify-center p-1 relative">
               <motion.div 
                 className="flex items-end justify-center w-full mt-1"
                 initial={{ scale: 1 }}
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
               >
                 <span className="text-xs md:text-base font-bold font-oswald mb-2 mr-1">R$</span>
                 <span className="text-4xl md:text-5xl font-black font-oswald leading-none tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                   {newPriceInt}
                 </span>
                 <span className="text-sm md:text-base font-black font-oswald mb-3 ml-1 underline underline-offset-[2px]">{newPriceCents}</span>
               </motion.div>
               
               <div className="absolute right-2 top-1.5 text-[7px] md:text-[9px] font-oswald font-bold text-white/80 tracking-widest uppercase bg-black/20 px-1 rounded-sm">
                  UNID
               </div>
               
               <a 
                 href={`https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20pedir%20o%20produto:%20${encodeURIComponent(title)}%20por%20R$${newPriceInt},${newPriceCents}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-auto mb-1.5 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-[10px] md:text-[11px] font-bold py-1.5 px-3 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 w-[92%]"
               >
                 <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.423-.101.827z"/></svg>
                 PEDIR AGORA
               </a>
            </div>
          </div>
      </div>
    </div>
  );
}
