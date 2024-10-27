import { Axios } from "@/utils/Axios";

class CourseService {
  async getAllCourses() {
    try {
      const response = await Axios.get("/api/courses/all");

      return response.data.data;
    } catch (error) {
      return error;
    }
  }

  async getCourseById({ id }: { id: string }) {
    try {
      const response = await Axios.get(`/api/courses/list/one/${id}`);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }

  async getStaredCourses({ userId }: { userId: string }) {
    try {
      const response = await Axios.get(`/api/courses/list/${userId}/stared`);

      return response.data.data;
    } catch (error) {
      return error;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export const courseService = new CourseService();
