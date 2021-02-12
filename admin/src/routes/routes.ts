import { IRoute } from "../constants";
import { HomePage } from "../pages/Home";

export const authRoutes: IRoute[] = [
    { path: "/", component: HomePage, exact: true },
];

export const adminRoutes: IRoute[] = [];
