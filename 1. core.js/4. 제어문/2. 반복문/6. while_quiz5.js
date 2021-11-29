

// n의 값은? 3     (1의 제곱?, 2의 제곱?, 3의 제곱?)

var n = +prompt('n의 값: ');

var i = 1;
var result = '';
while (i <= n) {
    result += `${i}의 제곱은 ${i ** 2}입니다.\n`;
    i++;
}
alert(result);