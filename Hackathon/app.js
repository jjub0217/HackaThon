let todos = [

];


const $ul = document.querySelector('.todo_list');
const $completedAllToggle = document.querySelector('.completed-all');
const $clearCompleted = document.querySelector('.clear-completed');
const $activeTodos = document.querySelector('.active-todos');
const $input = document.querySelector('.input');



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

function maxId () {
const Id = todos.map(todo => todo.id)
const max = Id.reduce((acc, cur) => (acc > cur ? acc : cur),0) + 1;
// console.log(max);
return (max);
}

function addTodo(content) {
    todos = [{id: maxId(), content, completed:false}, ...todos];
    // console.log(todos);

    // 매개변수에 content 라고 주고 함수 몸체에 content 라고 하면 위에 content값만 들어가는 addTodo 인수로 content값을 의미하는 것을 넣었기 때문에 
    // 이렇게 하면 content값이 들어간다.
}

$input.onkeyup = (e) => {
    // console.log(e);
    // console.dir(e.target.value);
    
    if (e.keyCode !== 13 || e.target.value === '') return;
    addTodo(e.target.value);  // content 값만 들어가는 함수를 호출했다.
    render();
}


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

// // ---------------------------------------------------------------------------------------------------------------

// // 토글 체크하면 complete 값 반전시키기 

// // $ul.onchange = (e) => {
// // function toggleCompleted(id) {
// //     todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
// //     // todoContent();}
// // }
// // toggleCompleted(1);   // id 값이 1 인 요소의 completed값을 반전시켜라
// // console.log(todos[0].completed); // true -> false

$ul.onchange = (e) => {
// console.log(e.target); // 토글체크박스
// console.log(e.target.checked); // 토글체크박스의 체크 상태(completed 상태) // 토글체크박스에 체크를 하면 true 로 나온다.
// console.log(typeof e.target.checked); // 불리언
// console.log(e.target.parentNode); // 체크박스가 체크된 li (id값이 3인거에 체크했으면 해당 로그값은 id값이 3인 li)
// console.log(e.target.id); // 값이 안나옴
// console.log(e.target.parentNode.id); // 1

// 처음엔 e.target.checked가 true 이면 풀어헤친 todo의  completed 값을 반전 시키면 되겠네 라고 생각햇다.
// todos = todos.map(todo => (e.target.checked ? {...todo, completed: !todo.completed} : todo)); 
// 현재 상태에서는 체크백스에 체크 한 li만 검사하게 만드는 코드이므로, 체크한 li의 값이 반전되긴 하지만, 나머지 li 값에는 아무것도 준게 없기 때문에 
// 현재 completed 값인 false 가 나오게 된다.

// 그래서 체크된 li만 삭제하는것으로 처음으로 돌아가 생각함. 그래서 문자열보다 찾기 쉬운 숫자로 된 id 값에 접근했다.
// 체크된 li의 id에 접근하려고 생각했다.  
// e.target 을 해보니까 토글체크박스가 나오는걸 보고, 그럼 li의 id에 접근을 하려면 e.target에서 어떻게 방향을 정해야 할까 
// 라고 생각했다. 
// 이것저것 해보니까 e.target의 부모요소가 li인걸 발견하고, e.target.parentNode.id를 해보니까 id 값이 나오는걸 발견했다.
// 오! li의 id에 접근을 했다. 

// todos = todos.map(todo => (+e.target.parentNode.id === id ? {...todo, completed: !todo.completed} : todo)); 
// 에러가 나네...id가 정의 되지 않았다고 한다. 뭐지.... id 가 문제인건가? id를 모르겠다고 한다면.. 그러면
// todo의 id라고 지정해주면 알려나? 

todos = todos.map(todo => (+e.target.parentNode.id === todo.id ? {...todo, completed: !todo.completed} : todo)); 

// console.log(e.target.checked);
console.log(todos);

//성공!!

};


// // -------------------------------------------------------------------------------------------------------


// // 푸터 맨 왼쪽 토글 첫번째 change하면 전체 li 전부 체크 되기


// $completedAllToggle.onchange = e => {
    //     if (!e.target.matches('.completed-all')) return; // 이벤트 객체인 completedAllToggle 이 completed-all 를 클래스네임으로 가지고 있는 토글과 매치되는지 확인하기. 매치 안되는것들은 다 리턴하기.
    //     //  todo의 completed 값이 false일때 전체 completed값을 'true'로 하기
    //     todos = todos.map(todo => todo.completed === false ? {...todo, completed: 'true'} : todo);
    //     render();
    //     console.log(todos);
    // }
    
// // 이벤트 핸들러 프로퍼티 방식은 동일한 요소에 동일한 이벤트 핸들러를 등록하지 못한다.

$completedAllToggle.addEventListener('change', function(event){
    // todo의 completed가 false 인게 true일때 change 하면 completed 를 true 로 바꾸고, false 인거면 그대로 둔다.  
    todos = todos.map(todo => todo.completed === false ? {...todo, completed: 'true'} : todo);
    render();
    // console.log(todos);
    
});

// // 푸터 맨 왼쪽 토글 두번째로 클릭하면 전체 lig 전부 un체크 되기

$completedAllToggle.addEventListener('change', function(event){
    todos = todos.map(todo => todo.completed ? {...todo, completed: ''} : todo);
    // todo의 completed가 체크되어있는게 true 일때 change 하면 completed를 빈문자열(false)로 바꾸고 false 인거면(체크 안되어있으면) 그대로 둔다.

    // render(); <- 이때는 왜 render(); 하면 안되는지 물어보기    
});


// // //-------------------------------------------

// checked 된 li 만 삭제하기

$clearCompleted.onclick = (e) => {
    console.log(e.target); // 삭제 버튼
    // todo 의 completed가 checked 된 것만 삭제해야 한다. 
    // 그래서 x 버튼을 클릭하면 todo의 completed 가 false 인것만 남겨두기로 한다. 
    todos = todos.filter(todo => todo.completed === false );
   
    render();   // <- 이때 render는 todo 리스트를 새정비 하기 때문에 여기에 하는걸로 이해 오케이
}

// // --------------------------------------------------------
