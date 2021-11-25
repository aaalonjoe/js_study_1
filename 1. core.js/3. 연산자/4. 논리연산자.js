
// && : AND 연산 -> 둘다 맞아야함
var t = true, f = false;

console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

// || : OR 연산   (백스페이스 앞에 기호) -> 둘중에 하나만 맞아도됌
console.log('=====================');

console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// NOT 연산 (!) : 논리 반전
console.log('======================');

console.log(!t);  // : console.log(f);
console.log(!f);  // : console.log(t);

var money = 1000;
if (money) {
    console.log('나는 돈이 있어요~');
} else {
    console.log('나는 그지에요~~');
}

if (!money) {
    console.log('나는 그지에요~~');
}