// array type annotation
let nameList: string[];

// error
nameList = [1, 2, 3];
nameList.push(4);

nameList = ["1", "2", "3"];
nameList.push("4");

// array type annotation2
let tuple: [string, number];

// error
tuple = [1, "2"];

tuple = ["1", 2];

// object type annotation
let userList: { name: string, score: number };

// error
userList = {
   age: '123'
}

userList = {
   name: 'sample',
   score: 100
}

let nameList2: string[];