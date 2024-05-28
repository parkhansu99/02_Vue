ar = [0, 1, 2, 3, 4, 5, 6, 7];
ar.splice(2, 0, 10, 11, 12);
console.log('ar = ' + ar);

ar = [0, 1, 2, 3, 4, 5, 6, 7];
ar.splice(2, 3);
console.log('ar = ' + ar);

ar = [0, 1, 2, 3, 4, 5, 6, 7];
ar.splice(2, 3, 10, 11);
console.log('ar = ' + ar);

ar = [0, 1, 2, 3, 4, 5, 6, 7];
const subar = ar.slice(2, 5);
console.log('ar = ' + ar);
console.log('subar = ' + subar);
