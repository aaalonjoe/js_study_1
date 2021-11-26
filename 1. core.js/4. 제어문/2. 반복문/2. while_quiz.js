

var first = +prompt('첫번째 숫자를 입력!');
var second = +prompt('두번째 숫자를 입력!');
var total = 0;
var num = first;

while (num <= second) {
    total += num;
    num++;
}

alert(`${first} ~ ${second}까지의 총합 : ${total}`);