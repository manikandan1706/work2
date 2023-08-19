import * as Hapi from "@hapi/hapi";
import * as path from "path";
import * as fs from "fs";
import kernel from "./libs/ioc";
import { IServerConfig } from "./configs/interfaces";

const serverConfigs = kernel.get<IServerConfig>("IServerConfig");
const port = process.env.port || serverConfigs.port;

const server = new Hapi.Server({
    port: port,
    routes: {
        cors: true
    }
});

export default server;