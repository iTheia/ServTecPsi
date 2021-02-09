import { IConfig } from "./types";
import { dev } from "./dev";
import { prod } from "./prod";

export let config: IConfig;

const env = process.env.NODE_ENV || "dev";

switch (env) {
    case "development":
    case "dev":
        config = dev;
        break;
    case "production":
    case "prod":
        config = prod;
        break;
    default:
        config = dev;
        break;
}
