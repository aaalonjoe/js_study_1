
// ============== 함수, 전역변수 정의부 =============== //
// 할 일 목록 데이터
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];

// 새 할일의 아이디값을 생성하는 함수
function makeNewId() {
    if (todos.length >= 1) {
        // 기존의 맨 마지막데이터 할일의 id값 +1
        const newId = todos[todos.length - 1].id + 1;
        return newId;
    } else {                // 리스트가 1개도 없을때
        return 1;
    }
}

// 새로운 할 일을 화면에 렌더링 하는 함수
function renderNewTodo(newTodo) {
    
    const $newLi = document.createElement('li');
    $newLi.classList.add('todo-list-item');
    $newLi.dataset.id = newTodo.id;

    $newLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${newTodo.text}</span>
        </label>
        <div class="modify"><span class="lnr lnr-undo"></span></div>
        <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
    `;
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.appendChild($newLi);
}

// 할 일 추가 기능 처리
function insertTodoData() {

    // 1. 데이터 처리
    const $todoText = document.getElementById('todo-text');
    const newTodo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    }
    
    todos.push(newTodo);        // 배열의 끝에 추가

    // 2. 화면에 데이터 렌더링
    renderNewTodo(newTodo);

    // 3. 입력창 비우기
    $todoText.value = '';
}

// data-id를 통해 해당 아이디를 가진 객체의 인덱스번호 찾기
function findIndexById(dataId) {

    for (let i = 0; i < todos.length; i++) {
        if (dataId === todos[i].id) {
            return i;
        }
    }
    return null; // 못찾았다~
}

// 할 일 완료 변화 처리
function changeCheckState($label) {

    /*
        # CSS 렌더링 처리
        1. 지금 내가 체크한 체크박스를 포함하고 있는 label태그를 찾아서
           클래스 checked를 부여해야합니다.
        2. 그러면 이 함수는 지금 클릭한 체크박스가 누구인지 알아야 합니다.
           그러면 label을 찾아낼 수 있습니다.
        3. 그런데 이 함수는 어디가 클릭되었는지 모릅니다. ?? 그럼 누가 알까요??
    */
    $label.classList.toggle('checked');   // 화면에만 표시, 데이터는 안바뀜

    /*
        # 데이터 변동처리
        1. 지금 css만 변했지 실제 데이터는 변하지 않았음.
        2. todos배열에 있는 변동된 객체를 찾아서 done프로퍼티의 값을 
           반대로 바꿔주는 처리가 필요함  false <-> true
        3. 지금 체크한 태그의 정보를 확인해서 실제 배열에서 해당 객체를
           찾아낸 후 done을 수정해야함
        4. 그러면 어떻게 지금 클릭한 체크박스 정보를 가진 객체를 탐색할까?
        5. id정보를 알면 가능하다.
    */

    // 클릭한 체크박스의 data-id 값 확보
    const dataId = +$label.parentElement.dataset.id;

    const idx = findIndexById(dataId);
    todos[idx].done = !todos[idx].done;
    
}

// 삭제 처리 
function removeTodoData(target) {
    
    // 삭제 렌더링 처리
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.removeChild(target.parentElement);
}

// ================ 메인 실행부 ==================== //

(function() {

    // 할일 추가 이벤트
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault();
        
        insertTodoData();
    });

    // 할일 완료 이벤트 (체크)
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.addEventListener('change', e => {          // change는 input의 속성이 바뀔때
        
        changeCheckState(e.target.parentElement); 
    });

    // 할 일 삭제버튼 클릭 이벤트
    $toDoList.addEventListener('click', e => {
        
        if (!e.target.matches('div.remove span.lnr-cross-circle')) return;

        removeTodoData(e.target);  // 삭제처리


    });
})();