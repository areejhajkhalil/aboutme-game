   'use strict';

   alert("This is a gussing game. Try it");

   let userName = prompt( 'What is your name?');
   while(userName==""){//console.log(userName="")
   userName=prompt('enter your name pleas')}
   alert( "hello "   +  userName  +  " Let's start the guessing game"); 

   var score=0;
function question1(){
    let age= prompt('Do you think I am in my twenties?');
   age=age.
   toLowerCase();
   // console.log(age);
   // tolowerCase();
   if (age==='yes' || age==='y'){
       // console.log('good job');
       alert('ohh good job');
      score++;
   }
   else if (age==='no' || age==='n'){
       // console.log('you guessed wrong');
       alert('you guessed wrong');
   }
   else{
       // console.log('Please only enter yes or no');
       alert('Please only enter yes or no');}
}
question1();
   
  


function question2(){
   let travel= prompt('Do you think I like to travel?');
   travel=travel.
   toLowerCase();
   // console.log(age);
   // tolowerCase();
   if (travel==='yes' || travel==='y'){
       // console.log('good job');
       alert('ohh good job');
       score++;
   }
   else if (travel==='no' || travel==='n'){
       // console.log('you guessed wrong');
       alert('you guessed wrong');
   }
   else{
       // console.log('Please only enter yes or no');
       alert('Please only enter yes or no');}   
}
question2();  
  

   
  

function question3(){
    let sports = prompt('Do you think I like sports a lot?');
   sports=sports.
   toLowerCase();
   // console.log(age);
   // tolowerCase();
   if (sports==='yes' || sports==='y'){
       // console.log('noo, i Don’t like it');
       alert('noo, i Don’t like it');
   }
   else if (travel==='no' || travel==='n'){
       // console.log('ohh good job');
       alert('ohh good job');
       score++;
   }
   else{
       // console.log('Please only enter yes or no');
       alert('Please only enter yes or no');}  
}
question3(); 
  
function question4(){
    let Name = prompt('Do you think my Name is latin?');
   Name=Name.
   toLowerCase();
   // console.log(age);
   // tolowerCase();
   if (Name==='yes' || Name==='y'){
       // console.log('you guessed wrong');
       alert('you guessed wrong');
   }
   else if (Name==='no' || Name==='n'){
       // console.log('good, my name is Areej');
       alert('good, my Name is Areej');
       score++;
   }
   else{
       // console.log('Please only enter yes or no');
       alert('Please only enter yes or no');} 
}
question4();
  
  

function question5(){
   let meal= prompt('Is pizza my favorite meal?');
   meal=meal.
   toLowerCase();
   // console.log(age);
   // tolowerCase();
   if (meal==='yes' || meal==='y'){
       // console.log('noo, favorite meal is fettuccine');
       alert('noo, favorite meal is fettuccine');
   }
   else if (meal==='no' || meal==='n'){
       // console.log('ohh good job');
       alert('ohh good job');
       score++;
   }
   else{
       // console.log('Please only enter yes or no');
       alert('Please only enter yes or no');}  
}
question5();  
  


function question6(){
  var i=0;
   for(let i=0; i<4; i++){
   let unmber= prompt(' Can you guess my favorite number, choose between 1-10 ? ');
   if(unmber>4){
       alert(' too high');
   }
   else if(unmber<4){
       alert('too low');
   }

   else {
      alert('very good my favorite unmber is 4');

       score++;
       break;
      
   }
   }   
}
question6();
  

function question7(){
   var a=0;  
   let correctPleaces=['london','new york','paris','dubai'];
   let userName=null;
   for(let a=0; a<6; a++){
        
        let userName= prompt(' Can you guess my favorite city, starting with the letter L ? ');
        userName=userName.toLowerCase();

        for(let i=0;i<correctPleaces.length;i++){
           
           if(correctPleaces[i]===userName){
           alert('very good, my favorite cities\n  [london] [new] [york] [paris] [dubai]  ');
           a=7; 
           score++;
                

 
        }
        
        }
        if (a==5){
           alert('hard luck for next time the correct answer are :\n  [london] [new] [york] [paris] [dubai]');
        }

        }  
    }
    question7();

       


alert('Thanks for visiting and for your correct guess; your score is : ' + score );