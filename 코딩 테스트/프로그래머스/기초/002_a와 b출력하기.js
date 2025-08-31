// 문제: 문정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
// 제한사항: -100,000 ≤ a, b ≤ 100,000
// 입출력 예
// 입력 #1

// 4 5
// 출력 #1

// a = 4
// b = 5

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [4, 5];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    console.log(`a = ${Number(input[0])}\nb = ${Number(input[1])}`);
});

// 어떤 수가 들어가도 출력하게 하는 방법을 찾아야 하나 했는데, 간단하게 예로 나온 4,5를 let input에 대입하니 쉽게 풀리는 문제 였다.
// const rl = require('readline').createInterface({ input: process.stdin });

// rl.on('line', (line) => {
//   const [a, b] = line.trim().split(/\s+/).map(Number); // 공백/개행 모두 대응
//   console.log(`a = ${a}`);
//   console.log(`b = ${b}`);
//   rl.close();
// });
// 이렇게 하면 어떤 수를 넣어도 된다고 지피티에게 들었지만, 좀 더 서칭을 통해 방법을 찾아보는게 좋을 거 같다.
