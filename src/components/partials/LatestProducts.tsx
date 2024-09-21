import ProductCard from "../shared/ProductCard";

const LatestProducts = () => {
  const products = [1, 2, 3, 4, 5, 6];

  return (
    <section className="px-4 mt-8">
      <h2 className="text-2xl font-bold">Buku Terbaru</h2>
      <p className="text-gray-600 mt-2">Jelajahi buku-buku terbaru dari kami</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {products.map((item, index) => (
          <ProductCard key={index}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
