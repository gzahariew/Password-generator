const randomPass = (
  passwordLenght,
  includeUpperCase,
  includeLowerCase,
  incluNumbers,
  includeSymbols
) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numbers = "0123456789".split("");
  const specialSymbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~".split("");

  const theMighty = [];

  if (includeLowerCase) {
    theMighty.push(letters);
  }
  if (includeUpperCase) {
    theMighty.push(upperCase);
  }
  if (incluNumbers) {
    theMighty.push(numbers);
  }
  if (includeSymbols) {
    theMighty.push(specialSymbols);
  }
  const bestPass = [];

  for (let i = 0; i < passwordLenght; i++) {
    let randomRow = theMighty[Math.floor(Math.random() * theMighty.length)];
    bestPass.push(randomRow[Math.floor(Math.random() * randomRow.length)]);
  }

  return (bestPass.join(""));
};

const passwordLenght = 10;
const includeUpperCase = false;
const includeLowerCase = true;
const incluNumbers = true;
const includeSymbols = true;

const password = randomPass(
  passwordLenght,
  includeUpperCase,
  includeLowerCase,
  incluNumbers,
  includeSymbols
);

console.log(`Gennerated password: ${password}`);
