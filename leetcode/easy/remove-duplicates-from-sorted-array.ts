function removeDuplicates(numbers: number[]): number {
  let cursor = null;

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (cursor === numbers[i]) numbers.splice(i, 1);
    else cursor = numbers[i];
  }

  return numbers.length;
}
