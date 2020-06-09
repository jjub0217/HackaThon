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
const $nav = document.querySelector('.nav');
const $all = document.getElementById('all');
const $active = document.getElementById('active');
const $completed = document.getElementById('completed');



function render() {   // 배열 새로 그리는 함수 

    // [...$nav.children].forEach($nav =>  
    // $nav : ul로 묶은 li 마크업 
    // $nav.children :  각각의 li의 id와 li의 value 이다. : 객체
    // [$nav.children] : 객체
    // [...$nav.children] : 객체 <- 각각의 li의 value 값만 담긴 배열이 된다. 
    // 각각 Active에 담아주고, Completed 에 담아줘야 하는 작업을 해야 한다. 
    // 그러기 위해서 원본배열은 훼손되면 안되니까 todos 의 복사본을 만들어서 
    // 그 복사본에서 필터링을 해서 체크 된거, 안된거를 추출해서 담아줘야 한다. 
    // 그래서 해당 위의 작업을 해주는 함수를 새로 추가해야 한다.

    let filterTodos = []; // <- todos 의 복사본을 담기 위해 filterTodos 라는 변수에 빈 배열을 만들어준다.
    filterTodos = [...todos]; // <- 위의 빈 배열에 기존 todos를 풀어헤친것을 담아준다. 





    // ver2.0 버전 render 함수 
    let html = '';   // html 이라는 변수에 문자열 할당.
    todos.forEach(todo => { // todos를 forEach 로 todos의 length 만큼 순회돌면서 html을 생성 시키자.
        html +=  // html 이라는 문자열에 forEach 돌아서 생성한 html을 할당시키자.
       `<li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" type="checkbox" class="checkbox"  ${todo.completed ? 'checked' : ''}><label for="ck-${todo.id}">${todo.content}</label>
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

// All 을 "클릭" 하면 All 의 id가 나와야 하고, Active를 "클릭하면" Active의 id 가 나와야 하고, 
// Completed를 클릭함면 Completed의 id가 나와야 한다. 



// [...$nav.children].forEach($nav =>  
// $nav : ul로 묶은 li 마크업 
// $nav.children :  각각의 li의 id와 li의 value 이다. : 객체
// [$nav.children] : 객체
// [...$nav.children] : 객체 <- 각각의 li의 value 값만 담긴 배열이 된다. 
// 각각 Active에 담아주고, Completed 에 담아줘야 하는 작업을 해야 한다. 
// 그러기 위해서 원본배열은 훼손되면 안되니까 todos 의 복사본을 만들어서 
// 그 복사본에서 필터링을 해서 체크 된거, 안된거를 추출해서 담아줘야 한다. 
// 그래서 해당 위의 작업을 해주는 함수를 새로 추가해야 한다.


function tabMove() {
   


    console.log(target);   // 각 온클릭 이벤트가 실행되는 객체
console.log(target.classList); // "" 왜지?

    if (!target.matches('.nav > li')) return;
    [...$nav.children].forEach($nav => {
      if ($nav === target) target.classList.add('active');
      else $nav.classList.remove('active');
    //   $nav.classList.toggle('active', $nav === target)})
     
     todos =  todos.filter(todo => !todo.completed);
     render();
    });
}
$nav.onclick = activate;

// $nav.onclick = (e) => {
//     // console.dir(e);
//     console.log(e); // 이벤트
//     if (!e.target.matches('.nav > li#active')) return;
//     console.log(e.target);
//     todos = todos.filter(todo => !todo.completed);
//     render();
//     // console.log(!e.target); // false
// }

// $nav.onclick = (e) => {
//     // console.dir(e);
//     console.log(e); // 이벤트
//     if (!e.target.matches('.nav > li#completed')) return;
//     console.log(e.target);
//     todos = todos.filter(todo => todo.completed);
//     render();
//     // console.log(!e.target); // false
// }


// $nav.addEventListener('click', function(event){
//     if (!event.target.matches('.nav > #active')) return;
//     todos = todos.filter(todo => !todo.completed);
//     render();
// });


// $nav.addEventListener('click', function(event){
//     if (!event.target.matches('.nav > #completed')) return;
//     todos = todos.filter(todo => todo.completed);
//     render();
// });




//     console.log($all.classList); // active
//     // $all.classList.remove('.active');


//     $all.className = 'active';
//     $all.classList.remove('active');
//     $all.classList.add('#active');
//     // const actived = todos.filter(todo => !todo.completed);
//     // console.log(actived);

    
//     // $all.classList.remove('.active');
//     // e.target.classList.add('active');
