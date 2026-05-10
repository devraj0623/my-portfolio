// Ask name
let userName = prompt("What is your name?");

// Get current hour
let currentHour = new Date().getHours();

// Greeting
if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}

// Ask birth year
let birthYear = Number(prompt("What year were you born?"));

// Calculate age
let age = 2026 - birthYear;

// Calculate days lived
let daysLived = age * 365;

console.log("You are " + age + " years old.");
console.log("You have lived for approximately " + daysLived + " days!");

// Adult or minor
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}