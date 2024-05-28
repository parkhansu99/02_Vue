let ar = [0, 1];
ar.length = 5;
for (let i = 0; i < ar.length; i++) {
  console.log('ar[' + i + ']=' + ar[i]);
}
console.log('--------------');
ar = [0, 1, 2, 3, 4, 5, 6, 7];
ar.length = 3;
for (let i = 0; i < ar.length; i++) {
  console.log('ar[' + i + ']=' + ar[i]);
}
console.log('--------------');
ar = [0, 1, 2, 3, , , 6];
for (let i = 0; i < ar.length; i++) {
  console.log('ar[' + i + ']=' + ar[i]);
}
