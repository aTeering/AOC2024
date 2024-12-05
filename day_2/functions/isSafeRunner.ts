import { isSafe } from "./isSave";

export function isSafeRunner(numbers: number[][]): number {
  let safeCount = 0;

  numbers.forEach((arr) => {
    if (isSafe(arr)) {
      safeCount++;
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (isSafe(arr.slice(0, i).concat(arr.slice(i + 1)))) {
        safeCount++;
        return;
      }
    }
  });

  return safeCount;
}
