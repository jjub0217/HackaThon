let todos = [{
        id: 1,
        content: 'A',
        completed: true
    },
    {
        id: 2,
        content: 'B',
        completed: false
    },
    {
        id: 3,
        content: 'C',
        completed: true
    }
]


const $ul = document.querySelector('.todo_list');
const $completedAllToggle = document.querySelector('.completed-all');
const $clearCompleted = document.querySelector('.clear-completed');

function render() {
    let html = '';
    todos.forEach(todo => {
        html += `<li id="${todo.id}"><input type="checkbox" class="complete" ${todo.completed ? 'checked' : ''}>${todo.content} <button class="delete">삭제</button></li>`
    })
    $ul.innerHTML = html;
}
render();

// $delete.forEach(function (button) {
//     button.onclick = function (){ // 그 요소에 클릭이벤트를 주려고 한다. 
//         console.log('Hello world'); // 그 이벤트는 'Hello world' 라고 찍히는 이벤트다.
//     }
//     }
//     todoContent();
//     );

// const toggleCompleted = id => {
//     // todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
//     todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
// };

$ul.onclick = (e) => {
    if (!e.target.matches('li > button')) return;
    todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
    render();
}


// $ul.onchange = (e) => {
// function toggleCompleted(id) {
//     todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
//     // todoContent();}
// }
// toggleCompleted(1);   // id 값이 1 인 요소의 completed값을 반전시켜라
// console.log(todos[0].completed); // true -> false

$ul.onchange = (e) => {
// console.log(e.target);
// console.log(e.target.checked);
// console.log(typeof e.target.checked);

todos = todos.map(todo => (e.target.checked ? {...todo, completed: !todo.completed} : todo)); 
// todo 에서 completed checked 상태가 / true 이면 todo의 completed 값을 바꾸고 / false 이면 기존 todo 가 결과값이다.
console.log(e.target.checked);
console.log(todos);


// todoContent(); <- 이걸 하면 기존 배열의 프로퍼티 값인 completed 값이 전부 true 인건 전부 false로,
// 전부 false인건 전부 true 로 한번에 바뀐다.
};
//-------------------------------


$completedAllToggle.onchange = e => {
    if (!e.target.matches('.completed-all')) return; // 이벤트 객체인 completedAllToggle 이 completed-all 를 클래스네임으로 가지고 있는 토글과 매치되는지 확인하기. 매치 안되는것들은 다 리턴하기.
    //  todo의 completed 값이 false일때 전체 completed값을 'true'로 하기
    todos = todos.map(todo => todo.completed === false ? {...todo, completed: 'true'}  : todo);
    render();
    console.log(todos);
}
    
//-------------------------------------------

$clearCompleted.onclick = (e) => {
    if (!e.target.matches('.clear-completed')) return;
    // completed 값이 true 인 li 삭제하기?
    // 전체 li 삭제하기?
    todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
    render();
}