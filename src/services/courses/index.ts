import { Course } from "@/app/api/courses/all/route";
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

  async getStaredCourses({ userId }: { userId: string }):Promise<Course[] > {
    try {
      const courseResponse = await Axios.get(`/api/courses/all`);
      const response = await Axios.get(`/api/courses/list/${userId}/stared`);

      const course: Course[] = courseResponse.data.data;

      const stared: string[] = response.data.data;

      const staredCourses = course.filter((item)=> stared.includes(item.id) )

      return staredCourses;
    } catch (error) {
      return [];
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export const courseService = new CourseService();
