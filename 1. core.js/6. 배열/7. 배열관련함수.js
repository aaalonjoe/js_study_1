
var foods = ['김말이', '닭꼬치', '어묵', '볶음밥', '짜장면', '짬뽕'];

// indexOf() : 배열 데이터의 인덱스번호를 알려줌
var index = foods.indexOf('떡볶이'); // 탐색실패시 -1 반환

console.log(`찾은 인덱스 : ${index}번`);

// slice() : 배열을 일정 부분 잘라내어 새로운 사본 배열 반환
console.log('=============================');

var sliced = foods.slice(2, 5);  // 인덱스 2번이상 5번 미만 -> 2,3,4 

console.log(sliced);    // 잘라내어도 원본은 바뀌지 않음
console.log(foods);

// 3번 인덱스부터 끝까지 추출
var sliced2 = foods.slice(3);
console.log(sliced2);

console.log('=============================');


var nums = [10, 20, 30, 40, 50, 60, 70, 80];

// for (var i = 0; i < Math.floor(nums.length) / 2; i++) {

//     var temp;
//     temp = nums[i];
//     nums[i] = nums[7-i];
//     nums[7-i] = temp;

// }

// 배열을 역순으로 재배치, 원본이 변화함
var copyNums = nums.slice(0); // 저장을 해야함
copyNums.reverse();

console.log(nums);
console.log(copyNums);

console.log('============================');
// concat() : 배열 2개를 결합

console.log('========================');

var arr1 = [10, 20, 30];
var arr2 = [100, 80, 60, 40];

//사본
var concated = arr1.concat(arr2);
console.log(concated);

// includes() : 배열에 특정 요소가 저장되어있는지 여부 확인
console.log('==============================');

var result = foods.includes('닭꼬치');
console.log(result);