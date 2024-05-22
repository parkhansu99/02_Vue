function makeStudent(name, korean, math, english, science) {
    let student = {
        이름: name,
        국어: korean,
        수학: math,
        영어: english,
        과학: science,

        getSum: function () {
            return this.국어 + this.수학 + this.영어 + this.과학;
        },
        getAverage: function () {
            return this.getSum() / 4;
        },
        toString: function () {
            return this.이름 + '\t' + this.getSum() + '\t' + this.getAverage();
        },
    };
    return student;
}
let students = [];
students.push(makeStudent('윤인성', 90, 83, 76, 89));
students.push(makeStudent('박찬호', 90, 83, 76, 89));
students.push(makeStudent('류현진', 90, 83, 76, 89));
students.push(makeStudent('이세돌', 90, 83, 76, 89));
students.push(makeStudent('김세진', 90, 83, 76, 89));
students.push(makeStudent('이하나', 90, 83, 76, 89));
let output = ' 이름\t총점\t평균\n';
for (let i in students) {
    output += students[i].toString() + '\n';
}
console.log(output);
