
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


// METHOD 1
let operation = '';
let secondNumber = '';
let firstNumb = ''; 
                
both.forEach(e=>{
    e.addEventListener("click", function(){
         resultBox.textContent += e.textContent;
    })
 });

 
 numbers.forEach(number=>{
    number.addEventListener("click", function(){
        if(operation==''){
            firstNumb += number.textContent;
        } else {
            secondNumber += number.textContent;
        }
    })
 })


 operations.forEach(op=>{
    op.addEventListener("click", function(){
        if(firstNumb !== ''){
            operation = op.textContent;
        }
    })
 })


 equal.addEventListener("click", function() {
    if( firstNumb!=='' && secondNumber!=='' && operation!==''){
        let result;
        let num1 = parseFloat(firstNumb);
        let num2 = parseFloat(secondNumber);

        switch(operation){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            default:
                break;

        }
        resultBox.textContent = result;
        firstNumb = result;
        secondNumber = '';
        operation = '';
    }
    
 })


 clear.addEventListener("click", function(){
    resultBox.textContent = '';
    choosenNumb.textContent = '';
    firstNumb = '';
    secondNumber = '';
    operation = '';
 })


 leftArrow.addEventListener("click", function(){
    resultBox.textContent = resultBox.textContent.toString().slice(0,-1);
 })


 negation.addEventListener("click", function(){
    if(operation===''){
        firstNumb = (parseFloat(firstNumb) * -1).toString();
        resultBox.textContent = firstNumb;
    } else if (secondNumber!==''){
        secondNumber = (parseFloat(secondNumber) * -1).toString();
        resultBox.textContent = firstNumb + operation +'('+ secondNumber + ')';
    }
 })


//  METHOD 2
// both.forEach(e=>{
//         e.addEventListener("click", function(){
//         resultBox.textContent += e.textContent;
//     })
// })

// equal.addEventListener("click", function(){
//         choosenNumb.textContent= resultBox.textContent;
//         resultBox.textContent= eval(resultBox.textContent);
//     })
//     clear.addEventListener('click', function(){
//             choosenNumb.textContent='';
//             resultBox.textContent='';
//         })
        
//         leftArrow.addEventListener("click", function(){
//                 resultBox.textContent = resultBox.textContent.toString().slice(0, -1);
//             })
            
//             negation.addEventListener("click", function(){
//                     resultBox.textContent= (parseFloat(resultBox.textContent)*-1).toString()
//                 })
                
//                 percentage.addEventListener("click", function(){
//                         resultBox.textContent= (parseFloat(resultBox.textContent)/100).toString()
//                     })
                    
                    
                