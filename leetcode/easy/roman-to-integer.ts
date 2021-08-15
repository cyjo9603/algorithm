interface Roman {
  symbol: string;
  value: number;
}

const romans: Roman[] = [
  { symbol: 'I', value: 1 },
  { symbol: 'V', value: 5 },
  { symbol: 'X', value: 10 },
  { symbol: 'L', value: 50 },
  { symbol: 'C', value: 100 },
  { symbol: 'D', value: 500 },
  { symbol: 'M', value: 1000 },
];

function romanToInt(s: string): number {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const currentRoman = romans.find(({ symbol }) => symbol === s[i]) || { symbol: '', value: 0 };

    if (i < s.length - 1) {
      const nextRoman = romans.find(({ symbol }) => symbol === s[i + 1]) || { symbol: '', value: 0 };

      if (currentRoman.value < nextRoman.value) {
        sum += nextRoman.value - currentRoman.value;
        i++;
        continue;
      }
    }
    sum += currentRoman.value;
  }
  return sum;
}
