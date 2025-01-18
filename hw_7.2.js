"use strict";
function fetchData() {
    return { name: "Max", age: 30 };
}
const data = fetchData();
const person = data;
function printPersonInfo(person) {
    if (typeof person.name !== "string" || typeof person.age !== "number") {
        throw new Error("error type");
    }
}
printPersonInfo(person);
console.log(`Name: ${person.name}, Age: ${person.age}`);
