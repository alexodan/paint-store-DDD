import Link from "next/link";
import { getFeaturedProducts } from "../api";
import { ProductCard } from "./ProductCard";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function FeaturedProducts() {
  console.log("sleeping...");
  await sleep(3000);
  console.log("done.");
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="border-white border-2 p-2 w-full">
      <h2 className="text-4xl text-center mb-8">Featured products</h2>
      <div className="grid gap-4 grid-flow-col auto-cols-max justify-center">
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
