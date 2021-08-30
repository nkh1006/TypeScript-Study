export const printToFile = (text: string, callback: () => void): void => {
  console.log(text);
  callback();
}

type MutateFunction = (v: number) => number;

export const arrayMutate = (
  numbers: number[], 
  mutate: MutateFunction
): number[] => {
  return numbers.map(mutate);
};

const myNewMutateFunc: MutateFunction = (v: number) => v * 100;

console.log(arrayMutate([1,2,3], (v) => v * 10));

type AdderFunction = (v: number) => number;

export const createAdder = (num: number): AdderFunction => {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));