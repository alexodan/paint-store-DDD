type ProductApiResponse = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export async function getFeaturedProducts(): Promise<ProductApiResponse[]> {
  const { record } = await fetch(
    "https://api.jsonbin.io/v3/b/664f9d9ee41b4d34e4f85ae0"
  ).then((res) => res.json());

  // TODO: error scenarios

  return record.data as ProductApiResponse[];
}

export async function getPaginatedProducts(): Promise<ProductApiResponse[]> {
  const { record } = await fetch(
    "https://api.jsonbin.io/v3/b/664f9d9ee41b4d34e4f85ae0"
  ).then((res) => res.json());

  // TODO: error scenarios

  return record.data as ProductApiResponse[];
}
