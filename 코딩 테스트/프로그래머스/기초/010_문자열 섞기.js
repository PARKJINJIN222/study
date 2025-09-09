// 문제 설명
// 길이가 같은 두 문자열 str1과 str2가 주어집니다.

// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ str1의 길이 = str2의 길이 ≤ 10
// str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.
// 입출력 예
// str1	str2	result
// "aaaaa"	"bbbbb"	"ababababab"

// 010
// function solution(str1, str2) {
//     var answer = '';
//     return answer;
// }

function solution(str1, str2) {
    var answer = "";
    for (let ab = 0; ab < str1.length; ab++) {
        answer += str1[ab] + str2[ab];
    }
    return answer;
}

// 반복문은 도대체 언제 쓰는 걸까에 대해 깊게 고민한 거 같다
// 말 그대로 반복문은 비슷한 작업을 여러 번 해야 할 떄 쓰는것인데,
// 보통 위 처럼 문제를 주면 어떤걸 써야 할까? 하는 생각을 하게 되는 거 같다.
// 코딩이란 컴퓨터팅적 사고를 해야 한다는 걸 잊지 말자.
