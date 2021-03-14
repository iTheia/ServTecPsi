import { RouteComponentProps } from "react-router-dom";

export type roles = "student" | "admin";

export interface IUser {
  name: string;
  avatar: string;
  role: roles;
}

export interface IRoute {
  path: string | string[];
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact?: boolean;
}
export interface ILink {
  to: string;
  description: string;
  icon?: any;
}

export interface IPaginated<T> {
  from: number;
  to: number;
  current_page: number;
  prev_page: null | IPage;
  next_page: null | IPage;
  total: number;
  data: T[];
}

export interface IPage {
  page: number;
  limit: number;
}
