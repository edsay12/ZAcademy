import { Axios } from "@/utils/Axios";

class UserServices {
  async getCourseById({ id }: { id: string }) {
    if (!id) {
      return console.log("user id vazio");
    }

    try {
      const response = await Axios.get(`/api/users/${id}`);
      return response.data.data;
    } catch (error) {
      console.log("erro", error);
      return error;
    }
  }
  async updateUser({ id, data }: { id: string | undefined; data: FormData }) {
    
    if (!id) {
      return console.log("user id vazio");
    }

    try {
      const response = await Axios.post(`/api/users/update/${id}`, 
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );
      return response.data;
    } catch (error) {
      console.log("eero", error);
      return error;
    }
  }
}

export const userServices = new UserServices();
