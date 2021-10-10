function strStr(haystack: string, needle: string): number {
  if (haystack === needle || !needle) {
    return 0;
  }

  const matches = haystack.match(needle);

  return matches?.index ?? -1;
}
