'use strict';

alert('Welcome to My Wesite');
// console.log('Welcome to My Wesite');

let whatName = prompt('Let us know you name');
alert('welcome Greeting Mr./Ms. ' + whatName);
// console.log('welcome Greeting Mr./Ms. ' + whatName);


function answer1() {
  let spOrt = prompt('Did you like sport?','yes or no').toLowerCase();
  if (spOrt=== 'yes'||spOrt==='y') {
    alert('Yes, so Thats Great keep going');
    // console.log('Yes, so Thats Great keep going');
  } else if (spOrt=== 'no'||spOrt==='n') {
    alert('No, so You have to choose at lease one kind of sport to practice every day');
    // console.log('No, so You have to choose at lease one kind of sport to practice every day');
  }
  else {
    alert('please enter yes or no');
  }
}
answer1();

function answer2() {
  let manSaf = prompt('Did you like Mansaf?').toLowerCase();
  if (manSaf === 'yes'||manSaf==='y') {
    alert('Yes, so You are original Jordanian');
    // console.log('Yes, so You are original Jordanian');
  }else if (manSaf==='no'||manSaf==='n') {
    alert('No, so you have to try it is so delicios');
    // console.log('No, so you have to try it is so delicios');
  }
  else{
    alert('please enter yes or no');
  }
}
answer2();

function answer3() {
  let coDing = prompt('Did you like coding?').toLowerCase();
  if (coDing === 'yes'||coDing==='y') {
    alert('Yes, so Great and i do');
    // console.log('Yes, so Great and i do');
  } else if (coDing==='no',coDing==='n') {
    alert('No, so You have to to Ask about ASAC collage they teach coding very well');
    // console.log('No, so You have to to Ask about ASAC collage they teach coding very well');
  }
  else{
    alert('please enter yes or no');
  }
}
answer3();

function answer4() {
  let reaDing = prompt('Did you like reading books?').toLowerCase();
  if (reaDing === 'yes'||reaDing==='y') {
    alert('Yes, so Thats Great keep going');
    // console.log('Yes, so Thats Great keep going');
  } else if(reaDing==='no',reaDing==='n') {
    alert('No, so You have to read because readers are a leader');
    // console.log('No, so You have to read because readers are a leader');
  }
  else{
    alert('please enter yes or no');
  }
}
answer4();

function answer5() {
  let coFfee = prompt('Did you like drink coffee?').toLowerCase();
  if (coFfee === 'yes'||coFfee==='y') {
    alert('Yes, so I think i is not good but i do to wakeup');
    // console.log('Yes, so I think i is not good but i do to wakeup');
  } else if (coFfee=== 'no'||coFfee==='n') {
    alert('No, so Good, i feeling jealous from you');
    // console.log('No, so Good, i feeling jealous from you');
  }
  else{
    alert('please enter yes or no');
  }
}
answer5();



