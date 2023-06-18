window.onload = function(){
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
      event.preventDefault();  
      let experZero = document.querySelector("#zero-month").checked;  
      let experOneThree = document.querySelector("#onethree-month").checked;  
      let experFourSix = document.querySelector("#foursix-month").checked;  
      let experOverSix = document.querySelector("#oversix-month").checked;  
      let yesData = document.querySelector("#yes-data").checked;
      let noData = document.querySelector("#no-data").checked;
      let yesBackend = document.querySelector("#yes-backend").checked;
      let noBackend = document.querySelector("#no-backend").checked;
      let yesFrontend = document.querySelector("#yes-frontend").checked;
      let noFrontend = document.querySelector("#no-frontend").checked;
      let output = document.querySelector("#output");

      let language = radialChoice();
      function radialChoice(){
          if(experZero || experOneThree){
            return output.innerHTML = "Python";
          }else if (experFourSix){
            return output.innerHTML = "Ruby";
          }else if(experOverSix){
            return output.innerHTML = "Javascript";
          }else if(yesData){
            return output.innerHTML = "Python";
          }else if(noData && yesBackend || noData && noFrontend){
            return output.innerHTML = "Ruby";
          }else if(noData && noBackend || noData && yesFrontend){
            return output.innerHTML = "Javascript";
          }else{
            return output.innerHTML = "Python";
          };
          language;
          };


        radialChoice();

        let nameInput = document.querySelector("#name").value;
        let nameCaps = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
        console.log(nameInput);
        output.innerHTML = `${nameCaps}, let's learn ${language}!`;
        document.querySelector(".hidden").removeAttribute("class");

        form.reset();
      });
};


