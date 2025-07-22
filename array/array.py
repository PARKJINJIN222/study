# 타입 제한 없음
arr = [1, "hello worid", True, None]
arr.append("고구마")
# 길이 확인은 len(arr)사용 
#파이썬에서의 for of문은 이름만 다른 for in을 사용한다.

# for 변수 in 반복가능한것 : 
#   실행할 코드

foods = ["닭가슴살", "현미밥", "브로콜리"]

for food in foods:
    print(f"오늘의 식단: {food}")

# const fruits = ["수박", "바나나", "키위"];

# for (let i = 0; i < fruits.length; i++) {
#     console.log(`오늘의 과일: ${fruits[i]}`);
# }

# =>  

fruits = ["수박", "바나나", "키위"]

for i in range(len(fruits)):
    print(f"오늘의 과일: {fruits[i]}")

JS
# for (let i = 0; i < fruits.length; i++) {
#     console.log(`${i + 1}번째 과일: ${fruits[i]}`);
# }

for idx, fruit in enumerate(fruits):
    print(f"{idx + 1}번째 과일: {fruit}")


#for (let i = 0; i < 5; i++) {
#     console.log(i)
# };

# =>
for i in range(5):
    print(i)

# map과 filter 대신 
exercises = ["벤치프레스", "스쿼트", "데드리프트"]

labeled = [f"{i+1}번 운동: {ex}" for i, ex in enumerate(exercises)]
print(labeled)

members = ["진한", "은랑", "유나", "세라"]

filtered = [name for name in members if "은" in name]
print(filtered)