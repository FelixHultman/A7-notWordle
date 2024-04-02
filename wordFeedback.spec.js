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
      { letter: 'g', result: 'Incorrect' },
      { letter: 'l', result: 'Incorrect' },
      { letter: 'o', result: 'Incorrect' },
      { letter: 'w', result: 'Incorrect' },
      { letter: 's', result: 'Incorrect' },
    ];
    expect(output).toEqual(expectedOutput);
  });
  // Testar att korrekt feedback ges om alla bokstäver stämmer överens med rätt ord
  it('If all letters matches the correct word, all letters give correct', () => {
    const output = wordFeedback('hands', 'hands');
    const expectedOutput = [
      { letter: 'h', result: 'Correct' },
      { letter: 'a', result: 'Correct' },
      { letter: 'n', result: 'Correct' },
      { letter: 'd', result: 'Correct' },
      { letter: 's', result: 'Correct' },
    ];
    expect(output).toEqual(expectedOutput);
  });
  // Om en bokstav förekommer två gånger i gissning och svar ska rätt feedback ges för båda
  it('if one letter is used more than once in both guess and answer, it housld return the right feedback for both', () => {
    const output = wordFeedback('hallå', 'cykla');
    const expectedOutput = [
      { letter: 'h', result: 'Incorrect' },
      { letter: 'a', result: 'Misplaced' },
      { letter: 'l', result: 'Incorrect' },
      { letter: 'l', result: 'Correct' },
      { letter: 'å', result: 'Incorrect' },
    ];
    expect(output).toEqual(expectedOutput);
  });
});
