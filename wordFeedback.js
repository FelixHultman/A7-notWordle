export default function wordFeedback(guessWord, correctWord) {
  const feedback = [];

  for (let i = 0; i < guessWord.length; i++) {
    const guessedLetter = guessWord[i];
    const correctLetter = correctWord[i];

    if (guessedLetter === correctLetter) {
      feedback.push({
        letter: guessedLetter,
        result: 'You got it 100% right!',
      });
    } else if (correctWord.includes(guessedLetter)) {
      feedback.push({
        letter: guessedLetter,
        result: 'Right letter, wrong place!',
      });
    } else {
      feedback.push({
        letter: guessedLetter,
        result: 'Not in the ballpark, bro',
      });
    }
  }
  return feedback;
}

console.log(wordFeedback('Football', 'hand'));
