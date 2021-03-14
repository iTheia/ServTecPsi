import { IRoute } from "../constants";
import { DashBoardPage, LoginPage } from "../pages";

export const authRoutes: IRoute[] = [
  {
    path: "/",
    component: LoginPage,
    exact: true,
  },
];

export const adminRoutes: IRoute[] = [
  {
    path: "/dashboard",
    component: DashBoardPage,
  },
];
