//============================================
//* Desafio 1
//============================================
function compareTrue(arg1, arg2) {
  if(arg1 === true && arg2 === true) {
    return true;
  }
  return false;
}

//============================================
//* Desafio 2 
//============================================
function calcArea(base, height) {
  return base * height / 2
}


//============================================
//* Desafio 3                               
//============================================
function splitSentence(frase) {
  let separatedFrase = [];
  return separatedFrase = frase.split(' ');
}


//============================================
//* Desafio 4
//============================================
function concatName(args) {
  return  args[args.length -1] + ", " + args[0];
}


//============================================
//* Desafio 5
//============================================
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

//============================================
//* Desafio 6
//============================================
function highestCount(values) {
  let num = 0;
  let count = 0;
  for (let i = 0; i < values.length; i+= 1) {
    if(values[i] >= num) {
      if (values[i] === num){
        count += 1;
      }else {
        count = 1;
      }
      num = values[i];
    }
  }
  return count; 
}

//============================================
//* Desafio 7
//============================================
function catAndMouse(mouse, cat1, cat2) {
  let cat1Win = mouse - cat1;
  let cat2Win = mouse - cat2;
  let trombada = 'os gatos trombam e o rato foge.'
  if ( cat1Win < 0) {
    cat1Win = cat1Win * -1;
  }
  if ( cat2Win < 0) {
    cat2Win = cat2Win * -1;
  }

  if (cat1Win < cat2Win) {
    trombada = 'cat1';
  }
  else if(cat1Win > cat2Win) {
    trombada = 'cat2';
  }
  // else {
  //   trombada
  // }
  return trombada;
}

console.log(catAndMouse(10, 8, 12));


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
