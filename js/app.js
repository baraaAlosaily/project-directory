/* eslint-disable no-constant-condition */
'use strict';

let points=0;
alert('Welcome to My Website');
// console.log('Welcome to My Website');

let whatName = prompt('Let us know your name');
alert('welcome Greeting Mr./Ms. ' + whatName);
// console.log('welcome Greeting Mr./Ms. ' + whatName);


function answer1() {
  let sport = prompt('Did you like sport?','Please enter YES or NO').toLowerCase();
  if (sport=== 'yes'||sport==='y') {
    alert('Yes, Thats Great keep going');
    // console.log('Ye Thats Great keep going');
  } else if (sport=== 'no'||sport==='n') {
    alert('No, You have to choose at lease one kind of sport to practice every day');
    // console.log('No, so You have to choose at lease one kind of sport to practice every day');
  }
  else {
    alert('please enter yes or no');
  }
}
answer1();

function answer2() {
  let manSaf = prompt('Did you like Mansaf?','yes or no. y or no').toLowerCase();
  if (manSaf === 'yes'||manSaf==='y') {
    alert('Yes, so You are original Jordanian');
    // console.log('Yes, so You are original Jordanian');
  }else if (manSaf==='no'||manSaf==='n') {
    alert('No, so you have to try it is so delicios','yes or no. y or no');
    // console.log('No, so you have to try it is so delicios');
  }
  else{
    alert('please enter yes or no');
  }
}
answer2();

function answer3() {
  let coDing = prompt('Did you like coding?','yes or no. y or no').toLowerCase();
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
  let reaDing = prompt('Did you like reading books?','yes or no. y or no').toLowerCase();
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
  let coFfee = prompt('Did you like drink coffee?','yes or no. y or no').toLowerCase();
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





let question= ['Ok' + whatName +'lets play guess game guess my age', 'Ok'+whatName+'let us play another game guess the main country in Jordan '];
guessNumber();
guessCounrty();
finalResult();

function guessNumber(){
  let myNum=24;
  let guesscorrect = false;
  let guessNum=prompt(question[0]);
  for(let i=3;i>=0;i--){
    if(guessNum<18){
      guessNum=prompt('Your guess lower than my age'+' you still have '+i+ ' attempt');
    }
    else if (guessNum>30){
      guessNum=prompt('Your guess higher than my age'+' you still have '+i+ ' attempt');
    }

    else if (guessNum>=25&&guessNum<=30 || guessNum<=23&&guessNum>=20){
      guessNum=prompt('you are two close from the correct answer you still have '+ i +'attempt');
    }
    else if (guessNum===myNum){
      alert('correct my age is '+ myNum + ' congratilation'+ whatName);
      guesscorrect= true;
      points+=5;
      break;
    }
  }
  if (guesscorrect===false){
    alert('You exceed the number of attempt my age if '+ myNum);
  }
}

function guessCounrty(){
  let choOsefromcoutry=['Amman','Krarak','Tafeleh','Maan','Jarash','Aqaba'];
  let guessCounrty= prompt(question[1]);
  let correct= false;

  for(let i=5;i>0;i--){
    for(let j=0; j<choOsefromcoutry.length;j++){
      if(guessCounrty.toLowerCase()===choOsefromcoutry[j].toLowerCase()){
        correct=true;
      }
    }
    if(correct){
      points+=5;
      alert('That correct '+whatName+ 'good job');
      break;
    }
    else{
      guessCounrty = prompt ('This wrong answer you still have '+ i+ ' attempt');
    }
  }
  if (correct===false) {
    alert('You exceed the number of attempt the true answer are:' +choOsefromcoutry);
  }
}

function finalResult(){
  alert (whatName+ 'your score is ' + points);
}

// eslint-disable-next-line no-unused-vars
function finalAnswer(){
  alert('my age is 24 ' + 'and the main countrey is amman');
}
finalAnswer();
