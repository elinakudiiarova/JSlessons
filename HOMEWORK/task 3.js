const deskSize = 4;
let oddLine = "";
let evenLine = "";
for (let d = 1; d <= deskSize; d++) {
  if (d % 2 === 0) {
    oddLine = oddLine + "-";
    evenLine = evenLine + "#";
  } else {
    evenLine = evenLine + "-";
    oddLine = oddLine + "#";
  }
}
for (let s = 1; s <= deskSize; s++) {
  if (s % 2 === 0) {
    console.log(oddLine);
  } else {
    console.log(evenLine);
  }
}
