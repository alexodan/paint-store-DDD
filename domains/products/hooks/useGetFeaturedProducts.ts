import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../api";

export function useGetFeaturedProducts() {
  const { data, error, isLoading, ...rest } = useQuery({
    queryKey: ["featured-products"],
    queryFn: async () => getFeaturedProducts(),
  });

  return {
    data,
    error,
    isLoading,
    ...rest,
  };
}
