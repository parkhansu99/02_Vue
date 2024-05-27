const score = [82, 96, 54, 76, 9, 100, 69, 88];
let sum = 0;
for (let i = 0; i < score.length; i++) {
  sum += score[i];
}
console.log('sum = ' + sum);
console.log('----------------');

const scores = [82, 96, 54, 76, 9, 100, 69, 88];
let sums = 0;
scores.forEach((value) => (sums += value));
console.log('sums = ' + sum);
