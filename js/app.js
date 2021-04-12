'use strict';

alert('Welcome to My Wesite');

let whatName = prompt('Let us know you name');
alert('welcome Greeting Mr./Ms. ' + whatName);


function answer1() {
  let spOrt = prompt('Did you like sport?').toLowerCase();
  if (spOrt=== 'yes') {
    alert('Thats Great keep going');
  } else {
    alert('You have to choose at lease one kind of sport to practice every day');
  }
  //   console.log(spOrt);

}
answer1();

function answer2() {
  let manSaf = prompt('Did you like Mansaf?').toLowerCase();
  if (manSaf === 'yes') {
    alert('You are original Jordanian');
  } else {
    alert('you have to try it is so delicios');
  }
  //   console.log(manSaf);
}
answer2();

function answer3() {
  let coDing = prompt('Did you like coding?').toLowerCase();
  if (coDing === 'yes') {
    alert('Great and i do');
  } else {
    alert('You have to to Ask about ASAC collage they teach coding very well');
  }
  //   console.log(coDing);
}
answer3();

function answer4() {
  let reaDing = prompt('Did you like reading books?').toLowerCase();
  if (reaDing === 'yes') {
    alert('Thats Great keep going');
  } else {
    alert('You have to read because readers are a leader');
  }
  //   console.log(reaDing);
}
answer4();

function answer5() {
  let coFfee = prompt('Did you like drink coffee?').toLowerCase();
  if (coFfee === 'yes') {
    alert('I think i is not good but i do to wakeup');
  } else {
    alert('Good, i feeling jealous from you');
  }
  //   console.log(coFfee);
}
answer5();



