'use strict';

let userScore=0;
alert('Welcome to My Wesite');

let userName = prompt('What\'s your name ?');
alert('Welcome Mr./Ms. ' + userName);

function theSportquestion() {
  let sportQuestion = prompt('Do you like play football?','Please enter yes or no').toLowerCase();
  if (sportQuestion=== 'yes'||sportQuestion==='y') {
    alert('Keep going, it is so funny game');

  } else if (sportQuestion=== 'no'||sportQuestion==='n') {
    alert('You have to try it is funny');

  }
  else {
    alert('Please Enter Yes or No/ Y or N');
  }
}
theSportquestion();

function theJordianianFood() {
  let jordanianFood = prompt('Did you like jordanianFood?','Yes or No').toLowerCase();
  if (jordanianFood === 'yes'| jordanianFood==='y') {
    alert('Yes, so You are original Jordanian');

  }else if (jordanianFood==='no'| jordanianFood==='n') {
    alert('No, so you have to try them is so delicios','Yes or No');

  }
  else{
    alert('Please Enter Yes or No/ Y or N');
  }
}
theJordianianFood();

function theStudyCoding() {
  let studCoding = prompt('Did you like software field?','Yes or No').toLowerCase();
  if (studCoding === 'yes'|| studCoding==='y') {
    alert('Yes, so Great and i do');

  } else if (studCoding==='no'|| studCoding==='n') {
    alert('No, so You have to to Ask about ASAC collage they teach coding very well');

  }
  else{
    alert('Please Enter Yes or No/ Y or N');
  }
} theStudyCoding();

function theReadingQuestion() {
  let readingQuestion = prompt('Did you like reading books?','Yes or No').toLowerCase();
  if (readingQuestion === 'yes'||readingQuestion==='y') {
    alert('Yes, so Thats Great keep going');

  } else if(readingQuestion==='no',readingQuestion==='n') {
    alert('No, so You have to read because readers are a leader');

  }
  else{
    alert('Please Enter Yes or No/ Y or N');
  }
}
theReadingQuestion();

function theCoffeeQuestion() {
  let coffeeQuestion = prompt('Did you like drink coffeeQuestion?','yes or no').toLowerCase();
  if (coffeeQuestion === 'yes'||coffeeQuestion==='y') {
    alert('Yes, so I think i is not good but i do to wakeup');

  } else if (coffeeQuestion=== 'no'||coffeeQuestion==='n') {
    alert('No, so Good, i feeling jealous from you');

  }
  else{
    alert('Please Enter Yes or No/ Y or N');
  }
}
theCoffeeQuestion();


let question= ['Ok' + userName +'lets play guess game guess my age', 'Ok'+userName+'let us play another game guess the main country in Jordan '];
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
    // eslint-disable-next-line eqeqeq
    else if (guessNum==myNum){
      alert('correct my age is '+ myNum + ' congratilation'+ userName);
      guesscorrect= true;
      userScore+=5;
      break;
    }
  }


  // eslint-disable-next-line eqeqeq
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

      userScore+=5;
      alert('That correct '+userName+ 'good job');
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
  alert (userName+ 'your score is ' + userScore);
}

// eslint-disable-next-line no-unused-vars
function finalAnswer(){
  alert('my age is 24 ' + 'and the main countrey is amman');
}
finalAnswer();
