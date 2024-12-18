import { BsBox } from "react-icons/bs";
import { bitter } from "../../constants";
import ProductCard from "@/components/ProductCard";
import { getManyProducts } from "@/data/products";

export const SpecialTreatments = async () => {
  const allProducts = await getManyProducts();
  allProducts.length = 4;

  return (
    <section className="max-sm:px-10 lg:mt-30 md:mt-20 sm:mt-10 mt-6 max-lg:px-10">
      <h1 className={`${bitter.className} font-medium text-4xl mb-10`}>
        Browse our Products
      </h1>
      <section
        className={
          "grid  max-lg:grid-rows-2 gap-10 grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2  flex-wrap "
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
    </section>
  );
};
