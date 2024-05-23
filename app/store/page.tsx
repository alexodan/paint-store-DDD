import { getPaginatedProducts } from "@/domains/products/api";
import { ProductCard } from "@/domains/products/components/ProductCard";
import Link from "next/link";

export default async function StorePage() {
  const featuredProducts = await getPaginatedProducts();

  return (
    <div className="border-white border-2 p-2 h-full">
      <h2 className="text-4xl">Featured products</h2>
      <div className="grid grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <Link key={product.id} href={`/store/product/${product.id}`}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
