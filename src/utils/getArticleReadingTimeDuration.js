const wordsPerMinute = 225;

export const getArticleReadingTimeDuration = text => {
  return Math.ceil(wordCounter(text) / wordsPerMinute);
};

const wordCounter = input => {
  const text = input.split(/\s+/);
  return text.reduce((wordCount, word) => {
    if (word !== "" && isWord(word)) {
      return wordCount + 1;
    }
    return wordCount;
  }, 0);
};

const isWord = str => {
  return [...str].some(char => {
    const code = char.charCodeAt(0);
    return (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123)
    ); // lower alpha (a-z)
  });
};
