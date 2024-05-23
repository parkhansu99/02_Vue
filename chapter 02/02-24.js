let obj = { name: '홍길동', age: 20 };
const proxy = new Proxy(obj, {
    get: function (target, key) {
        console.log('## get ' + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다`);
        return target[key];
    },
    set: function (target, key, value) {
        console.log('## set ' + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다`);
        return (target[key] = value);
        return true;
    },
});
console.log(proxy.name);
proxy.name = '이몽룡';
proxy.age = 30;
console.log(proxy);
