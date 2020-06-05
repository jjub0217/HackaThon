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

function todoContent() {
    let html='';
    todos.forEach(todo => {
        html += `<li id="${todo.id}"><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content} <button class="delete">삭제</button></li>`
    })
    $ul.innerHTML = html;
}
todoContent();

const $delete = document.querySelector('.delete');

// $delete.forEach(function (button) {
//     button.onclick = function (){ // 그 요소에 클릭이벤트를 주려고 한다. 
//         console.log('Hello world'); // 그 이벤트는 'Hello world' 라고 찍히는 이벤트다.
//     }
//     }
//     todoContent();
//     );

$delete.onclick = (e) => {
    // if (e.target.matches('li > button')) return;
    console.log(e.target.parentNode.id);
    console.log('2',todos)
    todos = todos.filter(todo => todo.id !== e.target.parentNode.id)
    console.log('3',todos)
    todoContent();
}








// $delete.forEach(function (button) {
//     button.onclick = function (){ 
//         console.log('Hello world'); }})