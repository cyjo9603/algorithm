function myAtoi(s: string): number {
  const regexp = /^(\s+)?[-+]?\d+/;
  const [parse] = regexp.exec(s) || [];

  if (!parse) {
    return 0;
  }

  const number = convertIntegerRange(+parse);
  return number;
}

function convertIntegerRange(number: number) {
  if (number < -(2 ** 31)) {
    return -(2 ** 31);
  }

  if (number > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }

  return number;
}
