import ProductCard from "@/components/product-card";
import StarView from "@/components/star-view";
import { MOCK_PRODUCTS } from "@/lib/dummy";
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

const StoreHome = () => {
  return (
    <div className="flex flex-col h-full">
      {/* categories */}
      <div className="w-full gap-8 flex">
        {Categories.map((category, index) => (
          <button
            key={index}
            className="bg-background px-6 py-2 rounded-full text-sm font-semibold first:bg-accent-foreground first:text-white"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 mt-4 grow max-h-10/12 gap-4">
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
