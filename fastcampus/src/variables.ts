var score1 = 0;
let score2 = 200;
const defaultStore = 0;

function outer() {

  if (true) {
    let score = 0;
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);  
    }, 100);
  }

  console.log(score1);
}

outer();