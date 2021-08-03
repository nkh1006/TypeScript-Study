/*
  const increment = (counterVal: number): number => {
    return counterVal + 1;
  }

  const counter = increment(10);

  const firstName: string = "Pedro";
  const ageOfMyParents: number = 24;

  const increment = (counterVal: number) => {
    return counterVal + 1;
  }

  const counter: number = increment(10);  

  let programmingLanguages: string[] = ["java", "typescript", "python"];
  programmingLanguages.push('golang');

  console.log(programmingLanguages);

*/

interface IProgrammingLanguage {
  name: string;
  awesome: boolean;
  age?: number;
}

const typeScript: IProgrammingLanguage = {
  name: "typescript",
  awesome: true
}

interface IUser {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
}

const fetchData = (apiUrl: string): Promise<IUser> => {
  return fetch(apiUrl)
  .then((res) => res.json());
}
