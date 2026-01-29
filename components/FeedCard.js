"use client";
import Image from "next/image";
import ActionButtons from "./ActionButtons";

export default function FeedCard({ post, onShop, onShare }) {
  return (
    <div className="snap-section w-full h-full relative bg-gray-900">
      {/* Main Content (Image/Video) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={post.image} 
          alt={post.description} 
          fill 
          className="object-cover"
          priority={post.id === 1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      {/* Right Actions */}
      <ActionButtons onShop={() => onShop(post)} onShare={() => onShare(post)} />

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-4 right-16 z-20 text-white">
        <h3 className="font-bold text-lg mb-1">{post.username}</h3>
        <p className="text-sm opacity-90 leading-snug mb-2">{post.description} <span className="font-bold">#mirra #ootd</span></p>
        
        {/* Music Ticker */}
        <div className="flex items-center gap-2 text-xs opacity-80">
          <span className="animate-pulse">♫</span>
          <span>Original Sound - Mirra Sounds</span>
        </div>
      </div>
    </div>
  );
}
