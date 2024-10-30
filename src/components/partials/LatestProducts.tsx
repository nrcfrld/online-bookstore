"use client";

import { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await fetch(`${API_URL}/api/products`);
    const body = await response.json();

    setProducts(body.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="px-4 mt-8">
      <h2 className="text-2xl font-bold">Buku Terbaru</h2>
      <p className="text-gray-600 mt-2">Jelajahi buku-buku terbaru dari kami</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {products.map((item, index) => (
          <ProductCard product={item} key={index}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
