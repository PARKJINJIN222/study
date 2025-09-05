// 문제 설명
// 문자열 str이 주어집니다.
// 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str의 길이 ≤ 10

// 입출력 예
// 입력 #1

// abcde
// 출력 #1

// a
// b
// c
// d
// e

// 007
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = [line];
// }).on('close',function(){
//     str = input[0];
// });

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = [line];
}).on("close", function () {
    [...input[0]].forEach((a) => console.log(a));
});

// 입력 문자열을 여러줄로 나누어 배열로 만든 후, 각 줄의 마지막 문자를 가져와서 새로운 문자열로 만들면 된다고 함
// 하문자 단위로 돌아야 하는데, 그대로 돌면 배열의 요소로 돌아서
// forEach를 쓴다면 문자열 -> 배열로 변환 후 순회 해야함
// [...input] = “배열의 요소(=문자열 한 덩어리)”를 순회 → 오답

// [...input[0]] = “문자열의 문자”를 순회 → 정답

//라고 한다 for of 를 쓰거나 for문을 쓰는 방법도 있었지만, 인터넷 검색했을때 젤 먼저 나온게
// forEach를 사용하는 방법이였어서 이걸로 하고 싶어서 고민을 했는데, 결국 인덱스를 정해주면 문자열의 문자를 순회
// 하기 때문에 정답이 나온 것 같다.

// for (const ch of input[0]) console.log(ch); <- 이렇게도 할 수 있다고 함

//   const s = input[0]; // 문자열 꺼내기
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i]);  <- for 문을 쓰면 이렇게
