"use client";
import { useState } from "react";
import { Heart, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { Product } from "@/lib/types";
import Link from "next/link";

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const hasValidImage = product.images[0] && product.images[0].trim() !== "";

  return (
    <Link
      href={`/product/${product.slug}`}
      key={index}
      className="rounded-xl flex flex-col gap-2 "
    >
      <div className="h-[300px]  bg-slate-200/50 rounded-xl relative overflow-hidden">
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-2 right-2 p-2 bg-background rounded-full z-30"
        >
          <Heart color="orange" fill={isLiked ? "orange" : "none"} />
        </button>

        {hasValidImage && (
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="bg-background grow rounded-xl p-2 relative">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-blue-400 h-fit hidden w-fit rounded-full px-2 py-1">
          <p className="text-xs font-black">Top Item</p>
        </div>

        <div className="flex flex-col gap-2 mt-2 px-2 ">
          <p className="text-center font-semibold truncate">{product.title}</p>
          <div className="flex gap-2 items-center justify-center">
            {product.discountPrice && (
              <p className="line-through text-sm font-semibold text-muted-foreground">
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "KES",
                })}
              </p>
            )}
            <div className="flex gap-2 items-center border-2 border-orange-500 px-2 py-1  rounded-full w-fit">
              <ShoppingBasket className="text-orange-500" size={20} />
              <p className="text-center text-orange-500 text-sm font-semibold">
                {product.discountPrice
                  ? product.discountPrice.toLocaleString("en-US", {
                      style: "currency",
                      currency: "KES",
                    })
                  : product.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "KES",
                    })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
