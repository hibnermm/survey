window.onload = function(){
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

  let random = Math.floor(Math.random()*10);
  let language = languagePicker();
  function languagePicker(random){
      if(random < 4){
        return "Python";
      }else if (random >=4 && random <7){
        return "Ruby";
      }else{
        return "Javascript";
      }
      language;
    };

    languagePicker();

    let nameInput = document.querySelector("#name").value;
    let nameCaps = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
    console.log(nameInput);
    let output = document.querySelector("#output");
    output.innerHTML = `${nameCaps}, let's learn ${language}!`;
    document.querySelector(".hidden").removeAttribute("class");

    form.reset();
  });
};


/*accessibility 
buttonsomething.onclick=function(){
  document.body.style.backgroundColor = "yellow";

  */