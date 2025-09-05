// 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.

// a + b = c
// 제한사항
// 1 ≤ a, b ≤ 100
// 입출력 예
// 입력 #1

// 4 5
// 출력 #1

// 4 + 5 = 9

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    const a = parseInt(input[0]);
    const b = parseInt(input[1]);
    console.log(`${a} + ${b} = ${a + b}`);
});

// 단순히 덧셈을 하는게 아니라
// a+ b = c 구조가 나와야 하므로, const로 설정해주고 아래에서 템플릿리터럴을 사용하여 출력하는 방식으로 진행하였다
