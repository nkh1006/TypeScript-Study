let userName: string ="Jack";
let hasLoggedIn: boolean = true;

userName += " Herrington";

console.log(hasLoggedIn);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3, 4, 5];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Jack",
  last: "Herrington"
}

const ids: Record<number, string> = {
  10: "a",
  20: "b"
}

if (ids[30] === "D") {

}

for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const out: string[] = [4, 5, 6].map((v) => `${v * 10}`);