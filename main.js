let checkBtn= document.querySelector('.btn-check');
let attemptsLeftEl= document.querySelector('#attempts-left');
let txtNumber= document.querySelector('.input-number');
let messageEI= document.querySelector('.message');
let randomNumEl = document.querySelector('.random-number');
let body = document.querySelector('body');
let newGameBtn= document.querySelector('.new-game');

let randomNumber =Math.trunc(Math.random()* 20) +1;
console.log(randomNumber);
let attemptsLeft= 10;

checkBtn.addEventListener('click', function(){
if(attemptsLeft>0){
  attemptsLeft--;
attemptsLeftEl.textContent= attemptsLeft;
let guess =Number(txtNumber.value);
if(guess===0){
messageEI.textContent='No number or 0 is entered.☹️';
}
else if(guess===randomNumber){
messageEI.textContent='U WON THE GAME!🥳';
randomNumEl.textContent=randomNumber;
body.style.backgroundColor= '#00FF00';
 
}
else if(guess !== randomNumber){
  if(attemptsLeft>0){
    body.style.backgroundColor='#EC7063';
    setTimeout(()=>{body.style.backgroundColor= '#808080';},300);
  let message=guess> randomNumber? `Your guess is too high ❗️`   
       : `Your guess is too low ❗️ `;
  messageEI.textContent=message;

  }


  else{
messageEI.textContent='U LOST THE GAME!☹️';
body.style.backgroundColor= '#FF0000';

}
}

}else{
  messageEI.textContent='U LOST THE GAME!☹️';
  attemptsLeft.textContent=0;
body.style.backgroundColor= '#FF0000';
}
});
newGameBtn.addEventListener('click',function(){
  randomNumber=Math.trunc(Math.random()* 20) +1;
attemptsLeft=10;
messageEI.textContent='Guess a number between 1 to 20';
attemptsLeftEl.textContent=attemptsLeft;
txtNumber.value='';
});