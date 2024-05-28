import { formatPrice } from "@/domains/common/utils/format";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  description: string;
  price: number;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div>
      <Image
        className="w-full"
        width="200"
        height="400"
        src="/product.jpeg"
        alt={props.name}
      />
      <div className="px-4 pt-2 pb-4">
        <p className="text-xl mb-2">{props.name}</p>
        <p>{props.description}</p>
        <p className="mb-2">{formatPrice(props.price)}</p>
        <Link
          className="rounded-lg bg-teal-500 text-center block w-full px-2 py-1"
          href=""
        >
          Buy now!
        </Link>
      </div>
    </div>
  );
};
