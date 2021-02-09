import { config } from "./main";

export const dbConfig = {
    type: config.database.type,
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    synchronize: false,
    logging: true,
    entities: ["src/components/**/model.ts"],
};
