let student = {};
student.이름 = '홍길동';
student.취미 = '악기';
student.특기 = '프로그래밍';
student.장래희망 = '생명공학과';
student.toString = function () {
    for (let key in this) {
        if (key != 'toString ') {
            console.log(key + '\t' + this[key]);
        }
    }
};
delete student.취미;
student.toString();
