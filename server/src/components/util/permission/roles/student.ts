import { ac } from "./index";

ac.grant("student")
  .readOwn("login", ["id", "email", "!role"])
  .createOwn("login", ["email", "password"])
  .updateOwn("login", ["email", "password", "!role"])
  .deleteOwn("login");
