//DOM KI BAAT JAB BHI KARTE HAI TOH HAME $ CHEEJE PTA HONA CHAHIYE 

//1. how to change html from js

// var p=document.querySelector("h1")
// p.innerHTML="mai sonu hu";



//2. how to change css from js

// var p=document.querySelector("h1");
// p.style.color="pink"; // style properties should always be written in the camel case
// p.style.backgroundColor="black"

// document.querySelector("#box");
// document.querySelector(".box2");
// document.getElementById("box");
// document.getElementsByClassName("box2");

//3. how to add event listener 

// var p= document.querySelector("h1")
// p.addEventListener("click",function(){
//     p.innerHTML="chinnu ki mummy hu mai";
//     p.style.color="blue";
// })

//MINI PROJECT-- bulb jalao project

var p= document.querySelector("#box");
var btn=document.querySelector("button")


var flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
        p.style.backgroundColor="yellow"
        console.log("Mai on ho gya.");
        flag=1;
    }
    else{
        p.style.backgroundColor="white";
        console.log("Mai off ho gya.")
        flag=0;
    }
   
})


//4. can change js from js file 