let arr = [10, 20, 30];
const proxy = new Proxy(arr, {
    get: function (target, key) {
        console.log('## get ' + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다`);
        return target[key];
    },
    set: function (target, key, value) {
        console.log('## set ' + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다`);
        return (target[key] = value);
    },
});
proxy[0] = 98;
proxy[1] = 99;
proxy[2] = 100;
proxy[3] = 101;
