import { describe, expect, it } from '@jest/globals';

import wordFeedback from './wordFeedback.js';

describe('wordFeedback()', () => {
  // testar att en tom sträng ger en tom array
  it('Returns an empty array if input is an empty string', () => {
    const output = wordFeedback('');
    expect(output).toEqual([]);
  });
  // Testar att korrekt feedback ges om inga bokstäver stämmer övers med rätt ord
  it('If no letters matches the correct word, all letters give incorrect', () => {
    const output = wordFeedback('glow', 'hand');
    const expectedOutput = [
      { letter: 'g', result: 'Not in the ballpark, bro' },
      { letter: 'l', result: 'Not in the ballpark, bro' },
      { letter: 'o', result: 'Not in the ballpark, bro' },
      { letter: 'w', result: 'Not in the ballpark, bro' },
    ];
    expect(output).toEqual(expectedOutput);
  });
});
