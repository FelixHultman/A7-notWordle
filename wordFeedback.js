export default function wordFeedback(guessWord, correctWord) {
  if (!guessWord || !correctWord) {
    return [];
  }

  const guessArray = guessWord.split('');
  const correctArray = correctWord.split('');
  const feedback = [];
  const correctlyGuessed = new Set();

  for (let i = 0; i < correctArray.length; i++) {
    const correctLetter = correctArray[i];
    if (guessArray[i] === correctLetter) {
      correctlyGuessed.add(correctLetter);
    }
  }

  for (let i = 0; i < correctArray.length; i++) {
    const guessedLetter = guessArray[i];
    const correctLetter = correctArray[i];

    if (guessedLetter === correctLetter) {
      feedback.push({
        letter: guessedLetter,
        result: 'You got it 100% right!',
      });
    } else if (
      correctArray.includes(guessedLetter) &&
      !correctlyGuessed.has(guessedLetter)
    ) {
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

console.log(wordFeedback('hallå', 'cykla'));
