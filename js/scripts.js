window.onload = function (){
  let formBtn = document.querySelector(".form-btn");
  let name = document.querySelector("#name").value;
  function languagePicker(){
    let random = Math.floor(Math.random()*10);
    let language = "";
    if(random < 4){
      return language = "Python";
    }else if (random >=4 && random <7){
      return language = "Ruby";
    }else{
      return language = "Javascript";
    }
  };
  let output = document.querySelector("#output")
  formBtn.onclick = function(){
      output.innerHTML = ` ${name}, let's learn!`;
  }

};


/*accessibility 
buttonsomething.onclick=function(){
  document.body.style.backgroundColor = "yellow";

  */