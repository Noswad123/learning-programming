import { assert } from "chai";
import { RandomizedSet } from "../../src/insert-delete-get-random/insert-delete-get-random";

describe(RandomizedSet.name, function () {
  let set: RandomizedSet;
  beforeEach(function () {
    set = new RandomizedSet();
  });
  it("should handle the inputs correctly", function () {
    const inputs = [
      "insert",
      "insert",
      "insert",
      "insert",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
      "getRandom",
    ];
		const moreInputs = [1, 10, 20, 30];
    const outputs = [];
		for(let i = 0; i<inputs.length; i++) {
			if(inputs[i] === 'insert') {
				outputs.push(set[inputs[i]](moreInputs[i]));
			} else {
				outputs.push(set[inputs[i]]());
			}
		}
		assert.isOk(outputs);
  });
});
