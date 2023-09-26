import { IPerson } from "..";

/**
 * HelloWorld Class.
 * @public
 */
export class HelloWorld implements IPerson {
  /**
   * this is a public
   * @param name
   * @returns {Promise<void>}
   */
  public async sayHi(name: string): Promise<void> {
    // 调用Promise函数
    const text = await this.helloworld(name);
    console.log(text);
  }

  /**
   * get hello text with name.
   *
   * @param name someone's name
   * @returns hello text
   * @internal
   */
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
