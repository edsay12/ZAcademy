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


export type  InstructorBasicDetails = {
  id:number
  name:string
  role:string
  image:string
  description:string
  classification:number
  assessmentsNumber:number
  studentsNumber:number
  courcesNumber:number
}