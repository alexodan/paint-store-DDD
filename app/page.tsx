import FeaturedProducts from "@/domains/products/components/FeaturedProducts";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <section className="flex min-h-screen max-w-7xl mx-auto p-4 flex-col items-center">
      <div className="w-full flex flex-col min-h-[600px] justify-center items-center bg-[url('/background.jpg')] bg-center bg-cover bg-no-repeat lg:bg-contain">
        <h1 className="text-4xl py-2 px-12 md:text-6xl lg:text-8xl">
          What are you <br /> going to paint?
        </h1>
        <Link
          className="mt-4 p-4 bg-blue-700 text-white rounded-3xl"
          href="/store"
        >
          Go to Store
        </Link>
      </div>
      {/* <Carousel /> with offers or whatever */}
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProducts />
      </Suspense>
    </section>
  );
}
