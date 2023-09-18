const inputSelector = document.querySelector('input');
console.log(inputSelector)
function setValue(val) {
    inputSelector.value += val;
}
function clean(){
    inputSelector.value = "";
}
function setSym(symbol){
    currentSymbol = symbol;
    console.log(currentSymbol);
}
function equal(){
    let num1 = "";
    let num2 = "";
    let val = inputSelector.value;
    let idx = 0;
     while (val.charAt(idx) != currentSymbol){
         num1 += val.charAt(idx++);
     }idx ++;
     while(idx < val.length) {
       num2 += val.charAt(idx++);
     }
     num1 = Number(num1);
     num2 = Number(num2);
     inputSelector.value = calculate(num1,num2);
     currentSymbol = "";
}
function calculate(val1 , val2){
   if(currentSymbol === '+') {
    return val1 + val2;
   }
   else if(currentSymbol === '-'){
    return val1 - val2;
   }
   else if(currentSymbol === '*'){
    return val1 * val2;
   }
   else{
    return val1 / val2;
   }
}