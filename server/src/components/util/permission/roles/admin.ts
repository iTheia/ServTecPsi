import { ac } from "../roles";

ac.grant("admin").extend("student").readAny([""]);
