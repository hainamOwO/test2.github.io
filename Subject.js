let canvas = document.getElementById("menuicon");
let context=canvas.getContext("2d");
const sidebar = document.getElementById("side-bar");



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
});

window.addEventListener("keydown",()=>{
  if(event.key===" "){
    sidebar.style.display = "none";
  }
});