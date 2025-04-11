import {assert} from 'chai';

import {isWordInBoggle, board} from '../boggle';

describe('tests start here', function() {
  const validWords = ['rap', 'photography', 'hoist', 'run'];
  const invalidWords = ['grape', 'prune', 'meager', 'pity']

  validWords.forEach((word) => {
    it(`returns true for ${word}`, function() {
      assert.isTrue(isWordInBoggle(word.toLocaleUpperCase(), board));
    })
  })

  invalidWords.forEach((word) => {
    it(`returns false for ${word}`, function() {
      assert.isFalse(isWordInBoggle(word.toLocaleUpperCase(), board));
    })
  })
})
