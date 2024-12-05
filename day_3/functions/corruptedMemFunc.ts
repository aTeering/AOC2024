export function corruptedMemFunc(rows: string[]) {
  const REGEX = /mul\((\d+),(\d+)\)/g;
  let sum = 0;
  rows.forEach((line) => {
    let match: RegExpExecArray | null;

    while ((match = REGEX.exec(line)) !== null) {
      const a = match[1];
      const b = match[2];
      sum += parseInt(a) * parseInt(b);
    }
  });
  return sum;
}
