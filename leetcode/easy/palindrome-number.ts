function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const stringX = String(x);
  const [left, right] = getHalf(stringX);

  return left === [...right].reverse().join("");

  function getHalf(str: string) {
    const center = Math.floor(str.length / 2);

    if (str.length % 2) {
      return [str.slice(0, center), str.slice(center + 1)];
    }
    return [str.slice(0, center), str.slice(center)];
  }
}

console.log(isPalindrome(1001));
