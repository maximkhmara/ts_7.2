function fetchData(): unknown {
  return { name: "Max", age: 30 };
}

type Person = { name: string; age: number };

const data = fetchData();
const person: Person = data as Person;

function printPersonInfo(person: { name: string; age: number }): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

printPersonInfo(person);