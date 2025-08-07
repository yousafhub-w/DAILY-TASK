let items = [2, 5, 7, 8, 9, 0, 3];
let largest = items[0];

for (let i = 1; i < items.length; i++) {
  if (items[i] > largest) {
    largest = items[i]; 
  }
}

console.log("Largest number is:", largest);
