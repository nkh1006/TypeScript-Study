var hello = "hello";
var hello2 = "hello2";
// es6에 추가된 promise는 es5버전으로 컴파일 했을경우 찾을수 없음
var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("1 sec");
    }, 1000);
});
timeoutPromise.then(console.log);


function doSomethig