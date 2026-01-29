"use client";
import { useState } from "react";
import FeedCard from "../components/FeedCard";
import ProductSheet from "../components/ProductSheet";

const MOCK_POSTS = [
  {
    id: 1,
    username: "@ron_doe",
    description: "Trying out the new winter collection. This jacket is fire! 🔥",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1887&auto=format&fit=crop", 
    brand: "North Face",
    title: "1996 Retro Nuptse Jacket",
    price: "320.00"
  },
  {
    id: 2,
    username: "@ron_doe",
    description: "Streetwear vibes for the weekend. Cop or drop?",
    image: "https://images.unsplash.com/photo-1512353087810-25dfcd100962?q=80&w=1000&auto=format&fit=crop",
    brand: "Supreme",
    title: "Box Logo Hoodie",
    price: "168.00"
  },
  {
    id: 3,
    username: "@ron_doe",
    description: "Summer fit check. ☀️",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop",
    brand: "Zara",
    title: "Linen Blend Shirt",
    price: "49.90"
  }
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleShop = (post) => {
    setActiveProduct(post);
    setIsSheetOpen(true);
  };

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: "Mirra Look",
        text: `Check out this look on Mirra!`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert("Share menu mocked!");
    }
  };

  return (
    <main className="snap-container bg-black text-white">
      {MOCK_POSTS.map((post) => (
        <FeedCard 
          key={post.id} 
          post={post} 
          onShop={handleShop} 
          onShare={handleShare}
        />
      ))}

      <ProductSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)} 
        product={activeProduct} 
      />
    </main>
  );
}
