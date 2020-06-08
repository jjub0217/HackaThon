let todos = [

];


const $ul = document.querySelector('.todo_list');
const $completedAllToggle = document.querySelector('.completed-all');
const $clearCompleted = document.querySelector('.clear-completed-btn');
const $activeTodos = document.querySelector('.active-todos');
const $input = document.querySelector('.input');
const $completedTodos = document.querySelector('.completed-todos');


function render() {
    let html = '';
    todos.forEach(todo => {
        html += `
        <li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" type="checkbox" class="checked"  ${todo.completed ? 'checked' : ''}><label for="ck-${todo.id}">${todo.content}</label>
        <button class="delete">삭제</button>
        </li>`
    })
    $ul.innerHTML = html;


    $activeTodos.textContent = todos.length;
    // $completedTodos.textContent = todos.filter(todo => todo.completed).length;


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

$input.onkeyup = (e) => {   // input창에 엔터키를 누르는 이벤트 등록하기

    if (e.keyCode !== 13 || e.target.value === '') return;
    addTodo(e.target.value);
    render();
}


$ul.onclick = (e) => {

    if (!e.target.matches('li > button')) return;
    todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
    render();
}


$ul.onchange = (e) => {

    todos = todos.map(todo => (+e.target.parentNode.id === todo.id ? {
        ...todo,
        completed: !todo.completed
    } : todo));

};


$completedAllToggle.addEventListener('change', function (event) {

    todos = todos.map(todo => todo.completed === false ? {
        ...todo,
        completed: 'true'
    } : todo);
    render();

});


$completedAllToggle.addEventListener('change', function (event) {

    todos = todos.map(todo => todo.completed ? {
        ...todo,
        completed: ''
    } : todo);
});


$clearCompleted.onclick = (e) => {

    todos = todos.filter(todo => !todo.completed);
    render();
}