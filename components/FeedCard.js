"use client";
import Image from "next/image";
import ActionButtons from "./ActionButtons";

export default function FeedCard({ post, onShop, onShare }) {
  return (
    <div className="snap-section w-full h-full relative bg-gray-900 overflow-hidden">
      {/* Main Content (Image/Video) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={post.image} 
          alt={post.description} 
          fill 
          className="object-cover"
          priority={post.id === 1}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Right Actions Container - Explicitly positioned */}
      <div className="absolute right-4 bottom-24 z-50 flex flex-col items-center">
        <ActionButtons onShop={() => onShop(post)} onShare={() => onShare(post)} />
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-4 right-20 z-40 text-white pointer-events-none">
        <h3 className="font-bold text-lg mb-1 drop-shadow-md">{post.username}</h3>
        <p className="text-sm opacity-90 leading-snug mb-2 drop-shadow-md">{post.description} <span className="font-bold">#mirra #ootd</span></p>
        
        {/* Music Ticker */}
        <div className="flex items-center gap-2 text-xs opacity-80">
          <span className="animate-pulse">♫</span>
          <span className="drop-shadow-md">Original Sound - Mirra Sounds</span>
        </div>
      </div>
    </div>
  );
}
