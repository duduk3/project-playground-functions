//* Desafio 1
function compareTrue(arg1, arg2) {
  if(arg1 === true && arg2 === true) {
    return true;
  }
  return false;
}

//* Desafio 2 
function calcArea(base, height) {
  return base * height / 2
}


//* Desafio 3                               
function splitSentence(frase) {
  let separatedFrase = [];
  return separatedFrase = frase.split(' ');
}


//* Desafio 4
function concatName(args) {
  return  args[args.length -1] + ", " + args[0];
}


//* Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
