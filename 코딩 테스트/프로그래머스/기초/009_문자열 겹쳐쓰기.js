// 문제 설명
// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
// 1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
// 0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이
// 입출력 예
// my_string	overwrite_string	s	result
// "He11oWor1d"	"lloWorl"	2	"HelloWorld"
// "Program29b8UYP"	"merS123"	7	"ProgrammerS123"
// 입출력 예 설명
// 입출력 예 #1

// 예제 1번의 my_string에서 인덱스 2부터 overwrite_string의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.
// 입출력 예 #2

// 예제 2번의 my_string에서 인덱스 7부터 overwrite_string의 길이만큼에 해당하는 부분은 "29b8UYP"이고 이를 "merS123"로 바꾼 "ProgrammerS123"를 return 합니다.

// 009
// function solution(my_string, overwrite_string, s) {
//     var answer = '';
//     return answer;
// }

function solution(my_string, overwrite_string, s) {
    const front = my_string.slice(0, s);

    const back = my_string.slice(s + overwrite_string.length);

    const answer = front + overwrite_string + back;
    return answer;
}

function solution(my_string, overwrite_string, s) {
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
}

// return my_string.slice(0, s)
//      + overwrite_string
//      + my_string.slice(s + overwrite_string.length); 을 응용해야한다.

// function solution(my_string, overwrite_string, s) {
// 앞 부분 (s 이전까지)
//     const front = my_string.slice(0, s);

// 뒷 부분 (덮어쓴 부분 다음부터 끝까지)
//     const back = my_string.slice(s + overwrite_string.length);

//  최종 합치기
//     const answer = front + overwrite_string + back;
//     return answer;
// }

function solution(my_string, overwrite_string, s) {
    const front = my_string.slice(0, s);

    const back = my_string.slice(s + overwrite_string.length);

    const answer = front + overwrite_string + back;
    return answer;
}

// 배열로 변환후 인덱스로 교체
// 배열 조작 익힐 때 좋다고 함 개인적으로 이 방법으로 하는 게 좀 더 도움이 많이 될 거 같다.

// slice(start ,end )는 start부터 end 전까지 가져오는 거
// slice(9) 일땐 9번째 요소부터 끝까지 가져오는 걸 다시 한 번 기억해두자
