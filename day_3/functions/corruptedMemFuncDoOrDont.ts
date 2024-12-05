export function corruptedMemFuncDoOrDont(rows: string[]) {
  const REGEX = /(?:mul\((\d+),(\d+)\)|do\(()\)|don't\(()\))/g;

  let sum = 0;
  let skip = false;

  rows.forEach((line) => {
    let match: RegExpExecArray | null;

    while ((match = REGEX.exec(line)) !== null) {
      const func = match[0];

      if (func === "do()") {
        skip = false;
        continue;
      }

      if (func === "don't()") {
        skip = true;
        continue;
      }

      if (!skip) {
        const a = parseInt(match[1]);
        const b = parseInt(match[2]);
        sum += a * b;
      }
    }
  });

  return sum;
}
