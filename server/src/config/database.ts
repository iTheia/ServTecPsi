import { config } from "./main";

const isDev = process.env.NODE_ENV === "dev";

const synchronize = process.argv.includes("sync");

export const dbConfig = isDev
  ? {
      type: config.database.type,
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.database,
      synchronize,
      logging: true,
      entities: ["src/components/**/index.ts"],
    }
  : {
      type: config.database.type,
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.database,
      synchronize,
      logging: true,
      entities: ["components/**/index.js"],
    };
