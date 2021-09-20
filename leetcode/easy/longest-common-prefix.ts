function longestCommonPrefix(words: string[]): string {
  const [prefix = "", ...restedWords] = words;

  return restedWords.reduce((_prefix, word) => {
    const prefixCalcIndex = [..._prefix].findIndex((s, i) => s !== word[i]);
    return prefixCalcIndex !== -1 ? _prefix.slice(0, prefixCalcIndex) : _prefix;
  }, prefix);
}
