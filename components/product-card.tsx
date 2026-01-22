"use client";
import React, { useState } from "react";
import { Heart, ShoppingBasket } from "lucide-react";
import { Product } from "@/app/(store-main)/page";
import Image from "next/image";

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div key={index} className=" rounded-xl flex flex-col gap-1">
      <div className="h-[73%] bg-slate-200/50 rounded-xl relative overflow-hidden">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-2 right-2 p-2 bg-background rounded-full"
        >
          <Heart color="orange" fill={isLiked ? "orange" : "none"} />
        </button>

        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-background grow rounded-xl p-2 relative">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-blue-400 h-fit hidden w-fit rounded-full px-2 py-1">
          <p className="text-xs font-black">Top Item</p>
        </div>

        <div className="flex flex-col gap-2 mt-2 px-2 ">
          <p className="text-center font-semibold truncate">{product.title}</p>
          <div className="flex gap-2 items-center border-2 border-orange-500 px-2 py-1  rounded-full self-center w-fit">
            <ShoppingBasket className="text-orange-500" size={20} />
            <p className="text-center text-orange-500 text-sm font-semibold">
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "KES",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
