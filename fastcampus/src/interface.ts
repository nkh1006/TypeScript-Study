// interface를 통해서 하나의 data type을 정의한다.
// interface를 통해서 매서드를 정의하고 반환값을 정해준다.

interface TV {
   turnOn(): boolean;
   turnOff(): boolean;

}

const myTv: TV = {
   turnOn() {
      return true;
   },
   turnOff() {
      return false;
   }
}

interface P