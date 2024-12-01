"use server";

import fetcher from "./fetcher";

export async function createEmployee(data) {
  try {
    const res = await fetcher.post("/api/v1/employees/create-employee", data);
    console.log(res);

    return res.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    console.log(error);
    return { error: error.message || "Failed to create employee" };
  }
}

export async function getManyEmployees(query = "") {
  try {
    const res = await fetcher.get(`/api/v1/employees/get-employee`);
    console.log(res.data);
    return { employees: res.data };
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
    const res = await fetcher.put(`/blogs/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("Error updating blog:", error);
    return { error: error.message || "Failed to update blog" };
  }
}

export async function deleteBlog(id) {
  try {
    const res = await fetcher.delete(`/blogs/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { error: error.message || "Failed to delete blog" };
  }
}
