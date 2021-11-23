
function first(o: string) {
  return o[0];
}

function nth(o: Array<any>, n: number) {
  return o[n];
}

function last(o: Array<any>) {
  return o[o.length - 1];
}

const numbers:any[] = [
  'one',
  'double',
  3,
  () => console.log('라스트 넘버')
];

const messages:string = `사건의 핵심 '시그니처'를 파악하라`;

console.log(first(messages));
console.log(nth(numbers, 2));
console.log(last(numbers)());