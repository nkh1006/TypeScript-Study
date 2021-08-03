/*
  let programmingLanguages = ["java", "typescript", "python"];
  programmingLanguages.push('golang');

  console.log(programmingLanguages);
*/

const fetchData = (apiUrl) => {
  return fetch(apiUrl).then((res) => res.json());
}

const data = fetchData("myAwesomeApi.com/data/subscribe");

console.log(data.name);
console.log(data.email);
console.log(data.age);
console.log(data.usMarried);