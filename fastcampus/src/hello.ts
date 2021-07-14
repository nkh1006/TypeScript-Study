import add from './util';

var hello = "hello";
let hello2 = "hello2";

// es6에 추가된 promise는 es5버전으로 컴파일 했을경우 찾을수 없음
let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1 sec");
    }, 1000);
});
timeoutPromise.then(console.log);

const returnResult = add(1,2);
console.log(returnResult);