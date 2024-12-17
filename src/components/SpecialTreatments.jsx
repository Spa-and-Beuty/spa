import { BsBox } from "react-icons/bs";
import { bitter } from "../../constants";
import ProductCard from "@/components/ProductCard";
import { getManyProducts } from "@/data/products";

export const SpecialTreatments = async () => {
  const allProducts = await getManyProducts();
  allProducts.length = 4;

  return (
    <section
      className={
        "grid max-sm:px-10 max-lg:px-10 max-lg:grid-rows-2 gap-10 grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 lg:mt-30 md:mt-20 sm:mt-10 mt-6 flex-wrap "
      }
    >
      {allProducts.map((product) => (
        <ProductCard
          loading={false}
          key={product.id}
          product={product}
        ></ProductCard>
      ))}
    </section>
  );
};
