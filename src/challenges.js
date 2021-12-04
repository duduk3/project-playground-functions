/* eslint-disable max-lines-per-function */
/* eslint-disable semi */
/* eslint-disable brace-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable complexity */
/* eslint-disable space-before-blocks */
//= ===========================================
//* Desafio 1
//= ===========================================
function compareTrue(arg1, arg2) {
  if (arg1 === true && arg2 === true) {
    return true;
  }
  return false;
}

//= ===========================================
//* Desafio 2
//= ===========================================
function calcArea(base, height) {
  return base * height / 2;
}

//= ===========================================
//* Desafio 3
//= ===========================================
function splitSentence(frase) {
  let separatedFrase = [];
  return separatedFrase = frase.split(' ');
}

//= ===========================================
//* Desafio 4
//= ===========================================
function concatName(args) {
  return `${args[args.length - 1]}, ${args[0]}`;
}

//= ===========================================
//* Desafio 5
//= ===========================================
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

//= ===========================================
//* Desafio 6
//= ===========================================
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(values) {
  let max = values[0];
  let count = 1;
  for (let i = 1; i < values.length; i += 1) {
    if (values[i] >= max) {
      if (values[i] === max) {
        count += 1;
      }
      else {
        count = 1;
      }
      max = values[i];
    }
  }
  return count;
}

//= ===========================================
//* Desafio 7
//= ===========================================
// eslint-disable-next-line max-lines-per-function
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  let final = 'os gatos trombam e o rato foge';

  if (distanciaCat1 < distanciaCat2) {
    final = 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    final = 'cat2';
  }
  return final;
}

//= ===========================================
//* Desafio 8
//= ===========================================
// eslint-disable-next-line complexity
// eslint-disable-next-line sonarjs/cognitive-complexity
function fizzBuzz(entrys) {
  let waiting = [];
  for (let i = 0; i < entrys.length; i += 1){
    if (entrys[i] % 3 === 0 && entrys[i] % 5 === 0) {
      waiting.push('fizzBuzz');
    } else if (entrys[i] % 3 === 0) {
      waiting.push('fizz');
    } else if (entrys[i] % 5 === 0) {
      waiting.push('buzz');
    } else {
      waiting.push('bug!');
    }
  }
  return waiting;
}

//= ===========================================
//* Desafio 9
//= ===========================================
function encode(string) {
  let newString = string;

  for (let i = 0; i < string.length; i += 1) {
    newString = newString.replace('a', '1');
    newString = newString.replace('e', '2');
    newString = newString.replace('i', '3');
    newString = newString.replace('o', '4');
    newString = newString.replace('u', '5');
  }
  return newString;
}

function decode(string) {
  let newString = string;

  for (let i = 0; i < string.length; i += 1) {
    newString = newString.replace('1', 'a');
    newString = newString.replace('2', 'e');
    newString = newString.replace('3', 'i');
    newString = newString.replace('4', 'o');
    newString = newString.replace('5', 'u');
  }
  return newString;
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
