let highOfTriangle = 32;

let lastLine = "";
let firstLine = "";
// first line

console.log(
  spaceString(highOfTriangle - 1) + "#" + spaceString(highOfTriangle - 1)
);

// middle lines

for (let lineNumber = 1; lineNumber <= highOfTriangle - 2; lineNumber++) {
  const spaceAside = highOfTriangle - 1 - lineNumber;
  const spaceInside = lineNumber * 2 - 1;

  console.log(
    spaceString(spaceAside) +
      "#" +
      spaceString(spaceInside) +
      "#" +
      spaceString(spaceAside)
  );
}

// last line

console.log(spaceString(highOfTriangle * 2 - 1, "#"));

function spaceString(numberOfSpace, char = "-") {
  let line = "";
  for (let s = 1; s <= numberOfSpace; s++) {
    line = line + char;
  }
  return line;
}
