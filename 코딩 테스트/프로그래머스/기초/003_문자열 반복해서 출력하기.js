// 문자열 str과 정수 n이 주어집니다.
// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요

// 제한사항
// 1 ≤ str의 길이 ≤ 10
// 1 ≤ n ≤ 5
// 입출력 예
// 입력 #1

// string 5
// 출력 #1

// stringstringstringstringstring

// # 003
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', function (line) {
//     const input = line.split(' ');
//     const str = input[0];
//     const n = Number(input[1]);

//     let result = '';
//     for (let i = 0; i < n; i++) {
//         result += str;
//     }

//     console.log(result);
//     rl.close();
// });

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    const input = line.split(" ");
    const str = input[0];
    const n = Number(input[1]);

    let result = "string";
    for (let i = 1; i < n; i++) {
        result += str;
    }

    console.log(result);
    rl.close();
});

// 뭔가 건드릴 필요도 없이 바로 답이 나오는 문제여서 당황스러웠다.
// 그래도 조금 다르게 풀어보면 어떨까 해서 스트링을 대입하고 let i를 1로 지정해서 순회하게 했는데 정답이 나왔다.
// 초기화에 따라 반복문의 시작 인덱스를 조정하는 습관이 실수를 유발 할 수 있다고 해서 좀 더 유의헤야 하겠다고 생각이 들었다.
// => "초기값은 중립적인 상태(빈 문자열, 0, 빈 배열 등) → 반복문은 0부터 n까지"가 더 안전하고 읽기 쉽기 때문이다.
