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
console.log();



const foObj = {
    prev:  ( data.q.prev / data.fsg.prev ).toFixed(2),
    report: ( data.q.report / data.fsg.report ).toFixed(2),
}

const feObj = {
    prev: ( data.fsg.prev / data.q.prev ).toFixed(2),
    report: ( data.fsg.report / data.q.report ).toFixed(2)
}

const vObj = {
    prev: ( data.fsg.prev / data.ch.prev ).toFixed(2),
    report: ( data.fsg.report / data.ch.report ).toFixed(2)
}

console.log('Задание 4:');
console.log(`Фо'пред = ${foObj.prev}\nФо'отч = ${foObj.report}`);
console.log(`Фе'пред = ${feObj.prev}\nФе'отч = ${feObj.report}`);
console.log(`V'пред = ${vObj.prev}\nV'отч = ${vObj.report}`);
console.log();

// task5
const ko = {
    prev: (data.d.prev / data.fob.prev).toFixed(2),
    report: (data.d.report / data.fob.report).toFixed(2)
}

// В зависимости от задания нужно изменить t
const t = 360
const kdl = {
    prev: (t / ko.prev).toFixed(2),
    report: (t / ko.report).toFixed(2) 
}

console.log('Задание 5:');
console.log(`Ко'пред = ${ko.prev}\nКо'отч = ${ko.report}`);
console.log(`Кдл'пред = ${kdl.prev} дней\nКдл'отч = ${kdl.report} дней`);
console.log();

