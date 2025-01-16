import { ReactNode } from "react";

type MyProjectListType = {
  id: number;
  name: string;
  desc: string;
  tech: [
    {
      id: number;
      name: string;
      icon?: ReactNode;
    },
  ];
  src?: string;
};

export const myProjectList: MyProjectListType[] = [
  {
    id: 1,
    name: "iConnect Components",
    desc: "",
    tech: [
      {
        id: 1,
        name: "",
      },
    ],
    src: "/project-images/iconnect.png",
  },
  {
    id: 2,
    name: "Interactive IQRA",
    desc: "",
    tech: [
      {
        id: 2,
        name: "",
      },
    ],
    src: "/project-images/inter-iqra.png",
  },
  {
    id: 3,
    name: "IntelliBraille",
    desc: "",
    tech: [
      {
        id: 3,
        name: "",
      },
    ],
    src: "/project-images/intelliBraille.png",
  },
  {
    id: 4,
    name: "Student Welfare",
    desc: "",
    tech: [
      {
        id: 4,
        name: "",
      },
    ],
    src: "/project-images/student-welfare.png",
  },
];
