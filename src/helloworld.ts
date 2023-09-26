import { IPerson } from "..";

export class HelloWorld implements IPerson {
  async sayHi(name: string): Promise<void> {
    // 调用Promise函数
    const text = await this.helloworld(name);
    console.log(text);
  }

  private helloworld(name?: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      if (name) {
        resolve(`Hello ${name}!`);
      } else {
        reject(new Error("fail"));
      }
    });
  }
}
