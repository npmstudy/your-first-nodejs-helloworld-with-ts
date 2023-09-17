import {expectType} from 'tsd';

import { IPerson } from ".";
import { HelloWorld } from "./src/helloworld";
const cli:IPerson = new HelloWorld()

expectType<void>(cli.say('use TypeScript to write Node.js'));