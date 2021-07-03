// interface를 통해서 하나의 data type을 정의한다.
// interface를 통해서 매서드를 정의하고 반환값을 정해준다.

// interface 선언
interface TV {

   // 매서드 및 return type 선언
   turnOn(): boolean;
   turnOff(): boolean;

}

// interface를 가지고 객체를 생성
const myTv: TV = {

   // interface내에 매서드와 return type를 선언 해준다.
   turnOn() {
      return true;
   },
   turnOff() {
      return false;
   }

}

function tryTurnOn(tv: TV) {
   tv.turnOn();
}

tryTurnOn(myTv);


// data만 가지고 있는 interface
interface Cell {

   row: number;
   col: number;
   piece?: Piece;

}

interface Piece {

   // interface를 가지고 type를 지정해준다.
   move(from: Cell, to: Cell): boolean;

}

function createBoard() {

   // Cell interface를 가지고 배열의 값을 지정해준다.
   const cells: Cell[] = [];
   for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 3; col++) {
         cells.push({ row, col });
      }
   }
   return cells;

}

const board = createBoard();
board[0].piece = {
   move(from: Cell, to: Cell) {
      return true;
   }
}