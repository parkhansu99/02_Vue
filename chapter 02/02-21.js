const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        if (num >= 0.8) {
            reject('생성된 숫자가 0.8이상임 - ' + num);
        }
        resolve(num);
    }, 2000);
});

p.then((result) => {
    console.log('처리 결과 :', result);
});
p.catch((error) => {
    console.log('오류 : ', error);
});
console.log('## Promise 객체 생성!');
