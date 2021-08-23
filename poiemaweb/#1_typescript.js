// 타입스크립트에서는 정적 타입의 변수를 선언 할수 있다.
// 때문에 컴파일단계에서의 예기치 못한 오류나 변수를 방지 할 수있다.
function sum(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
sum2("x", "y");
// error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.
// 함수선언식
function multiply1(x, y) {
    return x * y;
}
// 함수표현식
var multiply2 = function (x, y) { return x * y; };
console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
console.log(multiply1(true, 1)); // error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.
