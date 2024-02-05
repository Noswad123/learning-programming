import { assert } from "chai";

import { makeItHappen } from "../main";

describe("tests start here", function () {
  it("returns 1 for a", function () {
    assert.strictEqual(makeItHappen("a"), 1);
  });
  it("returns 1 for I", function () {
    assert.strictEqual(makeItHappen("I"), 1);
  });
  it("returns 5", function () {
    assert.strictEqual(makeItHappen("cat"), 5);
  });
});
