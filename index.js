const displayBox = document.getElementById("logIn-box");
const LogIn = document.getElementById("Sign-in");
const Register = document.getElementById("Register");
const LoginButton = document.getElementById("login");
const img = document.getElementById("object");
const container = document.getElementById("container");
const input1 = document.getElementById("input-container1");
const input2 = document.getElementById("input-container2");
const usernameRes = document.getElementById("usernameRes");
const pass = document.getElementById("passRes");
const create = document.getElementById("create");


LoginButton.addEventListener("click",()=>{
  displayBox.style.display = "block";
  img.style.opacity = "0.15";
  container.style.opacity = "0.15";
  LogIn.style.backgroundColor = "#5f966d";
});

LogIn.addEventListener("click",()=>{
  input1.style.display = "grid";
  input2.style.display = "none";
  LogIn.style.backgroundColor = "#5f966d";
  Register.style.backgroundColor = "#9cebb1"
});

Register.addEventListener("click",()=>{
  input2.style.display = "grid"
  input1.style.display = "none"
  Register.style.backgroundColor = "#5f966d";
  LogIn.style.backgroundColor = "#9cebb1"
});

create.addEventListener("click",()=>{
  username = usernameRes.value;
  console.log(username); 
});