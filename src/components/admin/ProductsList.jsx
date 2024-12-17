// "use client";
import { ChevronDown, DeleteIcon, Edit, EyeIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddPricing from "@/components/admin/AddPricing";
import AddProducts from "@/components/admin/AddProducts";
import { deleteProduct } from "@/data/products";
// import { deleteProduct, getManyProducts } from "@/data/products";
// import { getManyProducts } from "@/data/products";

export default function ProductsList({ products }) {
  // const items = await getManyProducts();
  // const products = items.products;
  // console.log("all products", products);

  // const [products, setProductList] = useState([]);
  // useEffect(() => {
  //   async function getProducts() {
  //     const fetchedproducts = await getManyProducts();
  //     setProductList(fetchedproducts);
  //   }
  //   getProducts();
  // }, []);

  // if(products)

  return (
    <div>
      <div className="p-6 mb-3 w-full  rounded bg-white">
        <div className="flex items-center justify-between">
          <h4 className="card-title">Recent Products</h4>
          <div className="flex item gap-2">
            <Dialog>
              <DialogTrigger
                className={
                  "text-sm p-2 text-white rounded bg-link-color-hover transition-all duration-200 ease-in-out hover:bg-blackish-color"
                }
              >
                + Add Product
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Product</DialogTitle>
                  <DialogDescription className={"w-full"}>
                    <AddProducts />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="relative">
              <button className="p-2 rounded bg-gray-200 flex items-center gap-1 text-sm">
                File <ChevronDown size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-scroll w-full">
        <table className="w-full ">
          <thead>
            <tr className="border-b bg-white text-[#5d7186]">
              <th className=" p-4 text-left">Product & Size</th>
              <th className=" p-4 text-left">Price</th>
              <th className=" p-4 text-left">Stock</th>
              <th className=" p-4 text-left">Category</th>
              <th className=" p-4 text-left">Rating</th>
              <th className=" p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b bg-white">
                <td className="flex gap-2">
                  <Image
                    src={product?.images[0]}
                    width={50}
                    height={50}
                    className="w-10 h-10 object-cover rounded shadow"
                    alt={product?.name}
                  />
                  <span>
                    <h1>{product.name}</h1>
                    <h2 className="text-[#8686a7] text-sm">
                      Size: {product?.sizes}
                    </h2>
                  </span>
                </td>
                <td className="text-[#8686a7] text-sm">{product?.price}</td>
                <td className="text-sm">{product?.stock}</td>
                <td className="text-[#8686a7] text-sm">{product?.tag}</td>
                <td className="gap-1 justify-center items-center text-[#8686a7] text-sm">
                  <span className="bg-[#8686a7] mr-2 px-2 py-1 text-white inline rounded">
                    <Star
                      size={15}
                      className="inline"
                      fill="yellow"
                      color="yellow"
                    />{" "}
                    {product?.rating}
                  </span>
                  Rating
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <Link href={"#"} className="p-1 bg-[#8686a7] rounded">
                      <EyeIcon color="white" />
                    </Link>
                    <Link
                      href={"#"}
                      className="p-1 rounded group hover:bg-[#ff6c2f] transition-colors duration-200 bg-[#ff3d5430]"
                    >
                      <Edit className="text-[#ff6c2f] group-hover:text-white" />
                    </Link>
                    <form
                      action={async () => {
                        "use server";
                        await deleteProduct(product.id);
                      }}
                    >
                      <button
                        type="submit"
                        // onClick={() => handleDelete(product.id)}
                        href={"#"}
                        className="p-1 rounded group hover:bg-hero transition-colors duration-200 bg-[#ff3d5430]"
                      >
                        <DeleteIcon className="text-hero group-hover:text-white" />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
