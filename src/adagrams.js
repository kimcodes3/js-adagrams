const letterScore = {
  'A': 1, 
  'B': 3,
  'C': 3, 
  'D': 2, 
  'E': 1, 
  'F': 4, 
  'G': 2, 
  'H': 4, 
  'I': 1, 
  'J': 8, 
  'K': 5, 
  'L': 1, 
  'M': 3, 
  'N': 1, 
  'O': 1, 
  'P': 3, 
  'Q': 10, 
  'R': 1, 
  'S': 1, 
  'T': 1, 
  'U': 1, 
  'V': 4, 
  'W': 4, 
  'X': 8, 
  'Y': 4, 
  'Z': 10
};

const lengthOfHand = 10; 

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterPool = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
  };
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let hand = []; 

  while (hand.length < lengthOfHand) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (letterPool[randomLetter] > 0) {
      letterPool[randomLetter] -= 1;
      hand.push(randomLetter);
    }
  } return hand; 

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const word = input.toUpperCase();  
  let stringHand = lettersInHand.join(''); 
  if (input.length > lettersInHand.length) {
    return false;
  }

  for (const letter of word) {
    if (stringHand.includes(letter)) {
      stringHand = stringHand.replace(letter, ''); 
    } else {
      return false; 
    }
  }
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  word = word.toUpperCase();
  let score = 0;

  for (const letter of word) {
    score = score + letterScore[letter]; 
  }

  if (word.length >= 7 && word.length <= lengthOfHand) {
    score = score + 8
  }
  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestScore = 0; 
  let winner = ''; 

  for (const word of words) {
    const score = scoreWord(word)
    if (score > highestScore) {
      highestScore = score
      winner = word
    }
    else if (score === highestScore) {
      if (word.length === lengthOfHand && winner.length != lengthOfHand) {
        winner = word;
      } 
      else if (word.length < winner.length && winner.length < lengthOfHand) {
        winner = word;
      }
    }
  }
  const correct = {
    word: winner,
    score: highestScore
  }; 
  return correct;
};
