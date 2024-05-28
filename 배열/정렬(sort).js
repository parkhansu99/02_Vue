const score = [82, 96, 54, 76, 92, 99, 69, 88];
console.log('before = ' + score);
score.sort();
console.log('after = ' + score);

console.log('------------------');

const names = ['이길동', '홍길동', '박길동', '고길동'];
console.log('before = ' + names);
names.sort();
console.log('after = ' + names);

console.log('------------------');

const newscore = [82, 96, 54, 76, 9, 100, 69, 88];
console.log('before = ' + newscore);

newscore.sort();
console.log('after1 = ' + newscore);

// 문자열로 해석해서 sorting하기 때문에 크기 비교를 못함
function compare(left, right) {
  return left - right;
}
newscore.sort(compare);
console.log('after2 = ' + newscore);

console.log('------------------');

const country = ['korea', 'USA', 'Japan', 'China'];
console.log('before = ' + country);

country.sort((left, right) => {
  const left2 = left.toLowerCase();
  const right2 = right.toLowerCase();

  if (left2 < right2) return -1;
  if (left2 > right2) return 1;
});

console.log('after = ' + country);
