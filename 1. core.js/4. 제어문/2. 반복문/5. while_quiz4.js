

// 양의 정수를 입력해주세요: 25  ( 1234567890123456789012345)

var num = +prompt('양의 정수를 입력해주세요.');

var i = 1;
var result = '';

while (i <= num) {
    result += (i % 10);
    i++;
}
alert(result);