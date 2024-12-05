function splitNumbersIntoTwoLists(input: string): [number[], number[]] {
  const numbers = input.split(/\s+/).map(Number);

  const list1: number[] = [];
  const list2: number[] = [];

  numbers.forEach((num, index) => {
    if (index % 2 === 0) {
      list1.push(num);
    } else {
      list2.push(num);
    }
  });

  return [list1, list2];
}
export default splitNumbersIntoTwoLists;
