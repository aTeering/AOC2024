function calculateSimilarityScore(list1: number[], list2: number[]): number {
  let similarityScore = 0;

  list1.forEach((num) => {
    const count = list2.filter((x) => x === num).length;
    similarityScore += num * count;
  });

  return similarityScore;
}
export default calculateSimilarityScore;
