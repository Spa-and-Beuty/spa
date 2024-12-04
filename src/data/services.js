"use server";

import fetcher from "./fetcher";
// import revalidate from "./revalidate.service";

export async function createService(data) {
  try {
    const category = await fetcher.post("/api/v1/services", data);
    console.log(category);
    return category.data;
  } catch (error) {
    // console.log({ error: error });
    return { error: error };
  }
}

export async function getManyServices(query = "") {
  try {
    const res = await fetcher.get(`/api/v1/services`);
    // console.log("Fetched data:", JSON.stringify(res)); // Ensure the response is what you expect
    return res.data; // Extract only the data part
  } catch (error) {
    console.error("Error fetching services on client:", error.message);
    throw error; // Re-throw for higher-level error handling
  }
}

export async function getOneService(id) {
  const res = await fetcher.get(`/api/v1/services/${id}`);
  return res.data;
}

export async function updateService(id, data) {
  const res = await fetcher.put(`/categories/${id}`, data);
  return res.data;
}

export async function deleteService(id) {
  const res = await fetcher.delete(`/api/v1/services/${id}`);
  return res.data;
}
