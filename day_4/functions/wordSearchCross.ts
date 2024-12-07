export function wordSearchCross(
  letters: string[][],
  word: string,
  centerLetter: string
): number {
  const wordReversed = word.split("").reverse().join("");
  const wordSet = new Set([word, wordReversed]);
  let count = 0;

  for (let r = 0; r < letters.length; r++) {
    for (let c = 0; c < letters[r].length; c++) {
      if (letters[r][c] === centerLetter) {
        const diagonals = [
          [letters[r - 1]?.[c - 1], letters[r + 1]?.[c + 1]],
          [letters[r - 1]?.[c + 1], letters[r + 1]?.[c - 1]],
        ];

        if (
          diagonals.every(
            ([first, second]) =>
              first && second && wordSet.has(first + centerLetter + second)
          )
        ) {
          count++;
        }
      }
    }
  }

  return count;
}
