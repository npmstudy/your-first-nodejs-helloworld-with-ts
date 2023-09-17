import { test, describe } from "node:test";
import assert from "node:assert";

import { HelloWorld } from "../src/helloworld";
import { IPerson } from "..";

describe("test suite", function () {
  test("test if works correctly", function (t) {
    const log = t.mock.method(global.console, "log");

    assert.strictEqual(log.mock.callCount(), 0);
    // call hello world say method
    const cli: IPerson = new HelloWorld();
    cli.say("use TypeScript to write Node.js");

    assert.strictEqual(log.mock.callCount(), 1);
  });
});
