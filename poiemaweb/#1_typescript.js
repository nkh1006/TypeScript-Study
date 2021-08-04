// 자바스크립에서는 정적타입의 선언이 되지 않는다.

function sum(a, b) {
  return a + b;
}

// 따라서 아래와 같은 상황에서도 아무런 에러가 없다.
function sum2(a, b) {
  return a + b;
}

sum2('x', 'y'); // 'xy'