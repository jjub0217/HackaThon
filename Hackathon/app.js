let todos = [{
        id: 1,
        content: 'A',
        completed: false
    },
    {
        id: 2,
        content: 'B',
        completed: false
    },
    {
        id: 3,
        content: 'C',
        completed: false
    }
]


const $ul = document.querySelector('.todo_list');
const $completedAllToggle = document.querySelector('.completed-all');
const $clearCompleted = document.querySelector('.clear-completed');
const $activeTodos = document.querySelector('.active-todos');



function render() {
    let html = '';
    todos.forEach(todo => {
        html += `<li id="${todo.id}"><input type="checkbox" class="complete" ${todo.completed ? 'checked' : ''}>${todo.content} <button class="delete">삭제</button></li>`
    })
    $ul.innerHTML = html;
    $activeTodos.textContent = todos.length;
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
    // console.log(e.target); // 삭제 버튼
    // console.log(e.target.parentNode); // <li id= 1></li>
    // console.log(typeof e.target.parentNode.id); // string
    
    
    if (!e.target.matches('li > button')) return;
    todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
    // e.target.parentNode 는 todos에 있는 객체들중 하나인 li 한개이다.
    // console.log(todos);
    render();
}

// ---------------------------------------------------------------------------------------------------------------

// 토글 체크하면 complete 값 반전시키기 

// $ul.onchange = (e) => {
// function toggleCompleted(id) {
//     todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
//     // todoContent();}
// }
// toggleCompleted(1);   // id 값이 1 인 요소의 completed값을 반전시켜라
// console.log(todos[0].completed); // true -> false

$ul.onchange = (e) => {
// console.log(e.target); // 토글체크박스
// console.log(e.target.checked); // 토글체크박스ㄴ의 체크 상태(completed 상태)
// console.log(typeof e.target.checked);
// console.log(e.target.parentNode); // 체크박스가 체크된 li (id값이 3인거에 체크했으면 해당 로그값은 id값이 3인 li)

// todos = todos.map(todo => (e.target.checked ? {...todo, completed: !todo.completed} : todo)); 
// 현재 상태에서는 체크백스에 체크 한 li만 검사하게 만드는 코드이므로, 체크한 li의 값이 반전되긴 하지만, 나머지 li 값에는 아무것도 준게 없기 때문에 
// 현재 completed 값인 false 가 나오게 된다

todos = todos.map(todo => (+e.target.parentNode.id === todo.id ? {...todo, completed: !todo.completed} : todo)); 

// console.log(e.target.checked);
// console.log(todos);

};


// -------------------------------------------------------------------------------------------------------


// 푸터 맨 왼쪽 토글 첫번째 클릭하면 전체 li 전부 체크 되기

// $completedAllToggle.onchange = e => {
//     if (!e.target.matches('.completed-all')) return; // 이벤트 객체인 completedAllToggle 이 completed-all 를 클래스네임으로 가지고 있는 토글과 매치되는지 확인하기. 매치 안되는것들은 다 리턴하기.
//     //  todo의 completed 값이 false일때 전체 completed값을 'true'로 하기
//     todos = todos.map(todo => todo.completed === false ? {...todo, completed: 'true'} : todo);
//     render();
//     console.log(todos);
// }


$completedAllToggle.addEventListener('change', function(event){
    todos = todos.map(todo => todo.completed === false ? {...todo, completed: 'true'} : todo);
    // todo의 completed가 false 인게 true일때 change 하면 completed 를 true 로 바꾸고, false 인거면 그대로 둔다.  
    render();
    // console.log(todos);
    
});

// 푸터 맨 왼쪽 토글 두번째로 클릭하면 전체 lig 전부 un체크 되기

$completedAllToggle.addEventListener('change', function(event){
    todos = todos.map(todo => todo.completed ? {...todo, completed: ''} : todo);
    // todo의 completed가 체크되어있는게 true 일때 change 하면 completed를 빈문자열(false)로 바꾸고 false 인거면(체크 안되어있으면) 그대로 둔다.
    // render(); <- 이때는 왜 render(); 하면 안되는지 물어보기    
});


// //-------------------------------------------

// checked 된 li 만 삭제하기

$clearCompleted.onclick = (e) => {
    console.log(e.target); // 삭제 버튼
    // todo 의 completed 가 true 이면 
    todos = todos.filter(todo => todo.completed === false );
   
    render();
}

// --------------------------------------------------------


