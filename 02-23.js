let obj1 = { name: '박문수', age: 29 };
let obj2 = obj1; //shallow copy (얕은 복사)
let obj3 = { ...obj1 };
let obj4 = { ...obj1, email: 'mspark@gmail.com' };

obj2.age = 19;
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj1 == obj2);
console.log(obj1 == obj3);
let arr1 = [100, 200, 300];
let arr2 = ['Hello', ...arr1, 'World']; //배열 내의 값으로 들어감
let arr3 = ['Hello', arr1, 'World']; //배열 안에 또 다른 배열로 들어감
console.log(arr1);
console.log(arr2);
console.log(arr3);
