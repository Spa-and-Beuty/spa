"use server";

import fetcher from "./fetcher";
// import revalidate from "./revalidate.service";

export async function createAppointment(data) {
  try {
    const appointment = await fetcher.post("/api/v1/appointments ", data);

    return appointment.data;
  } catch (error) {
    console.log({ error: error });
    // return { error };
  }
}

export async function getManyAppointments(query = "") {
  try {
    const res = await fetcher.get(`/api/v1/appointments`);
    // console.log("Fetched data:", JSON.stringify(res)); // Ensure the response is what you expect
    return res.data; // Extract only the data part
  } catch (error) {
    console.error("Error fetching services on client:", error.message);
    throw error; // Re-throw for higher-level error handling
  }
}

export async function getOneAppointment(id) {
  const res = await fetcher.get(`/api/v1/appointments/${id}`);
  return res.data;
}

export async function updateAppointment(id, data) {
  const res = await fetcher.put(`/api/v1/appointments/${id}`, data);
  return res.data;
}

export async function deleteAppointment(id) {
  const res = await fetcher.get(`/api/v1/appointments/${id}`);
  return res.data;
}
