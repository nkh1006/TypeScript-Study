// typescript에서는 function에서 함수의 data type을 지정 해 줄 수있다.

function add(x: number, y: number) {
   return x + y;
}

function add2(x: number, y: number): number {
   return x + y;
}

// error
// add(1, "2");
const result = add2(1, 2);

// parameter 뒤에 ?를 붙이게 되면 선택값을 변경된다.
function buildUserInfo(name?: string, email?: string) {
   return { name, email };
}

// parameter 뒤에 default값도 지정 해 줄 수있다.
// 이 경우 '?'나 data type이 필요하지 않다.
function buildUserInfo2(name = 'name', email = 'email') {
   return { name, email };
}

const user = buildUserInfo();

// arrow function
const add3 = (a: number, b: number): number => a + b;