"use client";
import Image from "next/image";

export default function ActionButtons({ onShop, onShare }) {
  const iconStyle = { 
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))',
    width: '28px',
    height: '28px',
    display: 'block'
  };
  
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Profile/Avatar */}
      <div className="w-11 h-11 rounded-full border border-white overflow-hidden relative mb-2 shadow-lg cursor-pointer active:scale-95 transition-transform">
        <Image 
          src="/assets/icons/avatar.svg" 
          alt="User" 
          width={44} 
          height={44} 
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-red-500 flex items-center justify-center text-[8px] font-bold">+</div>
      </div>

      {/* Like */}
      <button className="flex flex-col items-center gap-1 group cursor-pointer">
        <div className="p-2 rounded-full bg-black/20 backdrop-blur-md transition-transform group-active:scale-90 hover:bg-black/30">
            <img src="/assets/icons/icon-big-heart.svg" alt="Like" style={iconStyle} />
        </div>
        <span className="text-xs font-medium drop-shadow-md">4.2k</span>
      </button>

      {/* Shop/Tag */}
      <button className="flex flex-col items-center gap-1 group cursor-pointer" onClick={(e) => { e.stopPropagation(); onShop(); }}>
        <div className="p-2 rounded-full bg-black/20 backdrop-blur-md transition-transform group-active:scale-90 hover:bg-black/30">
            <img src="/assets/icons/icon-big-tag.svg" alt="Shop" style={iconStyle} />
        </div>
        <span className="text-xs font-medium drop-shadow-md">Shop</span>
      </button>

      {/* Share */}
      <button className="flex flex-col items-center gap-1 group cursor-pointer" onClick={(e) => { e.stopPropagation(); onShare(); }}>
        <div className="p-2 rounded-full bg-black/20 backdrop-blur-md transition-transform group-active:scale-90 hover:bg-black/30">
            <img src="/assets/icons/icon-small-share.svg" alt="Share" style={iconStyle} />
        </div>
        <span className="text-xs font-medium drop-shadow-md">Share</span>
      </button>
    </div>
  );
}
