/*
  Typescript는 Javscript의 상위호환(superset)언어이다. 따라서 js에서 쓸 수 있는 모든 문법을 ts에서도 그대로 사용 할 수 있다.
  Typescript는 기존의 Javascript에서 지원하지 않았던 정적타입 (static type)언어를 지원해서 컴파일 단계전에 얘기치 못한 에러들을 제거할수있다.
*/

let userName: string = "Jack";
let hasLoggedIn: boolean = true;
let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split("");
const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string,
  last: string,
  cool: boolean
}

const myPerson: Person = {
  first: "Jack",
  last: "Herrington",
  cool: true,
}

const ids: Record<number, string> = {
  10: "a",
  20: "b"
}
ids[30] = "c";

if (ids[30] === "D") {

}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));