
// 상수: 불변의 고정값  let은 변수(변하는값)
// 관례적으로 대문자를 씀. 알아보기 위해서!
const SALE_RATE = 0.2; // 할인율 20% 고정했음 좋겠다

const PI = 3.14159265; // 원주율

// sale_rate = 0.3;

console.log(`sale_rate: ${SALE_RATE}`);


// const와 객체 (배열, 객체, 함수)
const person = {
    name: '김철수',
    age: 30
};

person = {                  // 아예 전체 다 바꾸는게 안됨.
    name: '박영희',         //  프로퍼티의 값은 바꿀 수 있음.
    age: 30
};

person.name = '고길동';
console.log(person);


/*
    습관적으로 const를 사용하자!!!!
    바꿀 게 있으면 그 때 let 사용!!

    for (let i = 0; i < 5; i++) {             // 이런애들은 i가 바뀌어야 하니까 let 사용~~~

    }
*/