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