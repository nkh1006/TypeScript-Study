let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [
  number,
  string,
  boolean  
] = [
  1,
  'Bard',
  false
];

// Tuple Array
let employee:[
  number,
  string
][] = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill']
]

// Union
let pid: string | number = '22'

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// Type
type User = {
  id: number,
  name: string
}

// Objects
const user: User = {
  id: 1,
  name: 'John'
}

console.log(Direction1.Up);

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  id: number
  name: string
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

type Point = number | string

interface PointInterface {
  id: number
  name: string
}

const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(10, "bard");
const mike = new Person(10, "mike");