import { HelloWorld } from "./helloworld";
import { IPerson } from "..";

const cli: IPerson = new HelloWorld();
cli.say("use TypeScript to write Node.js");
