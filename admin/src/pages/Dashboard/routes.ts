import { ILink, IRoute } from "../../constants";
import { AuthorPage } from "./Author";
import { DashboardHome } from "./Home";
import { PostPage } from "./Post";

export const dashboardLinks: ILink[] = [
  {
    description: "Pruebas",
    to: "/test",
  },
  {
    description: "Publicaciones",
    to: "/posts",
  },
  {
    description: "Autores",
    to: "/authors",
  },
];

export const Appinks: ILink[] = [
  {
    description: "Inicio",
    to: "/dashboard",
  },
  {
    description: "Asistencia",
    to: "/assitence",
  },
  {
    description: "Tramites",
    to: "/formalities",
  },
];

export const dashboardRoutes: IRoute[] = [
  {
    path: "/",
    component: DashboardHome,
    exact: true,
  },
  {
    path: "/authors",
    component: AuthorPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/tests",
    component: AuthorPage,
  },
];

export const AppRoutes: IRoute[] = [
  {
    path: "/assitence",
    component: AuthorPage,
  },
  {
    path: "/formalities",
    component: AuthorPage,
  },
];
