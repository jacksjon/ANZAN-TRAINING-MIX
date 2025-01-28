let randomenzan = ['*','+','-'];
let tim = 0;
let answertime = 0;
let notanswertime = 0;
let answerseetime = 0;
let question1 = 0;
let question2 = 0;
let enzan1 = 0;
let enzan2 = 0;
let enzan3 = 0;
let trueanswer = 0;
let displayanswer = 0;

function $(id) {
  return document.getElementById(id);
}
function questionGenerate() {
  tim = 0;
  question1 = (Math.floor(Math.random() * 20) + 1);
  question2 = (Math.floor(Math.random() * 20) + 1);
  question3 = (Math.floor(Math.random() * 20) + 1);
  question3 = (Math.floor(Math.random() * 20) + 1);
  
  enzan1 = (randomenzan[Math.floor(Math.random() * randomenzan.length)]);
  
  enzan2 = (randomenzan[Math.floor(Math.random() * randomenzan.length)]);
  
  enzan3 = (randomenzan[Math.floor(Math.random() * randomenzan.length)]);
  
  trueanswer = eval(question1 + enzan1 + question2 + enzan2 + question3 + enzan3 + question3);
  
  displayanswer = (question1 + enzan1 + question2 + enzan2 + question3 + enzan3 + question3).replace(/\*/g, "×").replace(/\+/g, "＋").replace(/\-/g, "－");
  
   $('question').innerHTML = displayanswer;
   $('answer-display').innerHTML = 'NO COMMENTS';
   $('answer-display').style.color = 'gray';
   $('answer').value = ''; 
}
function answerCheck() {
  if (($('answer').value) == trueanswer ) {
    $('answer-display').innerHTML = '正解！';
    $('answer-display').style.color = 'red';
    console.log('正解');
    if (tim < 1) {
      answertime = answertime + 1;
    }
    result();
  }
  else {
    $('answer-display').innerHTML = '不正解...';
    $('answer-display').style.color = 'blue';
    console.log('不正解')
    if (tim < 1) {
      notanswertime = notanswertime + 1;
    }
    result();
  }
}
function answerDisplay() {
  $('answer-display').innerHTML = '答えは' + trueanswer;
  $('answer-display').style.color = 'orange';
  if (tim < 1) {
    answerseetime = answerseetime + 1;
  }
  result();
}
function result() {
  tim = tim + 1;
  $('times').innerHTML = '正解数:' + answertime + '不正解数:' + notanswertime + '答えを見た回数:' + answerseetime;
}
window.onload = function() {
  $('times').innerHTML = '正解数:0 不正解数:0 答えを見た回数:0';
  questionGenerate();
}
function Leload() {
  window.location.reload();
}
