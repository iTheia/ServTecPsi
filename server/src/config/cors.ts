import { CorsOptions } from "cors";
import { config } from "./main";

export const corsConfig: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (config.allowedOrigin.indexOf(origin) === -1) {
            return callback(new Error("not allowed"));
        }
        return callback(null, true);
    },
    credentials: true,
};
