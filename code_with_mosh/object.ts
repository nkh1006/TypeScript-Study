class Point {
   constructor(private x?: number, private y?: number) {
   }

   draw() {
      console.log('X: ' + this.x + ', Y: ' + this.y);
   }
}

let point2 = new Point(1, 2);
point.draw();