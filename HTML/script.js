let name =prompt("what is your name");
let age = Number(prompt("what is your age"));

console.log(name);
console.log(age);

console.log("hello!",name);
console.log("your age is",age);

let lang =prompt("enter your fav lang");
let exp = Number(promt("enter your experience in years"));

console.log(lang);
console.log(exp);

console.log("Your fav coding language is ",lang)
console.log("You have ",exp,"years of experience");

let age=20;
{

    // if else

if (age>=18)
console.log("adulrt")
}

//for loop 
let i = 10
for (i=1;i<=10;i++){
    console.log(i)
}

//while
let i =5
while(i>=0){
    console.log(i);
    i++

}

//functions
function add(a,b){
    console.log(a+b);
}
add(10,20);

function square(num){
    return (num**2);
}
console.log(square(4));
#arrays
let students = ["Neha", "Riya", "Rahul"];
for (let i=0; i<students.length; i++){
    console.log(students[i])
}

//objects:a object with all data in it 
let laptop = {

    brand: "HP",
    ram: "16GB",
    processor: "Intel i5"

}
console.log(laptop.brand);
console.log(laptop.ram);
laptop.ram="32GB";
console.log(laptop.ram);
laptop.warranty="1 year";
console.log(laptop);

let clg="gnitc"
console.log(clg)
let title = document.getElementById("heading");

    console.log(title);

let array=["python","sql","os","js"];
array.forEach(function(arrays){
    console.log(arrays);
});

let numbers = [1,2,3];

let square = numbers.map(function(num){
    return num * num;
});

console.log(square);

function showmesaage(){
    alert("hello neha");
}
#events

function showmessagesok(){
    alert("welcome");
}
let heading=document.getElementById("heading"):
button.addEventListener("click",function(){
    heading.textcontent="helloo";
})               

let form=document,getElementById("my form");
form.addEventListener("submit",function(event){
    event.defaultPrevented();
    console.log("submited");
});

#fetchapi  
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.then(function(data){
    console.log(data[0].name);
});

#es6
const add=(a,b)=>a+b;{
return(a+b);}

console.log(3,6);
let name = "Neha";

console.log(`Hello ${name}`);

let student = {
    name: "Neha",
    age: 20
};

let { name, age } = student;

console.log(name);
console.log(age);

let arr1 = [1,2,3];

let arr2 = [...arr1,4,5];

console.log(arr2);


function total(...numbers){
    console.log(numbers);
}

total(10,20,30,40);

function greet(name){
    console.log("Hello", name);
}

greet();