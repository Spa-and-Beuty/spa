// import ProductsList from "@/components/admin/ProductsList";
// import { getManyProducts } from "@/data/products";
import React from "react";
import ProductsList from "@/components/admin/ProductsList";
import { getManyProducts } from "@/data/products";
import { bitter } from "../../../../constants";
export const dynamic = "force-dynamic";
export default async function page() {
  // const products = await getManyProducts();
  // const allProducts = products.products;
  const allProducts = await getManyProducts();

  return (
    <div className="p-10">
      <h1 className={`${bitter.className} font-medium text-4xl mb-10`}>
        Browse our Products
      </h1>
      <ProductsList products={allProducts} />
    </div>
  );
}
