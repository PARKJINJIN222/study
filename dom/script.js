const buttons = document.querySelectorAll(".myBtn");
const mesaage = document.getElementById('message');

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (index === 0) {
            message.textContent = "2,3번째 버튼을 누르지 않았네요."
        }else{
            mesaage.textContent = `${index + 1}번째 버튼을 누름`;
        console.log(`${index + 1}번 버튼 눌림`);}
    })
})



// 조건? 참:거짓 
// 버튼을 눌렀을 때 삼항 연산자로 1번을 누를 경우에 2,3번을 누르지 않았다고 나오게 하고,
// 2,3번을 눌렀을 땐 그대로 출력하게 하려면
// 인덱스에서 아이디 값을 다르게 주고, 그거를 새로 추가 하는 방법밖에 없을 거 같은데
// for 구문을 사용 not bad
// 원래 있던거에 for 구문을 추가? 아니면 아래에 firstButtons.for 구문을 추가? bad