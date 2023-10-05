import { it, describe } from "node:test";
import assert from "node:assert";

import { HelloWorld } from "../src/helloworld";
import { IPerson } from "..";

describe("test suite", function () {
  it("test if works correctly", async function (t) {
    const log = t.mock.method(global.console, "log");

    assert.strictEqual(log.mock.callCount(), 0);
    // call hello world say method
    const cli: IPerson = new HelloWorld();
    await cli.sayHi("liangqi");

    assert.strictEqual(log.mock.callCount(), 1);
  });

  it("test if works incorrectly", async function () {
    const cli: IPerson = new HelloWorld();
    assert.rejects(async () => await cli.sayHi(), new Error("fail"));
  });
});
