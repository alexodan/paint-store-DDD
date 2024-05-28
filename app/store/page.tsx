import { getPaginatedProducts } from "@/domains/products/api";
import { ProductCard } from "@/domains/products/components/ProductCard";

export default async function StorePage() {
  const products = await getPaginatedProducts({ offset: 0, limit: 10 });

  return (
    <div className="border-white border-2 p-4 h-full max-w-5xl mx-auto">
      <h2 className="text-4xl mb-6">Browse products</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
