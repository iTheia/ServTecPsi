type type = "posts" | "tests";

export interface ITrending {
  title: string;
  type: type;
  description: string;
  image: string;
  slug: string;
}

export const services: ITrending[] = [
  {
    description: "",
    image: "",
    title: "",
    type: "posts",
    slug: "cambio-de-carrera",
  },
  { description: "", image: "", title: "", type: "posts", slug: "talleres" },
  {
    description: "",
    image: "",
    title: "",
    type: "posts",
    slug: "habitos-de-estudio",
  },
  {
    description: "",
    image: "",
    title: "",
    type: "posts",
    slug: "egresados",
  },
];
