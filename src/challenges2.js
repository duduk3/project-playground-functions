/* eslint-disable spaced-comment */
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
  let originalList = listOfNumbers.join('');
  let orderList = listOfNumbers.sort();
  let iqual = orderList[0];
  let count = 1;
  let isValid = true;

  if (orderList.length != 11 ) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 1; i < orderList.length; i += 1) {
    if (orderList[i] === iqual) {
      count += 1;
    } else {
      count = 1;
    }
    if ( count >= 3) {
      isValid = false;
    }

    iqual = orderList[i];
  }
  if( !isValid ) {
    return "n??o ?? poss??vel gerar um n??mero de telefone com esses valores";
  }
  for (let i = 0; i < listOfNumbers.length; i += 1 ) {
    if( listOfNumbers[i] > 9 || listOfNumbers[i] < 0 ){
      return "n??o ?? poss??vel gerar um n??mero de telefone com esses valores";
    }
  }
  //*Esse c??digo de formata????o usando o m??todo "replace()" foi tirado de : https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript */
  return originalList.replace(/(\d{2})(\d{5})(\d{3})/, '($1) $2-$3');
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
    result = count + ' copo de ??gua';
  }
  else {
    result = count + ' copos de ??gua';
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
