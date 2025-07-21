function outer () {
    let count = 0;
    
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter()); // 1 출력
console.log(counter()); // 2출력


// 클로저로 생성된 count라는 변수는 자유롭게 접근 및 수정이 가능하다.
// => 즉, 파이썬과 달리 JS는 클로저 내부에서 외부 변수(count)를 자유롭게 수정할 수 있다.