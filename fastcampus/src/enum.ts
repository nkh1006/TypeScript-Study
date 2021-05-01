// enum은 상수들의 집합이다.
// 타 언어들과 마찬가지로 순서대로 숫자가 지정된다. 0 시작

enum StarbuksGrade {
   WELCOME, // 0
   GREEN, // 1
   GOLD // 2
}

function getDiscound(v: StarbuksGrade): number {
   switch (v) {
      case StarbuksGrade.WELCOME:
         return 0;
      case StarbuksGrade.GREEN:
         return 5;
      case StarbuksGrade.GOLD:
         return 10;
   }
}

// 5
console.log(getDiscound(StarbuksGrade.GREEN));

// 1
console.log(StarbuksGrade.GREEN);