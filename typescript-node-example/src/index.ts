import express from 'express';

const app = express();

const add = (a: number, b: number) => {
  return a + b;
}

app.get('/', (req: any, res) => {
  req.name = 'bob';
});

app.listen(3001, () => {
  console.log("Started");
})

