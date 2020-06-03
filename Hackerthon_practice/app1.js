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

// todos.completed ? checked : ''

// findById(id){
//     return this.uers.filter(user => user.id === ture);
// }

function todoContent() {
todos.forEach(todo => {
    $ul.innerHTML += `<li><input type="checkbox" id="${todo.id}" ${todo.completed ? 'checked' : ''}>${todo.content} <button class="delete">삭제</button></li>`
})
}
todoContent();

const $delete = document.querySelector('.delete');

$delete.addEventListener('click', function () {
console.log('button click');
});
// 삭제 클릭하면 콘솔로그 hello 출력하게 만들어라. 



//////////////////////////////////////////////

// const $ul = document.querySelector('.todo_list');
// const $button = document.querySelector('button');

// var i = 0;
// $button.onclick = function () {
//     if (i === 3) {
//            i = 0;}
//     $ul.innerHTML += `<li>${todos[i].content}</li>`;
//     ++i;
// }

// 버튼 클릭했을때 i 가 3 일때 추가한 노드의 부모 노드로 가서 
// 부모노드가 자식 노드를 지우면 되.
// i 가 3이 아니야. 
// 그러면 코드블럭 바깥 문이 실행됨.
// i가 증가됬어.
// 증가된 i로 if문 재실행되.

//그냥 참조하면 값을 가져오고 
// 할당하면 할당한 값으로 재할당
//재할당 한 값이 값으로 할당되고 html에 들어가서 dom 이 바껴
// 리플로우 리페인팅이 됨.
//리페인팅 된 값이 불러와져. 

// $button.onclick = function () {
//     for (let i = 0; i < todos.length; i++){
//         todoContent.innerHTML = `<li>${todos[i].content}</li>`;
//     }
// } 

// $button.onclick = function () {
//     todos.forEach(function (todo) {
//         todoContent.innerHTML += `<li>${todo.content}</li>`;
//     })
// }



// $button.onclick = todos.forEach(function (todo){
// todoContent.innerHTML += `<li>${todo.content}</li>`;
// }
// todos.forEach(todo => {
//     todoContent.innerHTML += `<li>${todo.content}</li>`
// })

// const content = todos.map(todo => todo.content);                                                                     
// console.log(content);
// // content 불러옴

// 1번 
// const $button = document.querySelector('button')
// $button.addEventListener('click', todoContent);
// function todoContent() {
//     const content = todos.map(todo => todo.content);
//     return content;
// }

// 2번 $button.onclick = (e) => {





//    var listPlus = document.createElement('li');
//    document.querySelector('.todo_list').appendChild(listPlus);
//    var listPlus = content;
//    console.log(content[1]);
// }
// // 사용자가 버튼을 클릭하면 함수를 호출하도록 요청


//     for (let i = 0; i < todos.length; i++) {
//         const content = todos.map(todo => todo.content);
//         return content;
//     }
//     console.log(content);
// }