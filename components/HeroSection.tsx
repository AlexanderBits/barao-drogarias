import React from 'react';
import { assetPath } from '../utils';

const textShadowStyle = { textShadow: '4px 4px 0px #000' };

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 p-8 pt-12 pb-12 flex flex-col md:flex-row justify-between md:justify-around items-center border-b-[12px] border-orange-600 shadow-2xl relative overflow-hidden">
      
      {/* Background Graphic elements to make it dynamic */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-300 opacity-20 rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-red-500 opacity-40 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="flex flex-col z-10 text-center md:text-left mb-8 md:mb-0 transform -rotate-2">
        <span className="text-yellow-300 text-5xl md:text-7xl font-oswald font-black italic uppercase tracking-wider leading-none mb-3" style={textShadowStyle}>
          Descontos
        </span>
        <span className="text-white text-7xl md:text-[7rem] font-oswald font-black italic uppercase leading-none tracking-tighter" style={textShadowStyle}>
          Imperdíveis
        </span>
      </div>
      
      <div className="w-56 h-56 md:w-72 md:h-72 bg-transparent flex items-center justify-center z-10 shrink-0 relative">
         <img 
            src={assetPath("/logo-drogaria.png")} 
            alt="Logo Barão Drogarias" 
            className="max-w-full max-h-full drop-shadow-2xl object-contain animate-pulse-slow relative z-10"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }} 
          />
          <div className="hidden text-white font-oswald text-4xl font-bold bg-gradient-to-br from-red-700 to-red-900 w-full h-full rounded-full border-8 border-yellow-400 shadow-2xl flex-col items-center justify-center">
             <span className="text-5xl drop-shadow-md">Barão</span>
             <span className="text-xl tracking-widest text-yellow-300 mt-1">DROGARIAS</span>
           </div>
           {/* White glow behind logo */}
           <div className="absolute inset-0 bg-white opacity-20 blur-2xl rounded-full"></div>
      </div>
    </div>
  );
}
