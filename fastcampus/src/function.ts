function add(x: number, y: number) {
   return x + y;
}

// error
// add(1, "2");

const result = add(1,2);

function buildUserInfo(name = "-", email = "-") {
   return { name, email };
}

const user = buildUserInfo();

const add2 = (a: number, b: number): number => a + b;

interface Storage {

}

interface ColdStorage {

}

function store(type: "통조림"): Sorage;
