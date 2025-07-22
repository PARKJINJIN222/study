//타입 제한 없음
// const arr = [1, "hello world", true, null];
//arr.push("런지")

//for문

for (let i = 0; i <5; i++) {
    console.log(i);
}

const fruits = ["수박", "바나나", "키위"];

for (let f = 0; f < fruits.length; f++) {
    console.log(`${f + 1}번째 음식: ${fruits[f]}`);
}

const exercises = ["벤치프레스", "스쿼트", "데드리프트"];
for ( let e = 0; e < exercises.length; e++ ) {
    console.log(`오늘의 운동: ${exercises[e]}`) }
//만약 여기서, 스쿼트부터 만들고 싶다 => let e = 1;로 변경 or if 조건 응용
// 이렇게 하면 벤치프레스만 제외하고 만들 수 있다.
for (let e = 0; e < exercises.length; e++) {
    if (exercises[e] !== "벤치프레스") {
      console.log(`운동: ${exercises[e]}`);
    }
  }

  

// for...of 문 – 배열이나 반복 가능한 것 하나씩 꺼내기
const foods = ["닭가슴살", "현미밥", "브로콜리"];

for (const food of foods) {
    console.log(`오늘의 식단: ${food}`)
}
// 이러면 오늘의 식단: foods[0].. 이런식으로 나온다.
// arr 배열 안에 있는 요소를 처음부터 끝까지 하나씩 꺼내서 name에 넣어줘 라는 뜻

// map 
const numbers = [1,2,3,4,5];
const doubled = ((n) => n * 2);
console.log(doubled);



const exercises2 = ["벤치프레스", "스쿼트", "데드리프트"];

const labeled = exercises2.map((ex, i) => `${i + 1}번 운동: ${ex}`)
console.log(labeled);

// filter

const numbers2 = [1,2,3,4,5];
const even = numbers.filter((n) => n % 2 ===0 );
console.log(even);

const members2 = ["철수","훈이","맹구"];
const filtered = members2.filter((who) => who.includes("맹"));
console.log(filtered);

const items = ["고양이", "강아지", "햄스터"];
// 각각 "1번: 고양이", "2번: 강아지" ... 로 출력
// forEach, map, for중 어떤게 나을지
items.forEach((item, index) => {
    console.log(`${index}번 : ${item}`);
});



// forEach는 단순 출력용, 저장하거나 표기할떈 map을 사용 아래처럼.
// 즉 forEach는 console.log, map,filter는  return을 쓰는게 더 좋다고 보는게 맞는 거 같다.
//filter()는 내부에서 true/false 값을 기대하기 떄문
const labeledItems = items.map((item, index) => {
    return `${index + 1}번 : ${item}`;
});

console.log(labeledItems);

//위의 해당 내용이 return을 쓰면 이렇게 된다.
const members2 = ["철수","훈이","맹구"];
const filtered = members2.filter((who) => { return who.includes("맹")});
console.log(filtered);

const result = foods.filter((food) => food.includes("밥")); // 이렇게 리턴생략도 가능하다

//forEach를 const 변수 = forEach() 이런식으로 못 쓰는 이유
// forEach()는 반환값이 undefined가 나오기 때문이다. (저장할 게 없기 떄문)

// ✔ 콘솔 찍거나 DOM 조작하려고 확인할 때 → forEach
// 	•	ex) 버튼들에 이벤트 달기
// 	•	ex) 값이 어떻게 생겼는지 확인하기

// ✔ 화면에 보여줄 리스트 만들기 → map
// 	•	ex) React에서 posts.map()으로 JSX 생성
// 	•	ex) 상품 리스트, 댓글 목록 만들기

// ✔ 조건 걸어서 필터링 → filter
// 	•	ex) 검색 결과 필터
// 	•	ex) 체크된 항목만 추리기