export function wordSearch(letters: string[][], word: string): number {
  let count = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      for (let k = 0; k < directions.length; k++) {
        let found = true;
        for (let l = 0; l < word.length; l++) {
          const nextI = i + l * directions[k][0];
          const nextJ = j + l * directions[k][1];
          if (
            nextI < 0 ||
            nextI >= letters.length ||
            nextJ < 0 ||
            nextJ >= letters[i].length ||
            letters[nextI][nextJ] !== word[l]
          ) {
            found = false;
            break;
          }
        }
        if (found) {
          count++;
        }
      }
    }
  }

  return count;
}
