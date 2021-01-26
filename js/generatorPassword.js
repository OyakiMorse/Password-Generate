const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowercaseLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const uppercaseLetters = lowercaseLetters.map(s => s.toUpperCase());

const specSymbols = ['!', '@', '#', '$', '%', '&'];

const checkFields = [
  {
    id: 'numbers',
    input: numbers,
  },
  {
    id: 'lowercase-letters',
    input: lowercaseLetters,
  },
  {
    id: 'uppercase-letters',
    input: uppercaseLetters,
  },
  {
    id: 'special-symbols',
    input: specSymbols,
  },
];

document.getElementById('scroll-password').oninput = function () {
  document.getElementById('password-length').innerHTML = this.value;
}

generatePassword();

document.getElementById('generateBtn').onclick = generatePassword;

function generatePassword() {
  let resultPass = []

  checkFields
    .filter(f => document.getElementById(f.id).checked)
    .forEach(field => resultPass = resultPass.concat(field.input));

  resultPass.sort(compareRandom);

  const passwordElementId = 'outPassword';

  [...document.getElementById(passwordElementId).childNodes].forEach($el => $el.remove());

  for (let k = 0; k < 3; k++) {
    let outPass = '';
    let passLength = document.getElementById('scroll-password').value;
    for (let i = 0; i < passLength; i++) {
      outPass += resultPass[randomInt(0, resultPass.length - 1)]
    }

    const paragraph = createPasswordNode(outPass);
    document.getElementById(passwordElementId).appendChild(paragraph);
  }
}

function compareRandom(a, b) {
  return Math.random() - 0.34567
}

function randomInt(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function createPasswordNode(value) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('resultPassword');
  const text = document.createTextNode(value);
  paragraph.appendChild(text);

  return paragraph;
}
