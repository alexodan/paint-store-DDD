import { PaginationOptions } from "@/domains/common/pagination";

export type ProductApiResponse = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const FEATURED_PRODUCTS_URL =
  "https://api.jsonbin.io/v3/b/664f9d9ee41b4d34e4f85ae0";
const PAGINATED_PRODUCTS_URL =
  "https://api.jsonbin.io/v3/b/664fc4ffacd3cb34a84c946c";

export async function getFeaturedProducts(): Promise<ProductApiResponse[]> {
  const response = await fetch(FEATURED_PRODUCTS_URL);
  const { record } = await response.json();
  return record.data as ProductApiResponse[];
}

export async function getPaginatedProducts({
  offset,
  limit,
}: PaginationOptions): Promise<ProductApiResponse[]> {
  const response = await fetch(PAGINATED_PRODUCTS_URL);
  const { record } = await response.json();
  if (!record.data) {
    throw new Error("No data found for paginated products.");
  }
  return record.data.slice(offset, limit) as ProductApiResponse[];
}
