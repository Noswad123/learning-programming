import { assert } from "chai";
import { canCompleteCircuit } from "../../src/gas-station/gas-station";

describe(canCompleteCircuit.name, function () {
  [
    // { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2], expected: 3 },
    { gas: [5,1,2,3,4], cost: [4,4,1,5,1], expected: 4 },
    // { gas: [2, 3, 4], cost: [3, 4, 3], expected: -1 },
    // { gas: [5], cost: [4], expected: 0 },
  ].forEach(({ gas, cost, expected }) => {
    it(`should reach the destination gas: ${JSON.stringify(
      gas
    )} cost: ${JSON.stringify(cost)}`, function () {
      const result = canCompleteCircuit(gas, cost);
      assert.strictEqual(result, expected);
    });
  });
});
