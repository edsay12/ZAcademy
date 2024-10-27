import { Axios } from "@/utils/Axios";

class Stared {
  async stared(userId: string, courseId: string) {
    try {
      const response = await Axios.post(`/api/stared/${userId}/${courseId}`)
      return response.data.data;
    } catch (error) {
      throw new Error("Erro ao favoritar");
    }
  }
}

export const staredCourse = new Stared();
