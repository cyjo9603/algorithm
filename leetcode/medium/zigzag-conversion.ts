function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  let cursor = 0;
  const zigzagLines: string[][] = [];

  while (cursor < s.length) {
    let zigzagLine: string[];
    const rowCount = cursor % (numRows - 1);
    if (rowCount === 0) {
      zigzagLine = [...s.slice(cursor, cursor + numRows)];
      cursor += numRows;
    } else {
      zigzagLine = getFixLengthArray(numRows);
      zigzagLine[numRows - rowCount - 1] = s[cursor];
      cursor++;
    }
    zigzagLines.push(zigzagLine);
  }

  const zigzagString: string = getZigzagString(zigzagLines);

  return zigzagString;

  function getFixLengthArray(length: number) {
    return new Array(numRows).fill(null);
  }

  function getZigzagString(_zigzagLines: string[][]) {
    return new Array(numRows).fill(undefined).reduce((_zigzagString, _, i) => {
      const lineString = _zigzagLines
        .map((line) => line[i])
        .filter((v) => v)
        .join("");

      return _zigzagString + lineString;
    }, "");
  }
}
