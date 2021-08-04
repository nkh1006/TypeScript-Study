// 타입스크립트에서는 정적 타입의 변수를 선언 할수 있다.
// 때문에 컴파일단계에서의 예기치 못한 오류나 변수를 방지 할 수있다.

function sum(a: number, b: number): number {
  return a + b;
}

function sum2(a: number, b: number) {
  return a + b;
}

sum2('x', 'y');
// error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.