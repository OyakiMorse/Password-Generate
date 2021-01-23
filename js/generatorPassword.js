let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let lovercaseLetters = [
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
]

let uppercaseLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

let specSymbols = ['!', '@', '#', '$', '%', '&']

document.getElementById('scroll-password').oninput = function () {
  document.getElementById('password-length').innerHTML = this.value
}

generatePassword()

document.getElementById('generateBtn').onclick = generatePassword
function generatePassword() {
  let resultPass = []

  if (document.getElementById('numbers').checked) {
    resultPass = resultPass.concat(numbers)
  }
  if (document.getElementById('lowercase-letters').checked) {
    resultPass = resultPass.concat(lovercaseLetters)
  }
  if (document.getElementById('uppercase-letters').checked) {
    resultPass = resultPass.concat(uppercaseLetters)
  }
  if (document.getElementById('special-symbols').checked) {
    resultPass = resultPass.concat(specSymbols)
  }

  resultPass.sort(compareRandom)

  document.getElementById('outPassword').innerHTML = ''
  for (let k = 0; k < 3; k++) {
    let outPass = ''
    let passLength = document.getElementById('scroll-password').value
    for (let i = 0; i < passLength; i++) {
      outPass += resultPass[randomInt(0, resultPass.length - 1)]
    }
    document.getElementById('outPassword').innerHTML +=
      '<p class="resultPassword">' + outPass + '</p>'
  }
}

function compareRandom(a, b) {
  return Math.random() - 0.34567
}

function randomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand)
  return rand
}
