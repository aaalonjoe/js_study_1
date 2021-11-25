

var wholeNumber = +prompt('정수를 입력해주세요.');

if (wholeNumber === 0) {
    alert(`이 수는 ${wholeNumber}입니다.`);
} else if (wholeNumber > 0) {
    alert('이 수는 양수입니다.');
} else if (wholeNumber < 0) {
    alert('이 수는 음수입니다.');
}