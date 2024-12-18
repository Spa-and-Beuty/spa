"use server";

import fetcher from "./fetcher";

export async function updateUser(id, data) {
  try {
    const res = await fetcher.put(`/auth/update/${id}`, data);

    return res.data;
  } catch (error) {
    return { error: error };
  }
}
