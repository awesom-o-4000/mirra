"use client";
import Image from "next/image";

export default function ActionButtons({ onShop, onShare }) {
  return (
    <div className="flex flex-col items-center gap-6 absolute right-4 bottom-24 z-20">
      {/* Profile/Avatar */}
      <div className="w-11 h-11 rounded-full border border-white overflow-hidden relative mb-2">
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
      <button className="flex flex-col items-center gap-1">
        <Image src="/assets/icons/icon-big-heart.svg" alt="Like" width={32} height={32} />
        <span className="text-xs font-medium drop-shadow-md">4.2k</span>
      </button>

      {/* Shop/Tag */}
      <button className="flex flex-col items-center gap-1" onClick={onShop}>
        <Image src="/assets/icons/icon-big-tag.svg" alt="Shop" width={32} height={32} />
        <span className="text-xs font-medium drop-shadow-md">Shop</span>
      </button>

      {/* Share */}
      <button className="flex flex-col items-center gap-1" onClick={onShare}>
        <Image src="/assets/icons/icon-small-share.svg" alt="Share" width={32} height={32} />
        <span className="text-xs font-medium drop-shadow-md">Share</span>
      </button>
    </div>
  );
}
