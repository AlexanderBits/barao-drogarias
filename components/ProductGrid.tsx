import React from 'react';

interface ProductGridProps {
  mainHighlight: React.ReactNode;
  promoCards: React.ReactNode[];
}

export default function ProductGrid({ mainHighlight, promoCards }: ProductGridProps) {
  return (
    <div className="bg-gradient-to-b from-orange-400 to-yellow-500 min-h-screen p-4 md:p-8">
      {/* Main Container - max width constraint */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Column: Main Highlight - Fixed height to avoid stretching */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col h-fit lg:sticky lg:top-8 lg:max-h-[90vh]">
          {mainHighlight}
        </div>

        {/* Right Column: Grid of Promo Cards */}
        <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-24">
          {promoCards.map((card, idx) => (
             <div key={idx} className="flex flex-col h-full min-h-[280px]">
               {card}
             </div>
          ))}
        </div>

      </div>
    </div>
  );
}
