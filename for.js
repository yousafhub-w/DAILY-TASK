for (let i = 0; i < 5; i++) {
  for (let j = i; j < 5; j++) {
    if (i === j) continue;
    console.log(`i = ${i}, j = ${j}`);
  }
}