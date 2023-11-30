//What is js--es1 es2 es6 --- bhut sare new methods--> map , filter and reduce , var , let and char , spread operator yeh bhi add hua hai 


//basics ;;


//var r char let 


// functional scope 
// let const -- block scope ke andr 



// conditionals , switch



// loops -- for while 

// var i =10;
// while(i<20000000){

//     console.log("i love you chinnu");
//     i++;
// }

//foreach--> array // forin--> object



//Execution context kya hota hai

// function chinnu(){
//     var a= "Sonu";
//     console.log(a);
//     function Baby(){
//         var b="baby girl";
//         console.log("Chhota Sonu");
//     }
//     Baby();
// }

// chinnu();

//lexical scope kya hota hai 

//window object kya hota hai 
// js --- khudki and browser functionalities 
//kaun si cheeje js , browser se use krta hai 

// array 


// var a =[1,2,34,3,5,65,7,67,3]; //array, array nhi hota

// a.forEach(chinnu,function(){
//     console.log(value);
// })



//obj ko access krne ke 2 methods hote hai --- . lagake,, for in loop use krke []
// var chinnu = {
//     name:"Sonu",
//     age:20,
//     address:"Bangalore"
// }
// console.log(chinnu.name);
// for (value in chinnu){
//     console.log(chinnu[value]);
// }






//functions ke sare type 
// aray , obj, functions --> most imp 
//  function ko call krke 


//1. function as a value 

// var a= function abcd(){
//     console.log("hii chinnu.")
// }

// a()

//2. function as a formal parameter

// function chinnu(){
//     console.log("My name is chinnu");
// }

// function pqrs(babyGirl){
//     babyGirl();
// }

// pqrs(chinnu);


// function sum (a,b){
//     return a+b;
// }

// sum(2,3)


//3. function as a return 

// var a = function abcd(){  // declaration
//     return function chinnu(){
//         console.log("Hey, I'm chinnu");
//     }
// }

// var p= a() // Return kiya ek fucntion -- function definition 

// p();



//3. function is assigned to a variable 

// function sum(a,b)
// {
//     return a+b;
// }

// var p= sum(2,3);
// console.log(p)

//4. functional exppressions 

// var multi= (a,b)=>{
//     return a*b;

// }
// console.log(multi(2,3));

//5. function in ds--> functions in arrays 

// var a=[
//     function chinnu(){
//         console.log("baby girl hu mai.")
//     },
//     function sonu(){
//         console.log("sonu hu mai.");

//     }

// ]

// a[0]();


// first class function kya hote hai


//higher order function kya hotehai 

//constructors
//this and new 
//new keyword 


// function chinnu(name, age){
//     console.log(`${name},${age}`)
// }
// var a= new chinnu("Chinnu",20);

// function stickyNotesBananeKimachine(color){
//     this.width=3;
//     this.height=0.01;
//     this.color=color
// }

// var stickNotes1= new stickyNotesBananeKimachine('blue');
// var stickNotes2= new stickyNotesBananeKimachine('green');



//iife -- immediately involked function execution

// var dedo= (function (){
//     var a=12;
//     return {
//         getter:function(){
//             console.log(a);
//         },
//         setter:function(value){
//             a=value;
//         }
//     }
// })

// var lelo= dedo();

// lelo.setter(50);
// lelo.getter();


//protype 


// protypal inheritance

// var chinnu={
//     hasLovingNature:true,
//     haspatience:true,
//     hasAnger:false,
//     naniKibaatManna:true,
//     masiKakaamkrna:true
// }

// var anju={
//     batteMantihai:false,
//     dikhawakartiHas:true,
//     GharKaKaamKartiHai:false,
//     isCaring:true
// }

// //nani ke ghar jati hai 
// anju.__proto__=chinnu;
// console.log(anju.haspatience);
// console.log(anju.batteMantihai);
// console.log(chinnu.hasLovingNature);


//this | call | apply | bind 


//this
// function abcd(){
//     console.log(this);
// }

// abcd();

//isninde the method
// var obj= {
//     name:"Sonu",
//     age:20,
//     chinnu:function(){
//         console.log(this.name);
//     }
// }
// this

//Jab bhi this written in the global scope toh uski value window obj hoti hai 
//Jab bhi this is written inside the function toh uski value window obj hoti hai 
// jab bhi this is written inside the method toh uski value parent obj hoti hai 

// function abcd(){  // window obj
//     console.log(this);
// }


// call function 

// function chinnuKimummy(){
//     console.log(this.name);
// }

// obj={
//     name:"mai hu chinnu"
// }
// chinnuKimummy.call(obj);


//bind

// function abcd(val1, val2,val3,val4){
//     console.log(this,val1,val2,val3,val4);
// }

// obj= {
//     name:"chinnu hu mai"
// }

// var p=[1,2,3,4]

// abcd.call(obj)
// abcd.apply(obj,p);

// function abcd(){
//     console.log(this);
// }

// obj= {
//     name:"chinnu hu mai"
// }

// var p= abcd.bind(obj)
// p();


//Use of this in Dom 


// pure | impure function

//pure functionns kya hote hai :-->pure functions are those which contains below written two things 
//1:->it should always return the same output for the same input
//2:->it should not change the value of global variable.


// var p=12;

// function abcd(a,b){
//     var p=20;
//     console.log(p)
//     return a+b;
    
// }
// var a1= abcd(1,3);
// console.log(a1)
// var a2= abcd(1,3);
// console.log(a2);
// var a3= abcd(1,3);
// console.log(a3)
// console.log(p);





//syn and asyn kya hota

//syn


// task1--10---kab tak task one complete nahi ho jata tab tak task 2 start nhi ho sakta
// task2--3
// task3--1

//jab bhi ham kisi cheej ko pane ke liye wait karte hai usse asyn way nolte hai 

//jab bhi hame server se baat krna hota hai tb ham async js ka use krte hai 

// console.log("task1");
// console.log("task2");
// async{

//     var dataLa= await fetch("http://randomAPi/randomperson");
// }
// var dataLa=fetch("http://randomAPi/randomperson");


// asyn:


// ms -- 
// [a,b,d,e]-- sync 
// [c]-- async
//sync means;; ek ek krke 

// async means ek saath kaam ko krna 
// asyn js kya hota hai ✅ 

// js asyn nhi hoti hai toh kyu ✅

// asyn ki poori kahani✅

// Single threding and m ultithreading ✅

//Nodemon-- to run the server continuously✅
//Express Module✅
//Node JS intro✅
//React DOC uses✅
//Mongodb comapass✅

//callbacks ✅

// Choose a number between 0 to 9 ; and check whether it is les than 5 or not 

// var p= new Promise((res,rej)=>{
//     var n= Math.floor(Math.random()*10);
//     if(n<=5){
//         console.log(n)
//          res();
//     }
//     else{
//         console.log(n);
//          rej();
//     }
// });

// p.then(()=>{
//     console.log("Number is below 5.");
// })
// .catch(()=>{
//     console.log("Number is above 5.")
// })


//async and await✅
// var p=async function abcd(){
//     var raw= await fetch("https://randomuser.me/api/")
//     var c= raw.json();
//     console.log(c);
// }
// p();

// promises✅
//then catch✅ 
//try and catch kaise use krnte hai 
 
//5 real world use cases 
// concurrenly and parallelism 
// throttling 

//Task List 
//1. Random number generator 
//2. Slider : slide and box color change
//3. login page design.