/* eslint-disable radix */
/* eslint-disable operator-assignment */
/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
/* eslint-disable no-empty */
/* eslint-disable max-lines-per-function */
/* eslint-disable keyword-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable space-before-blocks */
/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-else-return */
/* eslint-disable no-unreachable */
/* eslint-disable brace-style */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable no-return-assign */
/* eslint-disable space-in-parens */
/* eslint-disable comma-spacing */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable sonarjs/prefer-object-literal */

//= =========================================
//* Desafio 10
//= =========================================
function techList(tech, name) {
  let technology = {};
  let newList = [];
  technology.tech = tech;
  technology.name = name;

  if ( technology.tech[0] === undefined ) {
    return 'Vazio!';
  } 
  else {
    technology.tech = technology.tech.sort();
    for( let i = 0; i < technology.tech.length; i += 1 ){
        newList.push({ 
          tech: technology.tech[i],
          name: technology.name
        });
    }
    return newList;
  }
}

//= =========================================
//* Desafio 11
//= =========================================
function generatePhoneNumber(listOfNumbers) {
  let telephoneNumber = '(';
  if (listOfNumbers.length != 11 ) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < listOfNumbers.length; i += 1 ) {
    if( listOfNumbers[i] > 9 || listOfNumbers[i] < 0 ){
      return "não é possível gerar um número de telefone com esses valores";
    }
    if ( i < 2) {
      telephoneNumber = telephoneNumber + listOfNumbers[i];
    }
    if (i === 2) {
      telephoneNumber = telephoneNumber + ') ' + listOfNumbers[i];
    }
    if (i > 2 && i < 7) {
      telephoneNumber = telephoneNumber + listOfNumbers[i];
    }
    if (i === 7) {
      telephoneNumber = telephoneNumber + '-' + listOfNumbers[i];
    }
    if (i > 7) {
      telephoneNumber = telephoneNumber + listOfNumbers[i];
    }
  }
  return telephoneNumber;
}

//= =========================================
//* Desafio 12
//= =========================================
function triangleCheck(a, b, c) {
  let isValid = false;
  if ( a + b > c && a + c > b && b + c > a ) {
    isValid = true;
  }
  else {
    isValid = false;
  }
  if ( Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(b - c) < a ) {
    isValid = true;
  }else {
    isValid = false;
  }
  return isValid;
}

//= =========================================
//* Desafio 13
//= =========================================
function hydrate(requests) {
  let regExpression = /\d+/g;
  let getAmount = requests.match(regExpression);
  let count = 0;
  let result = '';
  for( let i = 0; i < getAmount.length; i += 1 ) {
    count += parseInt(getAmount[i]);
  }
  if (count <= 1 ) {
    result = count + ' copo de água';
  }
  else {
    result = count + ' copos de água';
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
