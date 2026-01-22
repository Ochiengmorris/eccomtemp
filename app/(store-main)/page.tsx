import ProductCard from "@/components/product-card";
import StarView from "@/components/star-view";
import { Heart, Star } from "lucide-react";
import React from "react";

const Categories = [
  "All categories",
  "Sports",
  "Deals",
  "Crypto",
  "Fashion",
  "Art",
  "Health & Wellness",
  "Home",
];

export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  stock: number;
  images: string[];
  description: string;
  category: string;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Premium Cotton T-Shirt",
    slug: "premium-cotton-tshirt",
    price: 2500,
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    ],
    description: "High-quality cotton t-shirt, perfect for everyday wear",
    category: "Clothing",
  },
  {
    id: "2",
    title: "Leather Wallet",
    slug: "leather-wallet",
    price: 3500,
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    ],
    description: "Genuine leather wallet with multiple card slots",
    category: "Accessories",
  },
  {
    id: "3",
    title: "Wireless Earbuds",
    slug: "wireless-earbuds",
    price: 5500,
    stock: 12,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    ],
    description: "Crystal clear sound with noise cancellation",
    category: "Electronics",
  },
  {
    id: "4",
    title: "Running Shoes",
    slug: "running-shoes",
    price: 6500,
    stock: 6,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"],
    description: "Comfortable running shoes for daily training",
    category: "Footwear",
  },
  {
    id: "5",
    title: "Backpack",
    slug: "backpack",
    price: 4500,
    stock: 10,
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"],
    description: "Durable backpack with laptop compartment",
    category: "Bags",
  },
  {
    id: "6",
    title: "Sunglasses",
    slug: "sunglasses",
    price: 2000,
    stock: 20,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    ],
    description: "UV protection sunglasses with modern design",
    category: "Accessories",
  },
  {
    id: "7",
    title: "Premium Cotton T-Shirt",
    slug: "premium-cotton-tshirt",
    price: 2500,
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    ],
    description: "High-quality cotton t-shirt, perfect for everyday wear",
    category: "Clothing",
  },
  {
    id: "8",
    title: "Premium Cotton T-Shirt with an unsleeved new sleeve on its back",
    slug: "premium-cotton-tshirt",
    price: 2500,
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    ],
    description: "High-quality cotton t-shirt, perfect for everyday wear",
    category: "Clothing",
  },
];

const StoreHome = () => {
  return (
    <div className="flex flex-col h-full">
      {/* categories */}
      <div className="w-full gap-8 flex">
        {Categories.map((category, index) => (
          <button
            key={index}
            className="bg-background px-6 py-2 rounded-full text-sm font-semibold"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 mt-8 grow max-h-10/12 gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 p-6 bg-background rounded-xl">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Price Range</p>
                <p className="text-xs text-muted-foreground">
                  The average price is 2,500
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Reset</p>
              </div>
            </div>

            <div className="h-[200px] flex items-end rounded-xl p-4  border border-slate-200">
              <input
                type="range"
                className="w-full "
                // min="0"
                // max="100"
                // step="5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-background rounded-xl">
            <h3 className="font-semibold">Star Rating</h3>
            <div>
              <div className="flex justify-between items-center gap-2">
                <StarView rating={4} />
                <p className=" text-sm text-muted-foreground font-semibold ">
                  4 stars & up
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-6 bg-background rounded-xl grow">
            <h3 className="font-semibold">Brands</h3>
            <div></div>
          </div>
          <div className="flex flex-col gap-2 p-6 bg-background rounded-xl">
            <h3 className="font-semibold">Delivery options</h3>
            <div className="w-full flex gap-2">
              <button className="px-6 py-2 bg-primary font-semibold text-sm rounded-full flex-1">
                Standard
              </button>
              <button className="px-6 py-2 bg-slate-500/10 font-semibold text-sm rounded-full flex-1">
                Pickup
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-4 gap-4">
          {MOCK_PRODUCTS.map((product, index) => (
            <ProductCard key={index} index={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreHome;
