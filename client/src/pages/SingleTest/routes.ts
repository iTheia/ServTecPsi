import { IRoute } from "../../constants";
import Home from "./Home";
import Result from "./Result";
import Test from "./Test";

export const testRoutes: IRoute[] = [
  { path: "/", component: Home, exact: true },
  { path: "/questions", component: Test },
  { path: "/result", component: Result },
];
