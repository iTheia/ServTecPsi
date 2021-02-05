import "reflect-metadata";
import { createConnection } from "typeorm";
import { config, dbConfig } from "./config";
import { app } from "./http/app";
import { HTTPServer } from "./http/server";
import { pagination } from "typeorm-pagination";

const httpServer = new HTTPServer(app);
httpServer.connectDb(createConnection, dbConfig);

httpServer.useMiddleware(pagination);

httpServer.start(config.port);
