// 문제 설명
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str의 길이 ≤ 20
// str은 알파벳으로 이루어진 문자열입니다.

// 입출력 예
// 입력 #1

// aBcDeFg
// 출력 #1

// AbCdEfG

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//     input = [line];
// }).on("close", function () {
//     str = input[0];
//     const newStr = str.toUpperCase();

//     console.log(str);

//     //     let arr = [];

//     //    str.split('').forEach((k) => {arr.push(k == k.toUpperCase() ? k.toLowerCase() : k.toUpperCase()); });

//     // console.log(arr.join(''));
//     // });
// });

//toLowerCase()
//toUpperCase();

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = [line];
}).on("close", function () {
    const str = input[0];

    const result = str
        .split("")
        .map((str) => (str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()))
        .join("");
    console.log(result);

    //     let arr = [];
});

// .split으로 배열로 만들고 맵을 쓰는 방법과
// for문을 순회해서 만드는 방법이 있는데, 짧은건 map을 쓰는게 좋고
// 길다면 for문을 쓰는게 좋은 거 같다.
// 늘 배운 거지만 쓰려고 하면 머리가 버벅이고, 오래 걸리는 건 어쩔 수 없는 거 같다.
// 좀 더 정보를 찾아보고 보완을 해야 할 거 같다.
// .split 대신에 const result = ...[str]하고 맵문을 써도 괜찮다. (아마 이게 더 자주 쓰일거다)
