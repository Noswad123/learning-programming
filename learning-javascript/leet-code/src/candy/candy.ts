export function candy(ratings: number[]): number {
  const length = ratings.length;
  const ans = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      ans[i] = ans[i - 1] + 1;
    }
  }
  for (let i = length-2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      ans[i] = Math.max(ans[i], ans[i + 1] + 1);
    }
  }
  return ans.reduce((prev: number, curr: number) => prev + curr);
}
