var foo = 'hello';
// 컴파일 시점에서 타입체크를 실행한다. 동적타입
// let bar: number = true;
// 함수에도 마찬가지로 타입을 제한 할 수 있다.
// 함수선언식
function multiply1(x, y) {
    return x * y;
}
// 함수표현식2
var multiply2 = function (x, y) { return x * y; };
console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
// error
// console.log(multiply1(true, 1));
// boolean
var isDone = false;
// null
var n = null;
// undefined
var u = undefined;
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var color = "blue";
color = 'red';
var myName = "Lee"; // ES6 템플릿 문자열
var greeting = "Hello, my name is " + myName + "."; // ES6 템플릿 대입문
// object
var obj = {};
// array
var list1 = [1, 'two', true];
var list2 = [1, 2, 3];
var list3 = [1, 2, 3]; // 제네릭 배열 타입
// tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
var tuple;
tuple = ['hello', 10]; // OK
tuple = [10, 'hello']; // Error
tuple = ['hello', 10, 'world', 100]; // Error
tuple.push(true); // Error
// enum : 열거형은 숫자값 집합에 이름을 지정한 것이다.
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
console.log(c1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
console.log(c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var c3 = Color3.Blue;
console.log(c3); // 4
/*
any: 타입 추론(type inference)할 수 없거나 타입 체크가 필요 없는 변수에 사용한다.
var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다.
*/
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
// void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function warnUser() {
    console.log("This is my warning message");
}
// never : 결코 발생하지 않는 값
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
