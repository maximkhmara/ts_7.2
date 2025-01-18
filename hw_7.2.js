"use strict";
function fetchData() {
    return { name: "Max", age: 30 };
}
const data = fetchData();
const person = data;
function printPersonInfo(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}
printPersonInfo(person);
