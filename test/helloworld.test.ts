import {test, describe} from 'node:test';
import assert from 'node:assert';

import { HelloWorld } from "../src/helloworld";

describe("test suite", function() {
 test("test if works correctly", function() {
   // run some test
   assert.strictEqual(1, 1);
 })
})
