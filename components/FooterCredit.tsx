import React from 'react';

export default function FooterCredit() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center py-3 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.5)] border-t-4 border-yellow-500">
      <p className="text-sm font-inter tracking-wide">
        Desenvolvido por{' '}
        <a 
          href="https://desenvolvimentodesites.dev.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-red-500 font-bold underline transition-colors"
        >
          Alexis Marketing & Dev
        </a>{' '}
        construído em Models next-gen React-Starter
      </p>
    </footer>
  );
}
