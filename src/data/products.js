"use server";

import fetcher from "./fetcher";
// import revalidate from "./revalidate.service";

export async function createProduct(data) {
  try {
    const product = await fetcher.post(
      "/api/v1/products/create-product",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return product.data;
  } catch (error) {
    return { error: error };
  }
}

export async function getManyProducts(query = "", page = 1, limit = 10) {
  try {
    const res = await fetcher.get(
      `/api/v1/products/get-all-product?page=${page}&limit=${limit}`
    );
    // console.log(res);
    // console.log(res.data);
    // console.log({
    //   products: res.data.products,
    //   totalPages: res.data.totalPages,
    // });
    return res.data;
  } catch (error) {
    // console.log(error);
  }
}

export async function getOneProduct(id) {
  const res = await fetcher.get(`/api/v1/products/get-product-id/${id}`);
  return res.data;
}

export async function updateProduct(id, data) {
  const res = await fetcher.put(
    `/api/v1/products/update-product-id/${id}`,
    data
  );
  return res.data;
}

export async function deleteProduct(id) {
  const res = await fetcher.delete(`/api/v1/products/delete-product-id/${id}`);
  return res.data;
}
