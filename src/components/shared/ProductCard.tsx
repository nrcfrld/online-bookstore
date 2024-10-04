import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href="/products/123">
      <div className="border rounded-md">
        <img
          className="w-full"
          src="https://cdn.gramedia.com/uploads/picture_meta/2023/2/22/syzbvnjxkwe8fxbobfqzjb.jpeg"
          alt=""
        />

        <div className="px-2 py-2">
          <h3>How To Win Friends and Influence People</h3>
          <p className="text-gray-500">Dale Carnegie</p>

          <div className="flex mt-6 justify-between items-center">
            <span className="font-bold">Rp 50.000</span>
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
