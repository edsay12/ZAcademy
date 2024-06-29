export type LinkType = {
  path: string;
  name: string;
};

export type AcordeaoData = {
  id: number;
  title: string;
  lessons: {
    id: number;
    title: string;
  }[];
};

export type InstructorBasicDetails = {
  id: string;
  name: string;
  role: string;
  roleType:string
  image: string;
  description: string;
  classification: number;
  assessmentsNumber: number;
  studentsNumber: number;
  courcesNumber: number;
};

export type CatergoriesLinkTypes = {
  links: LinkType[];
};

export type CardData = {
  courseId: number;
  courseImageUrl: string;
  instructorName: string;
  userImageUrl: string;
  courseLevel: CourseLevels;
  coursePrice: number;
  courseStarNumber: 2 | 1 | 5 | 3 | 4;
  courseTitle: string;
  courseTotalTime: string;
  category: Categories;
};

export type Categories =
|"TUDO"
|"negocios"
|"designer"
|"desenvolvimento"
|"gerenciamento"
|"tecnologia"
|"fotografia"

export type CourseLevels = "iniciante" | "intermediario" | "avancado"



export enum Role {
  STUDENT = "STUDENT",
  INSTRUCTOR = "INSTRUCTOR"
}