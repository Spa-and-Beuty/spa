// import ProductsList from "@/components/admin/ProductsList";
// import { getManyProducts } from "@/data/products";
import React from "react";
import ProductsList from "@/components/admin/ProductsList";
import { getManyProducts } from "@/data/products";
export const dynamic = "force-dynamic";
export default async function page() {
  // const products = await getManyProducts();
  // const allProducts = products.products;
  const allProducts = await getManyProducts();

  return (
    <div className="p-10">
      <ProductsList products={allProducts} />
    </div>
  );
}
