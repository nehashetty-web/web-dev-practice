function press(value){
    let display=document.getElementById("display");
    display.value +=value;
} 
function clearDisplay(value){
    let display=document.getElementById("display");
    display.value=" ";
} 
function calculator(value){
    let display=document.getElementById("display");
    display.calculator= eval(display);
} 