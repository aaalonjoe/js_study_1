

// 몇 개의 *을 출력할까요? 12 (***** 다음줄 ***** 다음줄 **)

var n = +prompt('몇 개의 *을 출력할까요?');

var i = 1;
var result = '';
while (i <= n) {
    result += '*';
    if (i % 5 === 0) {
        result += '\n';
    }
    i++;
}
alert(result);