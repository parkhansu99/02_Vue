const ar = [0, 1, 2, 3];
console.log('ar = ' + ar);

ar.unshift(100, 200);
console.log('ar = ' + ar);
// unshift는 배열의 맨 앞에 추가

ar.shift();
console.log('ar = ' + ar);
// shift는 맨 앞의 값을 제거

ar.push(100, 200);
console.log('ar = ' + ar);
// push는 배열의 맨 뒤에 추가

ar.pop();
console.log('ar = ' + ar);
// pop는 맨 뒤의 값을 제거
