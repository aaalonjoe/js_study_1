
var a = 5;
var b = '5';

//  ==, != 연산자는 암묵적으로 문자열 내부에
// 순수한 숫자가 있으면 자동으로 따옴표를 제거 후 비교합니다.
console.log(a == b);  // 값이 같음 타입이 다름 a는 숫자 5 b는 문자 5(숫자로는 53)
console.log(a === b);  // 무조건 === 이것만 쓰자.

console.log('=====================================');

// == 비교는 결과 예측이 어려우므로 사용하지 않는 걸 추천
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

// 무조건 3개 짜리를 쓰자 

console.log('=========================');

// 숫자 대소 비교
var x = 10;
console.log(x > 5);
console.log(x <= 10);

// 문자 대소 비교
console.log('=============================');

console.log('a' === 'A');
console.log('a' < 'A');   // 아스키코드 로 보면 a는 97 A는 65

console.log('ace' < 'ade');
console.log('pineapple' < 'zebra');
console.log('new york' < 'Zebra');

// 영어 소문자와 대문자를 비교하면 무조건 소문자가 크다. (아스키코드)
// 같은 형태면 사전에서 뒤에나오는 단어일수록 크다. *유니코드 표 참조