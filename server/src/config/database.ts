import { config } from "./main";

const isDev = process.env.NODE_ENV === "dev";
export const dbConfig = isDev
  ? {
      type: config.database.type,
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.database,
      synchronize: false,
      logging: true,
      entities: ["src/components/**/model.ts"],
    }
  : {
      type: config.database.type,
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.database,
      synchronize: true,
      logging: true,
      entities: ["components/**/model.js"],
    };
