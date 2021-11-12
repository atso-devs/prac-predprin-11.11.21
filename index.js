const data = require('./data')

function pt(q, ch) {
    return (q/ch).toFixed(2)
}

// task 1
const ptArr = {
    prev: pt(data.q.prev, data.ch.prev),
    report: pt(data.q.report, data.ch.report),
}

ptArr.i = (ptArr.report/ptArr.prev).toFixed(2)

console.log('Задание 1:');
console.log(`ПТ'пред = ${ptArr.prev}\nПТ'отч = ${ptArr.report}`);
console.log(`IПт: ${ptArr.i}`);
console.log();

// task2
const pObj = {
    prev:  (data.d.prev-data.z.prev).toFixed(2),
    report: (data.d.report-data.z.report).toFixed(2)
}
console.log('Задание 2:');
console.log(`П'пред = ${pObj.prev}\nП'отч = ${pObj.report}`);

// TODO: нужно уточнить настчет процентов
// task3
// rProcents - это то, на сколько процентов нужно умножать, 
// в задании может быть число отличное от 100
const rProcents = 100
const rObj = {
    prev:  ( (pObj.prev/data.z.prev) * rProcents/100 ).toFixed(2),
    report: ( (pObj.report/data.z.report) * rProcents/100 ).toFixed(2),
}
console.log('Задание 3:');
console.log(`R'пред = ${rObj.prev}\nR'отч = ${rObj.report}`);