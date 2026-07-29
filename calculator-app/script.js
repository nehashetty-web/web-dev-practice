function press(value) {
    let display = document.getElementById("display");
    display.value += value;
}
function clearDisplay(){
    let display = document.getElementById("display");
    display.value = "";
}
function calculate(){
    let display = document.getElementById("display");
    display.value = eval(display.value);
}