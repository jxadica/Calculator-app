
let choosenNumb = document.querySelector(".numbersChoosen");
let operations = document.querySelectorAll('.operation');
let resultBox = document.querySelector(".resultNumber")
let percentage = document.querySelector('.percentage');
let leftArrow = document.querySelector('.leftArrow')
let numbers = document.querySelectorAll('.number');
let negation = document.querySelector(".negation");
let clear = document.querySelector(".clear");
let equal = document.querySelector('.equal');
let both = document.querySelectorAll(".both");
let dot = document.querySelector(".dot");


both.forEach(e => {
    e.addEventListener("click", function() {
      if (e.classList.contains('operation')) {
        let lastChar = resultBox.textContent.charAt(resultBox.textContent.length - 1);
        if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
          resultBox.textContent += e.textContent;
        }
      } else if (e.classList.contains('dot')) {
        if (!resultBox.textContent.includes('.')) {
          resultBox.textContent += e.textContent;
        }
      } else {
        resultBox.textContent += e.textContent;
      }
    })
  })
    equal.addEventListener("click", function(){
        choosenNumb.textContent= resultBox.textContent;
        let lastChar = resultBox.textContent.charAt(resultBox.textContent.length - 1);
        if(lastChar!=='/'){
         resultBox.textContent= eval(resultBox.textContent);
        }
        })
    clear.addEventListener('click', function(){
            choosenNumb.textContent='';
            resultBox.textContent='';
        })
        
    leftArrow.addEventListener("click", function(){
                resultBox.textContent = resultBox.textContent.toString().slice(0, -1);
        })
            
    negation.addEventListener("click", function(){
                    resultBox.textContent= (parseFloat(resultBox.textContent)*-1).toString()
        })
                
    percentage.addEventListener("click", function(){
                        resultBox.textContent= (parseFloat(resultBox.textContent)/100).toString()
        })
                    
                    
  