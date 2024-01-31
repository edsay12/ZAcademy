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
