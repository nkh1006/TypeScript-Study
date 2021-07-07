// arrays
// 배열의 초기값이 한가지 데이터타입으로 구성 되어있으면 이후 배열에 기존에 들어가 있던 타입과 다른 타입의 데이터를 넣을수 없다.

// string array
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// error 숫자 타입이기 떄문에
names.push(1);

// number array
let numbers = [1, 2, 3, 4, 5, 6];
numbers.push(7);
// error 문자열 타입이기 떄문에
numbers.push('toad');

// 따라서 여러가지 타입을 동시에 넣을 수 있는 array를 선언하려면 초기화 할때 여러가지 타입의 값들을 넣어주면 된다.
let mixed = [1, 'mario', 3, true, 'yoshi', 6];
// any type array
mixed.push(1);
mixed.push(false);
mixed.push('toad');

// objects
//