def outer_function():
    count = 0  # 바깥 함수의 지역 변수 (외부 스코프)

    def inner_function():
        nonlocal count  # 바깥 함수의 count를 참조해서 변경하겠다는 선언 nonlocal을 쓰지 않으면
        count += 1      # count를 1 증가시킴
        print(count)    # 현재 count 출력

    return inner_function  # 내부 함수를 "반환"함 (실행 아님!)

counter = outer_function() # outer_function이 실행되고, inner_function이 반환됨
counter() # 1 출력
counter() # 2 출력


# 파이썬은 함수 안에서 변수를 수정하려고 할 때 nonlocal이 있어야 하는데, 없으면 새 지역변수로 판단해서
# 오류가 발생한다.
# 즉 nonlocal은 바깥에 있는 것을 참조 하겠다 라는 뜻이다 

# def example(x):
#     def example(n):
#         return x * n 근데 만약 여기위에 x +=1 이 있으면 오류가 생김 그럴 때 나 바깥 x를 참조할게 라는 의미의 nonlocal x를 적어줘야 함
#     return example

# double = example(2)
# triple = example(3)

# print(double(5))  # 10
# print(triple(5))  # 15