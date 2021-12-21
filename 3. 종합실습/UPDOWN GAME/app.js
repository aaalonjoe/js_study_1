
//============== 함수, 전역변수 정의부 ===================//

//게임 데이터 변수 (정답, 선택한숫자, 최소값, 최대값)
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1, //실제 정답
    min: 1,
    max: 100,
    answer: null //사용자가 클릭한 아이콘 숫자
};


//숫자 아이콘 생성 함수
function makeIcons() {

    const $numbers = document.getElementById('numbers');

    for (let n = 1; n <= 100; n++) {
        const $div = document.createElement('div');
        $div.classList.add('icon');
        $div.textContent = n;
        $numbers.appendChild($div);
    }

}

const activate = e => {
    if (e.target.textContent > secret) {
        
    }
}


//============== 메인 실행부 ===========================//
(function() {

    makeIcons();

    //아이콘 클릭 이벤트 부여
})();
