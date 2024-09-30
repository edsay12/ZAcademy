import { Axios } from "@/utils/Axios";

 class UserServices {
  async getCourseById({ id }: { id: string; }) {
    try {
      const response = await Axios.get(`/api/users/${id}`);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
}

export const userServices = new UserServices()
