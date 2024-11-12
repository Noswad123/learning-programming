import { assert } from "chai";
import { isPalindrome } from "../../src/valid-palindrome/valid-palindrome";

describe(isPalindrome.name, function () {
  [{ text: "A man, a plan, a canal: Panama", expected: true }].forEach(
    ({ text, expected }) => {
      it("should figure out if this word is a palindrome", function () {
        const result = isPalindrome(text);
        assert.strictEqual(result, expected);
      });
    }
  );
});
