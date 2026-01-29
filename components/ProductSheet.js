"use client";
import Image from "next/image";

export default function ProductSheet({ isOpen, onClose, product }) {
  if (!product) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl rounded-t-3xl border-t border-white/10 p-6 transition-transform duration-300 ${isOpen ? "translate-y-0" : "translate-y-full"} h-[60vh]`}>
        {/* Handle */}
        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-6" />

        <div className="flex flex-col h-full">
          <div className="flex gap-4 mb-6">
            <div className="w-24 h-32 bg-gray-700 rounded-lg overflow-hidden relative flex-shrink-0">
               <Image src={product.image} alt={product.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">{product.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{product.brand}</p>
              <p className="text-2xl font-bold">${product.price}</p>
            </div>
          </div>

          <div className="mt-auto mb-8 flex flex-col gap-3">
            <button className="w-full bg-white text-black font-bold py-4 rounded-full text-lg active:scale-95 transition-transform">
              Buy Now
            </button>
            <button className="w-full bg-white/10 text-white font-medium py-4 rounded-full text-lg active:scale-95 transition-transform">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
