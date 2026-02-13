"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  LucideShare2,
  MessageSquareTextIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MAX_THUMBNAIL_IMAGES = 4;

const ImageGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  return (
    <div className="flex gap-4 w-full max-w-2xl ">
      <div className="flex-1 flex flex-col gap-2">
        {/* Main Image */}
        <div className="w-full aspect-square shadow-md relative rounded-2xl overflow-hidden bg-slate-100">
          <Image
            src={images[currentImageIndex]}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 bg-background/80 hover:bg-background border-background/20 backdrop-blur-sm"
              aria-label="Previous image"
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 bg-background/80 hover:bg-background border-background/20 backdrop-blur-sm"
              aria-label="Next image"
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="flex gap-2">
          {Array.from({ length: MAX_THUMBNAIL_IMAGES }).map((_, index) => {
            const imageSrc = images[index];
            const hasValidImage = imageSrc?.trim();

            return (
              <button
                key={index}
                className={cn(
                  "flex-1 aspect-square relative shadow-sm bg-slate-100 rounded-xl overflow-hidden hover:ring-2 hover:ring-primary transition-all",
                  index === currentImageIndex && "ring-2 ring-primary",
                  !hasValidImage && "opacity-50 "
                )}
                aria-label={`View image ${index + 1}`}
                onClick={() => hasValidImage && setCurrentImageIndex(index)}
              >
                {hasValidImage ? (
                  <Image
                    src={imageSrc}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 10vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full">
                    <span className="text-muted-foreground text-sm">No image</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-start gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12"
          aria-label="Add to favorites"
        >
          <Heart className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12"
          aria-label="Contact seller"
        >
          <MessageSquareTextIcon className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12"
          aria-label="Share product"
        >
          <LucideShare2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ImageGallery;
