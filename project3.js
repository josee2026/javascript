let name = "josee gisubizo";
let age = 20;
let isHelpful = true;
let favoriteLanguage = null;
let hobbies = ["coding", "learning"];

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isHelpful, typeof isHelpful);
console.log(favoriteLanguage, typeof favoriteLanguage);
console.log(hobbies, typeof hobbies);

let text = "frontend-developer-kigali";

let result = text
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result);
let num = Math.floor(Math.random() * 100) + 1;

console.log("Number:", num);
console.log("Is even:", num % 2 === 0);
console.log("Square root:", Math.sqrt(num).toFixed(2));console.log("10" + 2 * 3);
console.log(("10" + 2) * 3);
console.log(0 || "default");
console.log(0 ?? "default");
console.log(typeof NaN);
console.log("Kigali".slice(-3));
Const price = "2500";
let qty = 3
let total = price + qty;
console.log(`Total: ${Total} RWF`);
const discount = 0.1;
discount = 0.2;
