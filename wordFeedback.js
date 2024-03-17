export default function wordFeedback(guessWord, correctWord) {
  if (!guessWord || !correctWord) {
    return [];
  }

  const guessArray = guessWord.split('');
  const correctArray = correctWord.split('');
  const feedback = [];

  for (let i = 0; i < guessArray.length; i++) {
    const guessedLetter = guessArray[i];
    const correctLetter = correctArray[i];
    console.log('guessedLetter:', guessedLetter);
    console.log('correctLetter:', correctLetter);
    if (guessedLetter === correctLetter) {
      feedback.push({
        letter: guessedLetter,
        result: 'You got it 100% right!',
      });
    } else if (
      correctArray.includes(guessedLetter) &&
      correctArray.indexOf(guessedLetter) !== i
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
    console.log('correctarray:', correctArray);
    console.log('guessArray:', guessArray);
  }

  return feedback;
}

console.log(wordFeedback('hallå', 'cykla'));
