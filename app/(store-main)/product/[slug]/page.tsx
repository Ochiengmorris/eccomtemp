import { MOCK_PRODUCTS } from "@/lib/dummy";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Dot,
  Heart,
  LucideShare2,
  MessageSquareTextIcon,
  Minus,
  Plus,
} from "lucide-react";
import StarView from "@/components/star-view";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { notFound } from "next/navigation";
import ProductDescription from "./product-desc";
import ImageGallery from "./image-gallery";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const SIZES = ["S", "M", "L", "XL", "2XL", "3XL"] as const;
const SIMILAR_PRODUCTS_COUNT = 5;

const calculateDiscountPercentage = (
  price: number,
  discountPrice?: number,
): number | null => {
  if (!discountPrice) return null;
  return ((price - discountPrice) / price) * 100;
};

const formatCurrency = (amount: number): string => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "KES",
  });
};

const Breadcrumb = ({ slug }: { slug: string }) => (
  <nav
    className="w-full flex gap-2 text-sm text-muted-foreground"
    aria-label="Breadcrumb"
  >
    <span>Home</span>
    <span>/</span>
    <span>Product</span>
    <span>/</span>
    <span className="capitalize font-semibold text-foreground">{slug}</span>
  </nav>
);

const ProductRating = () => (
  <div className="flex gap-2 items-center text-sm">
    <StarView rating={4} />
    <span className="font-semibold">4.0</span>
    <Dot className="text-muted-foreground" />
    <span className="text-muted-foreground">456 reviews</span>
  </div>
);

const PriceDisplay = ({
  price,
  discountPrice,
  discountPercentage,
}: {
  price: number;
  discountPrice?: number;
  discountPercentage: number | null;
}) => (
  <div className="space-y-1">
    <p className="font-black text-4xl">
      {formatCurrency(discountPrice ?? price)}
    </p>
    {discountPrice && discountPercentage && (
      <div className="flex gap-2 items-center">
        <p className="line-through text-sm text-muted-foreground">
          {formatCurrency(price)}
        </p>
        <p className="text-sm font-semibold text-orange-500">
          {discountPercentage.toFixed(0)}% off
        </p>
      </div>
    )}
  </div>
);

const SizeSelector = () => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold">Select Size</h3>
      <button className="text-sm font-semibold text-primary hover:underline">
        Size Guide
      </button>
    </div>
    <div className="flex gap-2 flex-wrap">
      {SIZES.map((size, index) => (
        <Button
          key={size}
          variant="outline"
          className="px-4 py-2 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"
          data-selected={index === 0}
        >
          {size}
        </Button>
      ))}
    </div>
  </div>
);

const ProductActions = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <div className="flex gap-2 items-center">
        <Button variant="outline" className="rounded-full size-12">
          <Minus />
        </Button>

        <span className="p-2">1</span>

        <Button variant="outline" className="rounded-full size-12">
          <Plus />
        </Button>
      </div>
      <div className="flex gap-4 ml-6">
        <Button className="flex-1 font-semibold rounded-full" size="lg">
          Buy this Item
        </Button>
        <Button
          variant="outline"
          className="flex-1 font-semibold rounded-full"
          size="lg"
        >
          Add to Cart
        </Button>
      </div>
    </div>
    <div className="flex items-center gap-2 text-muted-foreground">
      <Car className="h-4 w-4" />
      <p className="text-xs">Free delivery for first timers - Try Now</p>
    </div>
  </div>
);

const SimilarProducts = () => (
  <section className="mb-8">
    <h2 className="font-semibold text-2xl mb-4">Similar Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {MOCK_PRODUCTS.slice(0, SIMILAR_PRODUCTS_COUNT).map((product, index) => (
        <ProductCard key={product.slug} index={index} product={product} />
      ))}
    </div>
  </section>
);

// Main Component
const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const discountPercentage = calculateDiscountPercentage(
    product.price,
    product.discountPrice,
  );

  return (
    <div className="flex flex-col flex-1 px-4">
      <Breadcrumb slug={slug} />

      <div className="mt-6 w-full pb-16 border-b border-border">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Images */}
          <ImageGallery images={product.images} title={product.title} />

          {/* Right Column - Product Details */}
          <div className="flex flex-col lg:flex-1">
            <div className="p-8 lg:p-12 shadow-md bg-card/10 rounded-xl space-y-6">
              <Badge variant="default" className="font-semibold w-fit">
                {product.category}
              </Badge>

              <div className="space-y-3">
                <h1 className="font-bold text-3xl lg:text-4xl">
                  {product.title}
                </h1>
                <div className="flex gap-2 items-center">
                  <p className="text-sm text-muted-foreground capitalize">
                    {product.slug}
                  </p>
                  <Dot className="text-muted-foreground" />
                  <ProductRating />
                </div>
              </div>

              <PriceDisplay
                price={product.price}
                discountPrice={product.discountPrice}
                discountPercentage={discountPercentage}
              />

              <ProductDescription
                description={product.description}
                images={product.images}
                title={product.title}
              />

              <SizeSelector />

              <ProductActions />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SimilarProducts />
      </div>
    </div>
  );
};

export default ProductPage;
