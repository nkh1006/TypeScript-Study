/*
  TypeScript 또한 정적 타입 언어이기 때문에 함수 또는 클래스를 정의하는 시점에 매개변수나 반환값의 타입을 선언하여야 한다. 
  그런데 함수 또는 클래스를 정의하는 시점에 매개변수나 반환값의 타입을 선언하기 어려운 경우가 있다.
  아래의 예제를 살펴보자. 
*/

class Queue {
  // any type array
  protected data: any[] = [];

  push(item: any) {
    this.data.push(item);
  }

  pop() {
    return this.data.shift();
  }
}

const queue = new Queue();

queue.push(0);
queue.push('1'); // error

console.log(queue.pop().toFixed()); // 0

// .toFixed()는 number type 전용 함수이다. error
console.log(queue.pop().toFixed()); // Runtime error

// Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스를 정의
class NumberQueue extends Queue {
  // number 타입의 요소만을 push한다.
  push(item: number) {
    super.push(item);
  }

  pop(): number {
    return super.pop();
  }
}

const queue = new NumberQueue();

queue.push(0);
// 의도하지 않은 실수를 사전 검출 가능
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// queue.push('1');
queue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // 1

