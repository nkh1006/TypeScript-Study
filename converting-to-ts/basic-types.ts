export const isACat = (animal: string): boolean => animal === "cat";

export function addNumbers(a: number, b: number): number {
  return a + b;
}

const introduction = (name: string | null) => `Hello ${name}`;
export const introducePerson = (name: string | null) => console.log(introduction(name));
export const dumpObject = (type: any, obj: object) => `${type}:${JSON.stringify(obj)}`;
export const dumpStringOrNumber = (info: string | number) => `value ${info}`;