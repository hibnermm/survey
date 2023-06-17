window.onload = function (){
  let formBtn = document.querySelector(".form-btn");
  let name = document.querySelector("#name");
  let randomLanguage = Math.random(formBtn);
  let output = document.querySelector("#output")
  formBtn.onclick = function(){
      output.innerHTML = ` ${name}, let's learn!`;
  }

};


/*accessibility 
buttonsomething.onclick=function(){
  document.body.style.backgroundColor = "yellow";

  */