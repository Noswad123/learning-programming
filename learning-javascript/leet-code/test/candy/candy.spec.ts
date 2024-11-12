import { assert } from "chai";
import { candy } from "../../src/candy/candy";

describe(candy.name, function () {
  it("should return the correct number of candies", function () {
    const input = [1, 0, 2];
    const result = candy(input);
    const expected = 5;
    assert.strictEqual(result, expected);
  });
});
