export function isSafe(numbers: number[]) {
  if (numbers.length <= 3)
    throw new Error("Array must have at least 4 elements");

  const isAscending = numbers.every(
    (num, i) => i === 0 || num > numbers[i - 1]
  );

  const isDescending = numbers.every(
    (num, i) => i === 0 || num < numbers[i - 1]
  );

  const maxDiffIsThree = numbers.every(
    (num, i) => i === 0 || Math.abs(num - numbers[i - 1]) <= 3
  );

  if (isAscending === isDescending) return false;
  if (!maxDiffIsThree) return false;

  return true;
}
