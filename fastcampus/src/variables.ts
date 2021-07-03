// type annotation
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;


// test 2 (string)
stringValue = `test ${1 + 1}`;

booleanValue = true;

// undefined와 null은 어떤 타입에도 넣을 수 있다. (하위 타입)
numValue = undefined;

// any타입에는 어떤 타입도 넣을 수 있다. (상위 타입)
anyValue = 123;
anyValue = "123";

// object
objValue = { name: "sample" };
objValue = { };
objValue = new String("hello");
