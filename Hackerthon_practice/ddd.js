const todos = [{
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
const $button = document.querySelector('button');

// const content = todos.map(todo => todo.content);
// console.log(content);

todos.completed ? checked : ''

// findById(id){
//     return this.uers.filter(user => user.id === ture);
// }

function todoContent() {
    todos.forEach(todo => {
        $ul.innerHTML += `<li><input typ="checkbox" id="${todo.id}" ${todo.completed ? 'checked' : ''}>${todo.content} <button>삭제</button></li>`
    })
}
todoContent();




// $ul.innerHTML += `<li>${todo.content}</li>`;