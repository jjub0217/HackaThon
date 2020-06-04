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

function todoContent() {
todos.forEach(todo => {
    $ul.innerHTML += `<li><input type="checkbox" id="${todo.id}" ${todo.completed ? 'checked' : ''}>${todo.content} <button class="delete">삭제</button></li>`
})

}
todoContent();

const $delete = document.querySelectorAll('.delete');
// $delete라는 유사배열인 NodeList가 생기고, 그 NodeList 에 접근하고 싶으면, 표준 배열 노테이션을 사용할수 있다. 
// 일반적인 모든 반복문을 사용할수 있다.
// 삭제 버튼 3개의 배열이 생겼을 것이다. 이 배열을 forEach를 돌려서 각 요소를 꺼내서, 그 요소를 의미하는 단어를 forEach 매개변수에 넣어주고,
$delete.forEach(function (button) {
button.onclick = function (){ // 그 요소에 클릭이벤트를 주려고 한다. 
    console.log('Hello world'); // 그 이벤트는 'Hello world' 라고 찍히는 이벤트다.
}
});

// function clickEvent() {
//     console.log('Hello');

// }
//1111111
// $delete.forEach(function (button) {
//     button.addEventListener('click', clickEvent);
// });

// function clickEvent() {
//     console.log('Hello');

// }


//222222222222
$ul.onclick = function (e) {
    if (e.target.matches('button')) { // e.target에 matches 메소드를 사용해서 찾으려는게 버튼인지 아닌지 확인해라. 확인해서 트루면
        console.log('Hello world'); // 이걸 출력해라. 
    }}


// console.log(e.target.matches('button'));   // 출력해라. 뭐를? 이벤트객체의 target이라는 프로퍼티에 matches 메소드를 사용해라. 
// console.log('Hello world')
// console.log(e.target);



// $delete.forEach($delete => $delete.onclick = function () {
//     console.log('Hello world')                                                                                      ;
// };
