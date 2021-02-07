/*
1초마다 시간을 흐르는 것을 나타낼 수 있도록
주기별 동작을 정의한 파일!
*/

// 사용될 문서 객체 요소 두개
const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector("h1")

// 현재 시간을 얻어오는 함수!
// Date 객체를 사용해서, 시분초를 얻어온다!
function getTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    clockTitle.textContent = `${hours}:${minutes}:${seconds}`;
}

// 시작과 동시에 호출할 함수!
// getTime 함수를 주기적으로 호출하게끔 동작을 지정!
function init(){
    // 1초마다 갱신!
    getTime();
    setInterval(getTime, 1000)
}

init(); // 동작해준 실행문들을 실행시키면서 시작!