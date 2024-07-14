import { API } from "@/lib/axios";

export const listCourses = async () => {
  const resp = await API.get("/api/courses");
  return resp.data;
};
