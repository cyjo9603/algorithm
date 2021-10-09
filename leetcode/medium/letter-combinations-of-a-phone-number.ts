function letterCombinations(digits: string): string[] {
  const digitMap: any = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  let results: string[] = [];

  for (const digit of digits) {
    results = combinations(results, digitMap[digit]);
  }

  return results;

  function combinations(arr: string[], digits: string[]) {
    const results = [];

    if (arr.length === 0) {
      return digits;
    }

    for (const key of arr) {
      for (const digit of digits) {
        results.push(`${key}${digit}`);
      }
    }

    return results;
  }
}
