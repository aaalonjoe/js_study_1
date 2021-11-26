

var x = +prompt('양의 정수를 입력하세요!');
var n = 1;
var plus = '';

while (n <= x) {
    if (n % 2 === 1) {
        plus += '+';
    } else {
        plus += '-';
    }     
    n++;
}
alert(plus);