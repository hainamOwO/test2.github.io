let canvas = document.getElementById("menuicon");
let context=canvas.getContext("2d");
const sidebar = document.getElementById("side-bar");
const body = document.body;

let canvas2 = document.getElementById("arrow-left-canvas");
let arrowLeft = canvas2.getContext("2d");
let canvas3 = document.getElementById("arrow-right-canvas");
let arrowRight = canvas3.getContext("2d");

const start = document.getElementById("start");


context.strokeStyle = "white";
context.lineWidth = 5;
context.beginPath();
context.moveTo(0, 5);
context.lineTo(50,5);
context.moveTo(0,25);
context.lineTo(50,25);
context.moveTo(0,45);
context.lineTo(50,45);
context.stroke();

canvas.addEventListener("click",()=>{
  sidebar.style.display = "grid";
})

window.addEventListener("keydown",()=>{
  if(event.key===" "){
    sidebar.style.display = "none";
  }
})

arrowLeft.strokeStyle = "rgb(209, 209, 209)";
arrowLeft.lineWidth = 5;
arrowLeft.beginPath();
arrowLeft.moveTo(25,0)
arrowLeft.lineTo(0,25);
arrowLeft.moveTo(0,25);
arrowLeft.lineTo(25,50);
arrowLeft.stroke();

arrowRight.strokeStyle = "rgb(209, 209, 209)";
arrowRight.lineWidth = 5;
arrowRight.beginPath();
arrowRight.moveTo(25,0)
arrowRight.lineTo(50,25);
arrowRight.moveTo(50,25);
arrowRight.lineTo(25,50);
arrowRight.stroke();

start.addEventListener('click',()=>{
  window.location = "Subject.html";
});