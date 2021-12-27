
//=========== 함수 선언부 ===========//


// 플러스버튼 클릭 이벤트(친구정보 추가)
function addList() {
    const $newLi = document.createElement('li');
    $newLi.classList.add('clearfix');
    const $name = document.querySelector('.name input');
    const $phoneNumber = document.querySelector('.phone-number input');

    const text = `${$name.value} ${$phoneNumber.value}`;
    
    if ($name.value.trim() === '' || $phoneNumber.value.trim() === '') {
        $name.placeholder = '필수 입력사항입니다!';
        $phoneNumber.placeholder = '필수 입력사항입니다!';
    } else {
        $newLi.innerHTML = `
            <div class="list-info">
                <span class="text">${text}</span>
            </div>
            <div class="mod">
                <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
                <div class="modify"><span class="lnr lnr-undo"></span></div>
            </div>
        `;
        const $ul = document.querySelector('.list');
        $ul.appendChild($newLi);
        // input창 초기화
        $name.value = '';
        $name.placeholder = '이름을 입력하세요.';
        $phoneNumber.value = '';
        $phoneNumber.placeholder = '전화번호를 입력하세요(-포함)';
    }
}

function enterModifyMode() {
    // 아이콘 교체
    const $checkMark = document.querySelector('.lnr-undo');
    $checkMark.classList.replace('lnr-undo', 'lnr-checkmark-circle');
    const $text = document.querySelector('.text');
    // input창 띄우기
    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.setAttribute('value', $text.textContent);
    console.log($modInput);

    const $listInfo = document.querySelector('.list-info');    
    $listInfo.replaceChild($modInput, $text);

}

// 삭제 이벤트
function deleteInfo() {
    console.log('삭제[클릭!');
    
}

//============= 함수 호출부 ============//
(function () {
    
    // 플러스버튼 클릭 이벤트
    const $add = document.getElementById('add');
    $add.addEventListener('click', e => {
        addList();
    });

    // 수정 이벤트
    const $Modify = document.querySelector('.list');
    $Modify.addEventListener('click', e => {
        if (e.target.matches('.lnr-undo')) {
            enterModifyMode();
        } else if (e.target.matches('.lnr-cross-circle')) {
            deleteInfo();
        }
    });
    

})();