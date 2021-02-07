/*
할일 목록을 입력하는 폼 관리
할일 생성, 삭제 모두 가능해야 한다.
할일은 로컬스토리지를 통해 영구 보관된다.
*/

const toDoForm = document.querySelector('.js-toDoForm')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('.js-toDoList')
var toDos = [] // 할일 목록을 나타낼 배열!

// 할일 삭제하기
function deleteTodo(event){
    const li = event.target.parentNode;
    toDoList.removeChild(li);
    var delIdx = undefined;
    for(let i = 0; i < toDos.length; i++){
        if(toDos[i].id == li.id){
            delIdx = i;
        }
    }
    toDos.splice(delIdx, 1);
    for(let i = 0; i < toDos.length; i++){
        toDos[i].id = i+1;
    }
    console.log(toDos)
    saveToDos()
}

// 할일 로컬스토리지에 저장하기
function saveToDos(){
    
}

// 할일 목록을 웹문서에 표시해주는 함수
function paintTodo(text){
    const item = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "X"
    deleteButton.addEventListener('click', deleteTodo);
    const span = document.createElement('span');
    span.innerText = text;
    item.appendChild(span);
    item.appendChild(deleteButton);
    item.id = toDos.length + 1;
    toDoList.appendChild(item);
    const toDoObj = {
        text : text,
        id : toDos.length + 1
    }
    toDos.push(toDoObj)
    saveToDos();
}

// 폼의 제출 이벤트 핸들러
function handleSubmit(event){
    event.preventDefault()
    const currentValue = toDoInput.value;
    paintTodo(currentValue)
    toDoInput.value = ""
}

// 로컬스토리지에서 할일 목록 가져오기
function loadToDos(){
    const loadedToDos = localStorage.getItem("toDos");
    if(loadedToDos !== null){
        const parseToDos = JSON.parse(loadedToDos)
        for(let i = 0; i < parseToDos.length; i++){
            paintTodo(parseToDos[i].text)
        }
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();