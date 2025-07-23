// const result = 배열
//   .filter(조건식) 조건에 맞는 애들만 남긴다.
//   .map(변환식);

const users = [
    {name: "유진", active: true },
    {name: "담비", active: false },
    { name:"우영", active: true}

];

// 위와 같이 user가 저렇게 있는데, active가 트루인 유저만 걸러낸 뒤 이름만 출력 하려면?
const activeUser = users
.filter(user => user.active)
.map(user => user.name);

console.log(activeUser);

// 책 가격이 15000원 이상인 것만 출력
const books = [
    { title: "JS 마스터", price: 12000 },
    { title: "React 고수되기", price: 18000 },
    { title: "백엔드 시작하기", price: 15000 }
  ];
  
  const expensiveBooks = books
  .filter((book) => book.price >= 15000 )
  .map((book) => book.title);
  
  console.log(expensiveBooks);

  // 특정 문자가 들어간 것만 출력
  const foods = ["현미밥", "브로콜리", "닭가슴살", "곤약밥"];

const foodPlan = foods
  .filter(food => food.includes("밥")) 
  .map(food => `오늘은 ${food} 먹기!`);

console.log(foodPlan);



const users2 = [
    { name: "일호", age: 20},
    { name: "이호", age: 24},
    { name: "삼호", age: 17},
];

const books2 = [
    { title: "JS 마스터", price: 12000 },
    { title: "JS 완벽 가이드", price: 18000 },
    { title: "React 기초", price: 15000 }
  ];

const doll = [
    {name:"한교동" ,type: "sanrio"},
    {name:"쿠로미" ,type: "sanrio"},
    {name:"그레이스" ,type: "sylvanian"}

];

const adult = users2
.filter(user => user.age >= 20)
.map(user => user.name);

const book2 = books2
.filter((book2) => book2.title.startsWith("JS")) 
.map(book2 => book2.title);

const sanrio = doll
.filter(doll => doll.type.includes("sanrio")) //.filter(doll => doll.type === "sanrio") 
.map(doll => doll.name);

console.log(`${adult}님에게 추천하는 책은 ${book2}이며, 인형은 ${sanrio}를 추천합니다.`)
//하다보니 이렇게 하는거에 대해 뭔가 추가되면 어쩌지?에 대한 귀찮음을 느꼈는데, 
console.log(`${adult[0]}님에게 추천하는 책은 ${book2[0]}이며, 인형은 ${sanrio[0]}를 추천합니다.`)
// 배웠던 map을 활용해서, 아래와 같이 하면 될 거 같다.
const messages = adult.map((name, index) => {
    return `${name}님에게 추천하는 책은 ${book2[index]}이며, 인형은 ${sanrio[index]}를 추천합니다.`;
  });
  
  console.log(messages);

  // 근데 만약 배열들이 길이가 제각각 다르다면?
 // 내가 찾은 방법은 2가지가 있었는데, 아래와 같다. 짧으면 넘긴다 라는 것도 있었는데 그건 잘 사용하지 않을거 같아서 적진 않겠다.

 // 누락되면 따로 안내한다

 const adults = ["일호", "이호", "삼호"];
const book2 = ["JS 마스터", "JS 완벽 가이드"];
const sanrio = ["한교동", "쿠로미"];

for (let i = 0; i < adults.length; i++) {
  const name = adults[i];
  const book = book2[i];
  const doll = sanrio[i];

  // 하나라도 없으면 안내 메시지
  if (!book || !doll) {
    console.log(`${name}님에게는 추천 정보를 준비 중입니다.`);
    continue;
  }

  console.log(`${name}님에게 추천하는 책은 ${book}이며, 인형은 ${doll}를 추천합니다.`);
}

 // 정제된 결과만 담는다// 즉 반복이기 떄문에 뭔가 추가되어도 이상하지 않다

 const adults = ["일호", "이호", "삼호"];
const book2 = ["JS 마스터", "JS 완벽 가이드"];
const sanrio = ["한교동", "쿠로미"];

const results = adults
  .map((name, i) => {
    if (!book2[i] || !sanrio[i]) return null;
    return ${name}님에게 추천하는 책은 ${book2[i]}이며, 인형은 ${sanrio[i]}를 추천합니다.;
  })
  .filter(Boolean); // null 제거을 제거하는 방식이라고 하는데 이거에 대한 방법도 뭔가 익히고 해야 할 거 같다.

results.forEach((message) => console.log(message));

//map()은 데이터를 정제해서 새로운 배열로 만들기 위한 목적이기 때문에, 누락 안내문같은 다른건 넣진 않는다. 한 배열안이 뒤죽박죽 섞이기 때문이다.
//  for 같은 흐름 제어용 반복문에서 처리하는 게 좋다라고 배웠지만
// 지피티를 통해 들은 지식이기 떄문에 좀 더 비슷한 상황이오거나 그럴 떄 검증을하고 실력을 길러 나가야 할 거 같다.


//아래처럼 continue, break 을 사용하는 방법도 있다. 아직 취준생이라 확실하진 않지만 개념 정도를 알고 있으면 좋을 거 같다.


for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "건너뛰기") continue;
    if (arr[i] === "중단") break;
    console.log(arr[i]);
  }

  
  for (let i = 0; i < adults.length; i++) {
    const name = adults[i];
    const book = book2[i];
    const doll = sanrio[i];
  
    if (!book || !doll) {
      console.log(`${name}님에게는 추천 정보를 준비 중입니다.`);
      continue; // 이후 코드 실행 안 하고 다음 반복으로 이동
    }
  
    if (name === "삼호") {
      console.log("삼호는 특별 고객이므로 추천 중단");
      break; // 반복 자체를 멈춤
    }
  
    console.log(`${name}님에게 추천하는 책은 ${book}이며, 인형은 ${doll}를 추천합니다.`);
  }

  //JS와 리액트가 다른것도 알아두자.

//   import React from "react";

// const adults = ["일호", "이호", "삼호"];
// const book2 = ["JS 마스터", "JS 완벽 가이드"];
// const sanrio = ["한교동", "쿠로미"];

// export default function RecommendationList() {
//   const messages = adults.map((name, i) => {
//     const book = book2[i];
//     const doll = sanrio[i];

//     if (!book || !doll) {
//       return `${name}님에게는 추천 정보를 준비 중입니다.`;
//     }

//     return `${name}님에게 추천하는 책은 ${book}이며, 인형은 ${doll}를 추천합니다.`;
//   });

//   return (
//     <ul>
//       {messages.map((msg, i) => (
//         <li key={i}>{msg}</li>
//       ))}
//     </ul>
//   );
// }