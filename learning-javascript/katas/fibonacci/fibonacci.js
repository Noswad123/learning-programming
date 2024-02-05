let prev1 = 1;
let prev2 = 1;
let sequence = Array();
function fibonacci() {
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      sequence.push(prev1 + prev2);
      prev2 = sequence[i];
      console.log(sequence[i]);
    } else {
      sequence.push(prev1 + prev2);
      prev1 = sequence[i];
      console.log(sequence[i]);
    }
  }
  sequence.unshift(1);
}

fibonacci();
console.log(sequence);
