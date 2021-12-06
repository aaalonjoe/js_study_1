
// 객체 생성
var dog = {
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    injection: true,
    favorite: ['산책', '간식']
};

var cat = {
    name: '콩순이',
    kind: '블랙러시안',
    injection: true,            // 객체는 순서가 바뀌어도 상관없음
    age: 2,
    favorite: ['낮잠', '캣타워']
};

console.log(typeof cat);

// 객체에 저장된 데이터 참조
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);
console.log(dog.favorite[1]);

// 프로퍼티 참조 2
console.log('========================');
console.log(dog.injection);
console.log(dog['injection']);
console.log(cat['age']);

// 프로퍼티 값 수정
dog.age = 4;

cat.favorite[1] = '실뭉치';
console.log(cat);

// 프로퍼티 동적 추가 (존재하지 않는 key로 새로운 값 할당)
cat.owner = '김철수';
console.log(cat);

// 프로퍼티 삭제
delete cat.owner;
console.log(cat);