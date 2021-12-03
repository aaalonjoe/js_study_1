
var scores = [83, 99, 100, 57, 84, 92, 66, 100, 88, 92, 94];


// 총점
var total = 0;

for (var s of scores) {
    total += s;
}

/*
for (var i = 0; i < scores.length; i++) {
    total += scores[i];
}
console.log(total);
*/

// 평균
var avg = total / scores.length;
console.log(`총점 : ${total}, 평균 : ${avg}`);