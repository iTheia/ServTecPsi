import multer from "multer";
import { v4 as uuid } from "uuid";
import { extname } from "path";
import { mkdirSync } from "fs";
import { IRequest } from "../components/types";

const storageEngine = multer.diskStorage({
    destination: (req: IRequest, _, callback: CallableFunction) => {
        const path = `static/images/${req.userInfo.id}/`;
        // @ts-ignore
        mkdirSync(path, { recursive: true });
        callback(null, path);
    },
    filename: (req, file, cb) => {
        const fileName = uuid() + extname(file.originalname);
        cb(null, fileName);
    },
});

export const upload = multer({
    storage: storageEngine,
    limits: {
        fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const mimeType = fileTypes.test(file.mimetype);
        const extension = fileTypes.test(extname(file.originalname));
        if (mimeType && extension) {
            return cb(null, true);
        }
        req.res.send({ error: true, msg: "Extension del archivo invalida" });
    },
});
