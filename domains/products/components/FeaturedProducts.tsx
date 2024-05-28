"use client";

import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { SkeletonWrapper } from "@/domains/common/components/Skeleton";
import { useGetFeaturedProducts } from "../hooks/useGetFeaturedProducts";

export default function FeaturedProducts() {
  const {
    data: featuredProducts,
    isLoading,
    error,
    refetch,
  } = useGetFeaturedProducts();

  return (
    <SkeletonWrapper isLoading={isLoading} error={error} retry={refetch}>
      <div className="border-white border-2 p-2 max-w-5xl">
        <h2 className="text-4xl text-center mb-8">Featured products</h2>
        <div className="grid gap-4 grid-cols-4 justify-center">
          {featuredProducts?.map((product) => (
            <Link
              key={product.id}
              href={`/store/product/${product.id}`}
              className="max-w-48"
            >
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </SkeletonWrapper>
  );
}
