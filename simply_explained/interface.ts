interface RectangleOptions {
  width: number;
  length: number;
  height: number;
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
  let height = options.height;
}

drawRectangle({
  width: 100,
  length: 50,
  height: 50
});