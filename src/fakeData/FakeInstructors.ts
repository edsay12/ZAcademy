import { InstructorBasicDetails } from "@/app/@types";

export const fakeInstructors: InstructorBasicDetails[] = [
  {
    id: "asdas",
    name: "Alice Johnson",
    roleType: "Math Instructor",
    image: "/cardUser.jpeg",
    role:"instructor",
    description:
      "Alice é uma Alice é uma entusiasta da matemática, apaixonada por desvendar os mistérios dos números e equações. Ela acredita que a matemática não é apenas uma disciplina acadêmica, mas também uma ferramenta poderosa para resolver problemas do mundo real. Com um sorriso caloroso, ela guia seus alunos através de conceitos complexos, tornando-os acessíveis e interessantes. Nos fins de semana, você pode encontrá-la explorando trilhas de montanha ou resolvendo quebra-cabeças matemáticos desafiadores. entusiasta da matemática, apaixonada por desvendar os mistérios dos números e equações. Ela acredita que a matemática não é apenas uma disciplina acadêmica, mas também uma ferramenta poderosa para resolver problemas do mundo real. Com um sorriso caloroso, ela guia seus alunos através de conceitos complexos, tornando-os acessíveis e interessantes. Nos fins de semana, você pode encontrá-la explorando trilhas de montanha ou resolvendo quebra-cabeças matemáticos desafiadores.",
    classification: 4.5,
    assessmentsNumber: 120,
    studentsNumber: 80,
    courcesNumber: 5,
  },
  {
    id: "asda",
    name: "Bob Smith",
    role:"instructor",
    roleType: "History Professor",
    image: "/cardUser.jpeg",
    description: "Specializes in ancient civilizations and world history.",
    classification: 4.2,
    assessmentsNumber: 90,
    studentsNumber: 60,
    courcesNumber: 3,
  },
  // Add more fake instructors here...
];
