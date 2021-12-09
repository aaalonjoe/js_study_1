
// 2개의 숫자를 전달받아 작은 수를 리턴
function min2(n1, n2) {
    return n1 > n2 ? n2 : n1;
}

// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
function min3(n1, n2, n3) {
    if (n1 > n2) {
        return n2 > n3 ? n3 : n2;    
    } else {
        return n1 > n3 ? n3 : n1;
    }
}

// n개의 숫자 중 최소값을 가져와야 함.
function minAll(...nums) {
    var min = nums[0];
    for (var n of nums) {
        if (min > n) {
            min = n;
        }
    }
    return min;
}

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
function isEven(num) {
    return num % 2 === 0;
}
// 화살표 함수로
var isEven = num => num % 2 === 0;

// 2개의 숫자를 전달받아 작은 수를 리턴
// var result = min2(34, 56);

// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
// var result = min3(120, 50, 99);

// n개의 숫자 중 최소값을 가져와야 함.
// var result = minAll(55, 6, 71, 94, 100, 999, 3, 56, 877);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴, 단 0은 짝수 취급
var result = isEven(24);  // 함수 이름앞에 is가 붙어있으면 논리를 따지는경우가 대부분.. 실전에서

console.log(`result: ${result}`);
// result에는 34가 리턴되어야 함.