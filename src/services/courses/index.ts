import { Axios } from "@/utils/Axios";

export default async function getCourses() {
  try {
    const response = await Axios.get(
      "/api/courses/list/1c544dcf-976c-4c16-a386-f3f9695f8355"
    );

    return response.data;
  } catch (error) {
    return error;
  }
}
