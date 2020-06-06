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
const $inputToggle = document.querySelector('.completed');


function todoContent() {
    let html = '';
    todos.forEach(todo => {
        html += `<li id="${todo.id}"><input type="checkbox" class="complete" ${todo.completed ? 'checked' : ''}>${todo.content} <button class="delete">삭제</button></li>`
    })
    $ul.innerHTML = html;
}
todoContent();

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
    todoContent();
}


// $ul.onchange = (e) => {
// function toggleCompleted(id) {
//     todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
//     // todoContent();}
// }
// toggleCompleted(1);   // id 값이 1 인 요소의 completed값을 반전시켜라
// console.log(todos[0].completed); // true -> false

$ul.onchange = e => {
// console.log(e.target);
// console.log(e.target.checked);
// console.log(typeof e.target.checked);

todos = todos.map(todo => (e.target.checked ? {...todo, completed: !todo.completed} : todo)); 
console.log(e.target.checked);

// todoContent(); <- 이걸 하면 기존 배열의 프로퍼티 값인 completed 값이 전부 true 인건 전부 false로,
// 전부 false인건 전부 true 로 한번에 바뀐다.
};



