export {}
let message = 'Hello World';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';

// error 
// name = true;

let sentence: string = `My name is ${name}`;
console.log(sentence);

const n: null = null;
const u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22];

enum Color = {Red, Green, Blue};

let c: Color = Color.Green;

// 2
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 15;