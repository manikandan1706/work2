import "reflect-metadata";
import { Container } from "inversify";
import {IRepositoryConfig, IServerConfig} from "../../configs/interfaces";
import Configurations from "../../configs/configurations";

const env = process.env.NODE_ENV || "dev";
var kernel = new Container();

//Register ioc
//Configurations
kernel.bind<IRepositoryConfig>("IRepositoryConfig").to(Configurations).inSingletonScope();
kernel.bind<IServerConfig>("IServerConfig").to(Configurations).inSingletonScope();

//Repositories
// kernel.bind<ITaskRepository>("ITaskRepository").to(TaskRepository).inSingletonScope();


export default kernel;