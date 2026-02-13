"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MAX_DESCRIPTION_IMAGES = 4;

const ProductDescription = ({
  description,
  images,
  title,
}: {
  description: string;
  images: string[];
  title: string;
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="font-semibold text-lg">Description</h2>
        <div className="">
          <button
            onClick={() => setShowMore(!showMore)}
            className={cn(
              "text-muted-foreground text-left text-sm leading-relaxed cursor-pointer",
              showMore ? "" : "line-clamp-3",
            )}
          >
            {description}
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        {images.slice(0, MAX_DESCRIPTION_IMAGES).map((imageSrc, index) => {
          const hasValidImage = imageSrc?.trim();
          if (!hasValidImage) return null;

          return (
            <div
              key={index}
              className="w-32 aspect-square relative shadow-sm bg-slate-100 rounded-xl overflow-hidden"
            >
              <Image
                src={imageSrc}
                alt={`${title} - Detail ${index + 1}`}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDescription;
