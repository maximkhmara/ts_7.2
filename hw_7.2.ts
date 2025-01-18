function fetchData(): unknown {
  return { name: "Max", age: 30 };
}

type Person = { name: string; age: number };

const data = fetchData();
const person: Person = data as Person;

function printPersonInfo(person: any): asserts person is Person {
  if (typeof person.name !== "string" || typeof person.age !== "number") {
    throw new Error("error type");
  }
}

printPersonInfo(person);
console.log(`Name: ${person.name}, Age: ${person.age}`);