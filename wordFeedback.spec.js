import { describe, expect, it } from '@jest/globals';

import wordFeedback from './wordFeedback.js';

describe('wordFeedback()', () => {
  // testar att en tom sträng ger en tom array
  it('Returns an empty array if input is an empty string', () => {
    const output = wordFeedback('');
    expect(output).toEqual([]);
  });
  // Testar att korrekt feedback ges om inga bokstäver stämmer överens med rätt ord
  it('If no letters matches the correct word, all letters give incorrect', () => {
    const output = wordFeedback('glows', 'handy');
    const expectedOutput = [
      { letter: 'g', result: 'Not in the ballpark, bro' },
      { letter: 'l', result: 'Not in the ballpark, bro' },
      { letter: 'o', result: 'Not in the ballpark, bro' },
      { letter: 'w', result: 'Not in the ballpark, bro' },
      { letter: 's', result: 'Not in the ballpark, bro' },
    ];
    expect(output).toEqual(expectedOutput);
  });
  // Testar att korrekt feedback ges om alla bokstäver stämmer överens med rätt ord
  it('If all letters matches the correct word, all letters give correct', () => {
    const output = wordFeedback('hands', 'hands');
    const expectedOutput = [
      { letter: 'h', result: 'You got it 100% right!' },
      { letter: 'a', result: 'You got it 100% right!' },
      { letter: 'n', result: 'You got it 100% right!' },
      { letter: 'd', result: 'You got it 100% right!' },
      { letter: 's', result: 'You got it 100% right!' },
    ];
    expect(output).toEqual(expectedOutput);
  });
  // Om en bokstav förekommer två gånger i gissning och svar ska rätt feedback ges för båda
  it('if one letter is used more than once in both guess and answer, it housld return the right feedback for both', () => {
    const output = wordFeedback('hallå', 'cykla');
    const expectedOutput = [
      { letter: 'h', result: 'Not in the ballpark, bro' },
      { letter: 'a', result: 'Right letter, wrong place!' },
      { letter: 'l', result: 'Not in the ballpark, bro' },
      { letter: 'l', result: 'You got it 100% right!' },
      { letter: 'å', result: 'Not in the ballpark, bro' },
    ];
    expect(output).toEqual(expectedOutput);
  });
});
