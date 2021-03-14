import {
  Description,
  AccountTree,
  CallSplit,
  Business,
  Chat,
  Folder,
} from "@material-ui/icons";

export interface IService {
  Icon: any;
  title: string;
  description: string;
  to: string;
}
export const authServices: IService[] = [
  {
    to: "/posts",
    title: "Articulos",
    Icon: Description,
    description: "Articulos",
  },
  {
    to: "/tests",
    title: "Cuestionarios",
    Icon: AccountTree,
    description: "Cuestionarios",
  },
];
export const userServices: IService[] = [
  {
    to: "/posts",
    title: "Articulos",
    Icon: Description,
    description: "Articulos",
  },
  {
    to: "/test",
    title: "Cuestionarios",
    Icon: AccountTree,
    description: "Cuestionarios",
  },
  {
    to: "/help",
    title: "Ayuda Psicologica",
    Icon: Chat,
    description: "Cuestionarios",
  },
  {
    to: "/posts/cambio-de-carrera",
    title: "Cambio de carrera",
    Icon: CallSplit,
    description: "Cuestionarios",
  },
  {
    to: "/posts/egresados",
    title: "Guia para Egresados",
    Icon: Business,
    description: "Cuestionarios",
  },
  {
    to: "/posts/talleres",
    title: "Talleres",
    Icon: Folder,
    description: "Cuestionarios",
  },
];
