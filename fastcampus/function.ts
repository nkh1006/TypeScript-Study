function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 2);

function buildUserInfo(name: string = "-", email: string = "-") {
  return { name, email };
}

const user = buildUserInfo();

const add2 = (a: number, b: number): number => a + b;

interface Storage {

}

interface ColdStorage {

}

function store(type: "통조림"): Storage
function store(type: "아이스크림"): ColdStorage