const users = [
    { name: "일호", book: "JS 마스터", doll: "한교동" },
    { name: "이호", book: null, doll: "쿠로미" },
    { name: "삼호", book: "JS 완벽 가이드", doll: undefined }
  ];

// 원하는 출력 1
// 일호님에게 추천하는 책은 JS 마스터이며, 인형은 한교동를 추천합니다.
// 이호님에게는 추천 정보를 준비 중입니다.
// 삼호님에게는 추천 정보를 준비 중입니다.


for (let u = 0; u < users.length; u++ ) {

  const name = users[u].name;
  const book = users[u].book;
  const doll = users[u].doll;

 if (!book || !doll ) {
  console.log(`${name}님에게 추천 정보를 준비중입니다!`)
  continue;
 }
 console.log(`${name}님에게 추천하는 책은 ${book}이며, 인형은 ${doll}를 추천합니다.`);
}

// 목표 2: map() + filter() 써서

// → 정상 데이터만 메시지 배열로 만들기