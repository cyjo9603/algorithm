function removeElement(numbers: number[], val: number): number {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (val === numbers[i]) numbers.splice(i, 1);
  }

  return numbers.length;
}
