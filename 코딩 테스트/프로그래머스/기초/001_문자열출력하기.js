// 문제: 문자열 출력하기
// 제한사항: 1 ≤ str의 길이 ≤ 1,000,000
// 입력: 문자열 str (공백 없음, 한 줄)
// 출력: 입력받은 문자열 그대로 출력


//  - Node.js 환경이라 readline으로 입력을 받아야 한다 <이게 뭔지 정말 처음엔 당황스러웠었다>

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function() {
    const str = input[0];
    console.log(str);
});

// 정말 별 거 없지만 readline이라는 저게 너무 어려워 보여서 2분 정도 벙쪘던 거 같다.
// 하지만 결국 구조가 input을 출력하는거고, 저걸 console.log에서 쓸 수 있도록
// 20번째 줄에 const를 붙여줘서 출력하면 될 거 같다는 생각을 했고, 정말 별 거 없구나 라는 걸 깨닫게 해준 문제 같다. 