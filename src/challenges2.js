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
    return console.log('Vazio!');
  } 
  else {
    technology.lenth = technology.tech.sort();
    for( let i = 0; i < 5; i += 1 ){
//      for ( let index in technology.tech) {
        newList.push({ 
          tech: technology.tech[i],
          name: technology.name
        });
//      } 
    }
    return newList;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line no-multiple-empty-lines

//= =========================================
//* Desafio 11
//= =========================================
function generatePhoneNumber() {
  // seu código aqui
}

//= =========================================
//* Desafio 12
//= =========================================
function triangleCheck() {
  // seu código aqui
}

//= =========================================
//* Desafio 13
//= =========================================
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
