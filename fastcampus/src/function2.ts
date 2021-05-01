interface Storage {
   a: string;
}

interface ColdStorage {
   b: string;
}

function store(type: "통조림"): Storage;
function store(type: "아이스크림"): ColdStorage;

function store(type: "통조림" | "아이스크림") {
   if(type === "통조림") {
      return { a: "통조림" }
   } else if (type === "아이스크림") {
      return { b: "아이스크림" }
   } else {
      throw new Error("unsupported type");
   }
}

const s = store("아이스크림");
s.b;