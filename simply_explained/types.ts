let isThisVideoDone: boolean = false;
let myNumber: number = 4;
let myName: string = "Xavier";
let greeting: string = "Hello, " + myName;
let greeting2: string = `Hello, ${myName}`;
let count: number[] = [1, 2, 3, 4];
let count2: Array<number> = [1, 2, 3, 4];
let anything: any = 4;
anything = false;
anything = "Some text";

function greeter(name: string): void {
  console.log(`Hello, ${name}`);
};

enum Direction {
  Up,
  Down,
  Left,
  Right
};

let joystickStatus = 1;

if(joystickStatus === Direction.Left) {
  
}