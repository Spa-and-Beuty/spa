"use server";

import fetcher from "./fetcher";
// import revalidate from "./revalidate.service";

export async function createContactMessage(data) {
  try {
    const message = await fetcher.post(
      "/api/v1/contact-message/create-message",
      data,
    );
    console.log(message);
    return message.data;
  } catch (error) {
    // console.log({ error: error });
    return { error: error };
  }
}

export async function getManyPriceing(query = "") {
  try {
    const res = await fetcher.get(`/api/v1/price/get-price`);
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
  const res = await fetcher.get(`/categories/${id}`);
  return res.data;
}
