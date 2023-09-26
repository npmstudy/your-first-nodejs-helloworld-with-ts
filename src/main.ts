#! /usr/bin/env node

import { HelloWorld } from "./helloworld";
import { IPerson } from "..";

const cli: IPerson = new HelloWorld();

// 调用异步函数
const person = process.argv[2];

cli.sayHi(person);
