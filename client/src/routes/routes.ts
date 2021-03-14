import { IRoute } from "../constants";
import {
  AssistencePage,
  PostPage,
  ServicesPage,
  SingleTestPage,
  TestsPage,
  HomePage,
  SinglePost,
  CarrerPage,
  CurriculumPage,
  Error404Page,
} from "../pages";

export const authRoutes: IRoute[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/posts", component: PostPage, exact: true },
  { path: "/posts/cambio-de-carrera", component: CarrerPage },
  { path: "/posts/egresados", component: CurriculumPage },
  { path: "/posts/talleres", component: CurriculumPage },
  { path: "/posts/habitos-de-estudio", component: CarrerPage },
  { path: "/posts/:id", component: SinglePost },
  { path: "/tests", component: TestsPage, exact: true },
  { path: "/tests/:id", component: SingleTestPage },
  { path: "/services", component: ServicesPage, exact: true },
  { path: "*", component: Error404Page },
];

export const userRoutes: IRoute[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/posts", component: PostPage, exact: true },
  { path: "/posts/cambio-de-carrera", component: CarrerPage },
  { path: "/posts/egresados", component: CurriculumPage },
  { path: "/posts/talleres", component: CurriculumPage },
  { path: "/posts/habitos-de-estudio", component: CarrerPage },
  { path: "/posts/:id", component: SinglePost },
  { path: "/tests", component: TestsPage, exact: true },
  { path: "/tests/:id", component: SingleTestPage },
  { path: "/services", component: ServicesPage, exact: true },
  { path: "/help", component: AssistencePage, exact: true },
  { path: "*", component: Error404Page },
];
