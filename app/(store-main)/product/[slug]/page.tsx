import React from "react";
import { MOCK_PRODUCTS } from "@/lib/dummy";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  Dot,
  Heart,
  LucideShare2,
  MessageSquareTextIcon,
} from "lucide-react";
import StarView from "@/components/star-view";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    name: "Description",
    value: "description",
    content: "pnpm dlx shadcn@latest add tabs",
  },
  {
    name: "Shipping",
    value: "shipping",
    content: "npx shadcn@latest add tabs",
  },
  {
    name: "Reviews",
    value: "reviews",
    content: "npx shadcn@latest add tabs",
  },
];

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((product) => product.slug === slug);

  const discountPercentage =
    product?.discountPrice &&
    ((product.price - product.discountPrice) / product.price) * 100;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full flex gap-2 text-muted-foreground">
        <span>Home {" / "}</span>
        <span>Product {" / "}</span>
        <span className="capitalize font-semibold">{slug}</span>
      </div>

      <div className="mt-8 w-full pb-16 border-b-2 border-slate-400/30">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex gap-4">
            <div className="flex gap-2 flex-col">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="w-32 aspect-square relative bg-slate-300 rounded-xl overflow-hidden"
                >
                  <Image
                    src={product.images[index]}
                    alt={product.title}
                    fill
                    className={cn(
                      product.images[index] === undefined ? "hidden" : "",
                      "object-cover"
                    )}
                  />
                </div>
              ))}
            </div>

            <div className="h-full aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src={product?.images[0]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="p-12 h-fit bg-background gap-4 flex flex-col rounded-xl ">
              <Badge variant="default" className=" font-semibold">
                {product.category}
              </Badge>
              <p className="font-semibold text-4xl">{product.title}</p>

              <div className="flex gap-2 items-center font-semibold">
                <p className="text-sm text-muted-foreground capitalize">
                  {product.slug}
                </p>
                <Dot />
                <span className="flex gap-4 items-center">
                  <StarView rating={4} />
                  <p className="text-sm text-muted-foreground">4.0</p>
                </span>
                <Dot />
                <p className="text-sm text-muted-foreground">456 reviews</p>
              </div>

              <div>
                <p className="font-semibold text-4xl">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "KES",
                  })}
                </p>

                <div className="font-semibold text-muted-foreground">
                  {product.discountPrice ? (
                    <span className="flex gap-2">
                      <p className="line-through text-sm ">
                        {product.discountPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "KES",
                        })}
                      </p>
                      <p className="text-sm text-orange-500">
                        {discountPercentage?.toFixed(0)}% off
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex gap-2 my-4">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-32 aspect-square relative bg-slate-300 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={product.images[index]}
                        alt={product.title}
                        fill
                        className={cn(
                          product.images[index] === undefined ? "hidden" : "",
                          "object-cover"
                        )}
                      />
                    </div>
                  ))}
                </div>

                <div className="w-full flex flex-col gap-2 mt-4">
                  <span className="flex justify-between font-semibold w-full  items-center gap-2">
                    <p>Select Size</p>
                    <p>Size Guide</p>
                  </span>
                  <div className="flex gap-4">
                    {["S", "M", "L", "XL", "2XL", "3XL"].map((size, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="px-4 py-2 rounded-xl cursor-pointer first:bg-primary font-semibold"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 mt-4 w-full">
                    <div className="flex w-full gap-2">
                      <Button className="flex-1 cursor-pointer font-semibold">
                        Buy this Item
                      </Button>
                      <Button
                        variant={"outline"}
                        className="flex-1 cursor-pointer font-semibold"
                      >
                        Add to Cart
                      </Button>
                    </div>
                    <div className="flex items-center w-full mt-2 gap-2">
                      <Button variant={"outline"} className="flex-1">
                        <MessageSquareTextIcon />
                        <p>Chat</p>
                      </Button>

                      <Button variant={"outline"} className="flex-1">
                        <Heart />
                        <p>Wishlist</p>
                      </Button>

                      <Button variant={"outline"} className="flex-1">
                        <LucideShare2 />
                        <p>Share</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-background p-6 grow rounded-xl mt-4 w-full"></div> */}
          </div>
        </div>
      </div>

      <div className="mt-8 w-full">
        <Tabs className="w-full bg-transparent" defaultValue={tabs[0].value}>
          <TabsList className="w-fit justify-start rounded-none bg-transparent p-0 gap-2">
            {tabs.map((tab) => (
              <TabsTrigger
                className="-mb-[2px] h-full rounded-lg w-fit border border-slate-900/10 data-[state=active]:bg-primary data-[state=active]:shadow-sm  bg-transparent  px-8 py-2"
                key={tab.value}
                value={tab.value}
              >
                <p className="text-[13px] font-semibold">{tab.name}</p>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={"description"}>
            <div className=" mt-4">
              <p className="font-semibold">Product Description</p>
              <p className="text-muted-foreground w-full mt-2 mb-4 leading-relaxed">
                {product.description}
              </p>
            </div>
          </TabsContent>
          <TabsContent value={"reviews"}>
            <div className="flex items-center justify-between gap-2 border ">
              <p>Product Reviews</p>
              <p></p>
            </div>
          </TabsContent>
          <TabsContent value={"shipping"}>
            <div className="flex items-center justify-between gap-2 border ">
              <p>Shipping</p>
              <p></p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductPage;
