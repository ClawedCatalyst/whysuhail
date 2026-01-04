export function DecorativeElements() {
  return (
    <>
      {/* Left Side Decorations */}
      <div className="hidden lg:block fixed left-16 md:left-20 lg:left-24 top-1/4 z-0 pointer-events-none">
        <div className="relative">
          {/* Cloud Character */}
          <div className="absolute -top-4 -left-2 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-float-eth"></div>
          <div className="absolute top-3 left-3 w-8 h-8 bg-blue-400 rounded-sm opacity-80"></div>
          <div className="absolute top-5 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
          <div className="absolute top-5 left-5 w-1.5 h-1.5 bg-black rounded-full"></div>
          <div className="absolute top-8 left-1 w-1.5 h-3 bg-black rounded-full"></div>
          <div className="absolute top-8 left-4 w-1.5 h-3 bg-black rounded-full"></div>
          <div className="absolute top-11 left-2 w-3 h-1.5 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-11 left-5 w-3 h-1.5 bg-yellow-400 rounded-full"></div>
          
          {/* Stars */}
          <div className="absolute top-16 left-10 w-3 h-3 bg-yellow-300 rotate-45 opacity-70 animate-float-btc"></div>
          <div className="absolute top-20 left-6 w-2.5 h-2.5 bg-yellow-300 rotate-45 opacity-60"></div>
          
          {/* Coins */}
          <div className="absolute top-24 left-8 w-6 h-6 bg-yellow-400 rounded-full opacity-70"></div>
          <div className="absolute top-30 left-12 w-5 h-5 bg-yellow-300 rounded-full opacity-60"></div>
          
          {/* Heart */}
          <div className="absolute top-36 left-3 w-5 h-5 opacity-60" style={{ transform: 'rotate(-45deg)' }}>
            <div className="w-full h-full bg-red-400 rounded-tl-full rounded-tr-full"></div>
            <div className="absolute top-2.5 left-0 w-full h-full bg-red-400 rounded-bl-full rounded-br-full"></div>
          </div>
          
          {/* Paper Airplane */}
          <div className="absolute top-40 left-10 w-0 h-0 opacity-60 animate-float-sol">
            <div className="border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-blue-300"></div>
          </div>
        </div>
      </div>

      {/* Right Side Decorations */}
      <div className="hidden lg:block fixed right-16 md:right-20 lg:right-24 top-1/3 z-0 pointer-events-none">
        <div className="relative">
          {/* Green Character */}
          <div className="absolute -top-2 -right-2 w-14 h-16 bg-green-200 rounded-full opacity-60 animate-float-avax"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-black rounded-full"></div>
          <div className="absolute top-4 right-7 w-3 h-3 bg-black rounded-full"></div>
          <div className="absolute top-7 right-5 w-4 h-1.5 bg-green-600 rounded-full"></div>
          <div className="absolute top-12 right-3 w-3 h-3 bg-orange-400 rounded-full"></div>
          <div className="absolute top-12 right-8 w-3 h-3 bg-orange-400 rounded-full"></div>
          
          {/* Rocket */}
          <div className="absolute top-18 right-10 w-6 h-8 bg-red-400 opacity-70 animate-float-eth">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full"></div>
          </div>
          
          {/* Stars */}
          <div className="absolute top-24 right-5 w-3 h-3 bg-yellow-300 rotate-45 opacity-70"></div>
          <div className="absolute top-28 right-12 w-2.5 h-2.5 bg-yellow-300 rotate-45 opacity-60 animate-float-btc"></div>
          
          {/* Checkmark */}
          <div className="absolute top-32 right-8 w-6 h-6 bg-gray-200 rounded-full opacity-70 flex items-center justify-center">
            <div className="w-3 h-1.5 border-l-2 border-b-2 border-green-500" style={{ transform: 'rotate(-45deg)' }}></div>
          </div>
          
          {/* Coins */}
          <div className="absolute top-38 right-3 w-5 h-5 bg-yellow-300 rounded-full opacity-60"></div>
          <div className="absolute top-44 right-10 w-6 h-6 bg-yellow-400 rounded-full opacity-70 animate-float-sol"></div>
        </div>
      </div>

      {/* Top Decorations */}
      <div className="hidden lg:block fixed left-1/2 -translate-x-1/2 top-20 z-0 pointer-events-none">
        <div className="relative">
          {/* Yellow Character */}
          <div className="absolute -left-5 w-12 h-14 bg-yellow-200 rounded-full opacity-60 animate-float-avax"></div>
          <div className="absolute top-3 -left-3 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-3 left-1 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-5 -left-2 w-3 h-1.5 bg-yellow-600 rounded-full"></div>
          <div className="absolute top-9 -left-4 w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="absolute top-9 left-2 w-2 h-2 bg-green-400 rounded-full"></div>
          
          {/* Flower */}
          <div className="absolute -left-10 top-3 w-5 h-5 bg-yellow-300 rounded-full opacity-70 animate-float-eth">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
          </div>
          
          {/* Diamond (Ethereum-like) */}
          <div className="absolute left-6 top-1 w-5 h-5 bg-blue-300 rotate-45 opacity-70 animate-float-btc"></div>
        </div>
      </div>

      {/* Bottom Decorations */}
      <div className="hidden lg:block fixed left-1/4 bottom-32 z-0 pointer-events-none">
        <div className="relative">
          {/* Red Cloud Character */}
          <div className="absolute -bottom-2 -left-2 w-14 h-10 bg-red-200 rounded-full opacity-60 animate-float-sol"></div>
          <div className="absolute bottom-3 left-2 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute bottom-3 left-5 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute bottom-5 left-3 w-3 h-1.5 bg-red-500 rounded-full"></div>
          <div className="absolute bottom-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="absolute bottom-8 left-6 w-2 h-2 bg-yellow-400 rounded-full"></div>
          
          {/* Coins */}
          <div className="absolute bottom-10 left-8 w-5 h-5 bg-yellow-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-16 left-3 w-6 h-6 bg-yellow-400 rounded-full opacity-70 animate-float-avax"></div>
        </div>
      </div>
    </>
  );
}

