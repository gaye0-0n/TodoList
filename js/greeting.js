/*
사용자 이름과 인사말을 표시하는 파일!
사용자 이름은 로컬스토리지에 보관되며,
사용자 이름이 없을 시에는 입력착을 표시한다.
*/

const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greetings")

// 이벤트 객체를 처리하는 이벤트 핸들러 함수!
function handleSubmit(e){
    e.preventDefault(); // 기존 동작은 차단! 하고 싶은 동작을 새롭게 한다!
    const currentUser = input.value;
    
    // input과 h2의 클래스를 조작하여
    // 서로의 상태를 지정해두기!
    greeting.classList.add("showing")
    form.classList.remove("showing")
    form.classList.add("hiding")
    
    greeting.textContent = `HELLO, ${currentUser}` 
    localStorage.setItem("currentUser", currentUser)
}

function init(){
    // 로컬스토리지에 currentUser 존재 유무에 따라
    // 문서 객체 노출 여부 결정하기!
    const currentUser = localStorage.getItem("currentUser")
    
    if(currentUser == null){
        form.classList.add("showing")
        greeting.classList.remove("showing")
        greeting.classList.add("hiding")
    }else{
        greeting.classList.add("showing")
        form.classList.remove("showing")
        form.classList.add("hiding")
        
        greeting.textContent = `HELLO, ${currentUser}`
    }
    
    // 이벤트 종류와 해당 이벤트에 대한 함수를 함께 정의!
    form.addEventListener("submit", handleSubmit)
}

init()