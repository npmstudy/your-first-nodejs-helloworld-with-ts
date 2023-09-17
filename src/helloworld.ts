import { IPerson } from "..";

export class HelloWorld implements IPerson {
  say(name: string): void {
    console.log(`Hello, ${name}!`);
  }
}
