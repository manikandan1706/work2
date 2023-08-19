import { IRepositoryConfig, IServerConfig } from "./interfaces";
import { injectable, inject } from "inversify";

@injectable()
export default class Configurations implements IRepositoryConfig, IServerConfig {

    private configs: any;

    constructor() {
        const env = process.env.NODE_ENV || "dev";
        this.configs = {
            repository: {
                connectionString: "mongodb://localhost/taskdb"
            },
            server: {
                port: 5000
            }
        }
    }

    public get connectionString() { return this.configs.repository.connectionString; }
    public get port() { return this.configs.server.port; }
}
