function isSubsequence(s: string, t: string): boolean {
  if (s === t) {
    return true;
  }

  return recurse(s, t);
}

function recurse(remainingSubsequence: string, remainingString: string) {
  if (remainingSubsequence.length > remainingString.length) {
    return false;
  }
  if (remainingSubsequence.length === 0) {
    return true;
  }

  for (let i = 0; i < remainingString.length; i++) {
    if (remainingSubsequence[0] === remainingString[i]) {
      return recurse(remainingSubsequence.slice(1), remainingString.slice(i + 1));
    }
  }
  return false;
}
