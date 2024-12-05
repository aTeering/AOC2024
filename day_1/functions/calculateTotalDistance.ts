function calculateTotalDistance(
  leftList: number[],
  rightList: number[]
): number {
  const sortedLeft = [...leftList].sort((a, b) => a - b);
  const sortedRight = [...rightList].sort((a, b) => a - b);

  if (sortedLeft.length !== sortedRight.length) {
    throw new Error("Shit's fckd");
  }

  let totalDistance = 0;

  for (let i = 0; i < sortedLeft.length; i++) {
    totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
  }

  return totalDistance;
}

export default calculateTotalDistance;
