import React from "react";
import { MOCK_PRODUCTS } from "@/lib/dummy";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
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
import ProductCard from "@/components/product-card";

const tabs = [
  {
    name: "Description",
    value: "description",
    content: "pnpm dlx shadcn@latest add tabs",
  },
  // {
  //   name: "Shipping",
  //   value: "shipping",
  //   content: "npx shadcn@latest add tabs",
  // },
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
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 flex gap-4">
            <div className="max-w-10/12 aspect-square flex flex-col gap-2">
              <div className="w-full aspect-square shadow-md relative rounded-2xl overflow-hidden">
                <Image
                  src={product?.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full  gap-2 p-4">
                  <Button
                    variant={"outline"}
                    className="rounded-full size-12 bg-background/20 border-background/20"
                  >
                    <ArrowLeft />
                  </Button>
                  <Button
                    variant={"outline"}
                    className="rounded-full size-12 bg-background/20 border-background/20"
                  >
                    <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  const imageSrc = product.images[index];
                  const hasValidImage = imageSrc && imageSrc.trim() !== "";

                  return (
                    <div
                      key={index}
                      className="flex-1 aspect-square relative shadow-sm bg-slate-300 rounded-xl overflow-hidden"
                    >
                      {hasValidImage && (
                        <Image
                          src={imageSrc}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-6">
              <Button variant={"outline"} className="rounded-full size-12">
                <Heart />
              </Button>
              <Button variant={"outline"} className="rounded-full size-12">
                <MessageSquareTextIcon />
              </Button>
              <Button variant={"outline"} className="rounded-full size-12">
                <LucideShare2 />
              </Button>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <div className="p-12 h-fit w-10/12 shadow-md bg-background gap-4 flex flex-col rounded-xl ">
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
                <p className="font-black text-4xl">
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

                <div className="font-semibold text-muted-foreground">
                  {product.discountPrice ? (
                    <span className="flex gap-2">
                      <p className="line-through text-sm ">
                        {product.price.toLocaleString("en-US", {
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

                <div className="flex flex-col gap-2 mt-2">
                  <h1 className="font-semibold">Description:</h1>
                  <p className="text-muted-foreground text-sm font-mono">
                    {product.description}
                  </p>
                </div>

                <div className="flex gap-2 my-4">
                  {Array.from({ length: 2 }).map((_, index) => {
                    const imageSrc = product.images[index];
                    const hasValidImage = imageSrc && imageSrc.trim() !== "";

                    return (
                      <div
                        key={index}
                        className="w-32 aspect-square relative shadow-sm bg-slate-300 rounded-xl overflow-hidden"
                      >
                        {hasValidImage && (
                          <Image
                            src={imageSrc}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    );
                  })}
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
                    <div className="flex w-full gap-4">
                      <Button className="flex-1 cursor-pointer font-semibold rounded-full">
                        Buy this Item
                      </Button>
                      <Button
                        variant={"outline"}
                        className="flex-1 cursor-pointer font-semibold rounded-full"
                      >
                        Add to Cart
                      </Button>
                    </div>
                    <div className="flex items-center w-full mt-2 gap-2"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-background p-6 grow rounded-xl mt-4 w-full"></div> */}
          </div>
        </div>
      </div>

      {/* <div className="mt-8 w-full">
        <Tabs className="w-full bg-transparent" defaultValue={tabs[0].value}>
          <TabsList className="w-fit mx-auto justify-center flex items-center rounded-none bg-transparent p-0 gap-2">
            {tabs.map((tab) => (
              <TabsTrigger
                className="-mb-[2px] h-full rounded-lg w-fit border-none data-[state=active]:bg-primary data-[state=active]:shadow-sm bg-transparent px-8 py-2"
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
        </Tabs>
      </div> */}

      <div className="mb-8">
        <h1 className="font-semibold mt-8 mb-4 text-2xl">Similar Products </h1>
        <div className="grid grid-cols-5 gap-4">
          {MOCK_PRODUCTS.slice(0, 5).map((product, index) => (
            <ProductCard key={index} index={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
