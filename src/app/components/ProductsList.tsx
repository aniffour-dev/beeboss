"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts, Product } from "@/api/graphql/products";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-old-standard-tt",
});

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 mb-24" aria-label="Products">
      <div className="flex flex-col items-center">
        <h3 className={`${archivo.className} text-gray-900 font-bold mb-5 text-4xl text-center`}>
          Our Products
        </h3>
        {products.length > 0 ? (
          <section className="columns-1 sm:columns-2 lg:columns-2 xl:columns-4 gap-6 space-y-5">
            {products.map((product) => (
              <Link href={`/${product.slug}`} key={product.slug}>
                <article className="relative break-inside-avoid mb-8">
                  <Image
                    src={product.image?.sourceUrl || `https://dev-tastyeats.pantheonsite.io/wp-content/uploads/2024/10/loading.webp`}
                    alt={product.name}
                    title={product.name}
                    loading="lazy"
                    width={400}
                    height={250}
                    className="w-full h-auto"
                  />
                  <h4 className="text-lg text-amber-800 transition-all hover:text-amber-950 font-bold my-2">
                    {product.name}
                  </h4>
                  <p className="text-slate-700 text-sm mt-1.5">
                    {product.image?.seo?.metaDesc}
                  </p>
                  <p className="text-slate-700 text-sm mt-1.5">
                    On Sale: {product.onSale ? "Yes" : "No"}
                  </p>
                </article>
              </Link>
            ))}
          </section>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Products;
