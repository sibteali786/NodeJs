// reson for explicitly naming file extension as otherwise it do not works as its ecma script way.
import {add} from "./myTest.mjs";
import assert from "assert";

console.log("add()\nShould add two numbers");

try {
    assert.strictEqual(add(1,2),3)
    console.log('Success');
} catch (e) {
    console.log("Failure");
    console.error(e);
}