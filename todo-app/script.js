function addtask(value){
    let input=document.getElementById("tasklist");
    let tasklist=document.getElementById("tasklist");
     let li=document.createElement("li");
    li.textcontent = input.value;
    tasklist.appendChild(li);
    input.value=" ";

}