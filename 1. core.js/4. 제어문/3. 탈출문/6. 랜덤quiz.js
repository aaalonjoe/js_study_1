

// 랜덤 구구단

var number = Math.floor(Math.random() * 8) + 2;

console.log('=======================');
console.log(`랜덤 구구단: ${number}단`);
console.log('=======================');
for (var n = 1; n <= 9; n++) {
    console.log(`${number} x ${n} = ${number * n}`);
}

