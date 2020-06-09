let todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Javascript', completed: false }
];


const $ul = document.querySelector('.todo_list');
const $completedAllToggle = document.querySelector('.completed-all');
const $clearCompleted = document.querySelector('.clear-completed-btn');
const $activeTodos = document.querySelector('.active-todos');
const $input = document.querySelector('.input');
const $completedTodos = document.querySelector('.completed-todos');


function render() {   // 배열 새로 그리는 함수 
    let html = '';   // html 이라는 변수에 문자열 할당.
    todos.forEach(todo => { // todos를 forEach 로 todos의 length 만큼 순회돌면서 html을 생성 시키자.
        html +=  // html 이라는 문자열에 forEach 돌아서 생성한 html을 할당시키자.
       `<li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" type="checkbox" class="checked"  ${todo.completed ? 'checked' : ''}><label for="ck-${todo.id}">${todo.content}</label>
        <button class="delete">삭제</button>
        </li>`
    })
    $ul.innerHTML = html;   // 생성된 html을 할당 시킨 html 을 innerHTML 을 써서 $ul에 집어넣자.
    $input.value = ''; // input창에 문자 입력후 엔터치면 초기화 되는 코드
    
    $completedTodos.textContent = todos.filter(todo => todo.completed ).length;
    $activeTodos.textContent = todos.filter(todo => !todo.completed ).length; 
}
render();


function maxId() {     // id 최대값 구하기 
    const Id = todos.map(todo => todo.id) // id만 맵 메소드로 추출해서
    const max = Id.reduce((acc, cur) => (acc > cur ? acc : cur), 0) + 1; // 추출한 id들로만 이루어진 새로운 배열에서 최대값을 구한 후에 +1 을 해라.
    return (max); // 위에 결과값을 반환해라
}

function addTodo(content) { // 빈 기존의 todos 배열을 채우는 함수 (매개변수에 content만 넣기.)

    todos = [{ id: maxId(), content, completed: false }, ...todos]; // 빈 기존의 todos 배열의 형태 만들기
}

function activeTodo () {
    $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
}

function completedTodos () {
    $completedTodos.textContent = todos.filter(todo => todo.completed ).length;
}

$input.onkeyup = (e) => {   // input창에 엔터키를 누르는 이벤트 등록하기

    if (e.keyCode !== 13 || e.target.value === '') return;  // 엔터키랑 빈문자열 무시하는 방어코드 만들기
    addTodo(e.target.value);   // 위에 빈 배열 채우는 함수 호출 (인수에 이벤트를 받는 input의 value값(=e.target.value)을 넣기)
    render();   //  배열 새로 그리는 함수 넣기 
}


$ul.onclick = (e) => {   // ul 의 li를 클릭하는 이벤트 등록하기 (삭제 버튼 누르면 특정 li 삭제 되기)

    if (!e.target.matches('li > button')) return;   // li 의 자식요소인 버튼과 이벤트가 발생되는 타겟이 매치안된 이외의 것들은 무시하는 방어코드 만들기
    todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);   
    //  e.target.parentNode 는 todos에 있는 객체들중에 이벤트를 받는 li 한개이다.
    // 그러므로 e.target.parentNode.id 는 이벤트를 받는 li의 id다. 
    // 그 클릭 이벤트를 받은 li의 id 와 todo 의 id가 다른것들만 남긴다.
    // console.log(todos);
    // $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
    // activeTodo();  ////////
    render();  // 배열 새로 그리는 함수 넣기
}


$ul.onchange = (e) => { // 토글 이벤트 등록하기

    todos = todos.map(todo => (+e.target.parentNode.id === todo.id ? { ...todo, completed: !todo.completed } : todo));
     // 토글 이벤트를 받는 li의 id와 todo 의 id 가 같으면 객체를 풀어헤친 todo의 completed 값 반전시키기, 안 같으면 todo  그대로 내보내기
    // console.log(todos);
    // $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
    // activeTodo();  //////
    // $completedTodos.textContent = todos.filter(todo => todo.completed ).length;
    // completedTodos(); //////
    render(); //////
};

function check (a){
    todos = todos.map(todo => ({ ...todo, completed: a }));
    console.log(todos);

}

$completedAllToggle.addEventListener('change', function (event) {  // 전체 체크 토글 이벤트 등록하기

    // todos = todos.map(todo => todo.completed ? { ...todo, completed: true} : { ...todo, completed: true}); 
    // todos 배열의 한 요소인 모든 todo의 completed 가 false이면 객체를 풀어헤친 completed 값을 true 로 하고, true 이면 그대로 내보내기 
    //    console.log($completedAllToggle.checked); //true
    //    console.log(todos.checked);
    
    // console.log(todos);   // 3개의 객체가 모두 false
    // console.log($completedAllToggle.checked); // 
    check($completedAllToggle.checked);
    // console.dir(event);
    // console.log($ul.children[0]);
    // completedTodos();  //////

    

    // console.log(todos.checked);
    

    //  todos = todos.map(todo => ($completedAllToggle.checked ? todo === 'checked' : todo)); 
    // activeTodo(); ///////
    render();    // 배열 새로 그리는 함수 넣기
    // $completedAllToggle.checked ? todo.completed === 'checked' : todo;
    
    // todos = todos.map( todo => $completedAllToggle.checked);
});


$completedAllToggle.addEventListener('change', function (event) {   // 전체 체크 해제 토글 이벤트 등록하기
    console.log(todos);  // 3개의 객체가 모두 true
    console.log($completedAllToggle.checked); // true
    check($completedAllToggle.checked);
// // todos = todos.map(todo => todo.completed); 
// // console.log(todos); // [true true true]
// completedTodos(); /////
// activeTodo(); ///////
render(); 
 
//     // todos = todos.map(todo => todo.completed ? { ...todo, completed: !todo.completed } : todo); 
//     // todos 배열의 한 요소인 모든 todo 의 completed가 true 이면 객체를 풀어헤친 completed 값을 빈문자열(false)로 하고, false 이면 그대로 내보내기

// console.log(todos);   // 3개의 객체가 모두 false
// todos = todos.map(todo => ($completedAllToggle.checked ? todo : {...todo, completed: !todo.completed})); 
// console.log(todos);

});


$clearCompleted.onclick = (e) => {  // completed 값이 true인(체크된) 모든 li 삭제되는 클릭 이벤트 등록하기 ()

    todos = todos.filter(todo => !todo.completed);  // todos 배열의 한 요소인 todo의 completed가 false 인것만 담기(false 인것만 살리기)  
    render(); // 배열 새로 그리는 함수 넣기
}


