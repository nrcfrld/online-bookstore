import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  product: Product;
}

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-md">
        <Image
          className="w-full"
          src={`${API_URL}${product.thumbnail}`}
          alt={product.title}
          width={300}
          height={300}
        />

        <div className="px-2 py-2">
          <h3>{product.title}</h3>
          <p className="text-gray-500">{product.author}</p>

          <div className="flex mt-6 justify-between items-center">
            <span className="font-bold">Rp {product.price}</span>
            <button
              type="button"
              className="text-indigo-600 border font-bold px-2 py-2 rounded-md hover:bg-indigo-700 hover:text-white text-sm border-indigo-600"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
