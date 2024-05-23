import { formatPrice } from "@/domains/common/format";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  description: string;
  price: number;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div>
      <Image width="200" height="400" src="/product.jpeg" alt={props.name} />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{formatPrice(props.price)}</p>
    </div>
  );
};
