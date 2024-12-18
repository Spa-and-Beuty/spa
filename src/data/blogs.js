"use server";

import fetcher from "./fetcher";

export async function createBlog(data) {
  try {
    const res = await fetcher.post("/api/v1/blog", data);
    return res;
  } catch (error) {
    console.error("Error creating blog:", error);
    return { error: error.message || "Failed to create blog" };
  }
}

export async function getManyBlog(query = "") {
  try {
    const res = await fetcher.get(`/api/v1/blog`);
    console.log(res.data);
    return { blogs: res.data, totalPages: res.data.totalPages };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: error.message || "Failed to fetch blogs" };
  }
}

export async function getOneBlog(id) {
  try {
    const res = await fetcher.get(`/api/v1/blog/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { error: error.message || "Failed to fetch blog" };
  }
}

export async function updateBlog(id, data) {
  try {
    const res = await fetcher.put(`/api/v1/blog/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("Error updating blog:", error);
    return { error: error.message || "Failed to update blog" };
  }
}

export async function deleteBlog(id) {
  try {
    const res = await fetcher.delete(`/api/v1/blog/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { error: error.message || "Failed to delete blog" };
  }
}
