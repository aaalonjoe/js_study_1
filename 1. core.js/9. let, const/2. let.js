

// 1. 중복 선언을 허용하지 않음
let x = 3;
// let x = 30;    왜 또 만들어?
x = 30;         // 아~ 변경하려고?
console.log(x);



// 2. 블록레벨 스코프 지원
let y = '메롱';  // 전역스코프
if (true) {
    let y = 20; // 블록 스코프
    console.log(`if-y : ${y}`);
}
console.log(`global-y : ${y}`);



// 3. 변수 호이스팅을 일으키지 않음
z = 100;
console.log(z);

let z;   // 뭐해? 값을 선언해야지 ㅡㅡ