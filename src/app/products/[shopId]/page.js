import ProductDetail from "@/components/ProductDetail";
import { getOneProduct } from "@/data/products";
// import { ThemeProvider } from "next-themes";
import React from "react";

export default async function page({ params }) {
  const { shopId } = await params;
  const singleProduct = await getOneProduct(shopId);

  return <ProductDetail singleProduct={singleProduct} />;
}
