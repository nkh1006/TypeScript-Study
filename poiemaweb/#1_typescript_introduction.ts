// 정적 타입

function sum(a, b) {
  return a + b;
}

sum('x', 'y'); // 'xy'

// sum2의 파라미터 데이터타입을 number로 제한 한다.
function sum2(a: number, b: number) {
  return a + b;
}

sum('x', 'y'); // 'xy'
// sum2('x', 'y'); error

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return "Hello, " + this.name;
  }
}

const person = new Person('Lee');

console.log(person.sayHello());