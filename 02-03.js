const p1 = { name: 'John', age: 20 };
p1.age = 22;
console.log(p1);
//위는 실행되고, 아래는 에러 뜸//
p1 = { name: 'lee', age: 25 };
console.log(p1);
