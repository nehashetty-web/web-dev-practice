"components"
function App(){
    return(
        <div>
            <h1> my first react app</h1>
            <p>learning react</p>
            <button>click</button>
        </div>
    );
}
function Details(){
    return(
        <div>
            <h1>my name is neha</h1>
            <p>Course: B.Tech CSE-DS</p>
            <p>Learning: React</p>
        </div>
    );
}
"props"

function Student(props){
    return(
        <h2>my name is{props.name}</h2>
    );

}
function App(){
    return(
        <div>
            <h1>my college</h1>
            <Student name="neha" />
            <Student name="varsh" />
        </div>
    );
}

"state and usestate"
import{useState} from "react";
function App(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>count</h1>
        <button onClick={() => setCount(count+1)}>
            Increase
        </button>
        </div>
    );
}

import {useState} from "react";
function App(){
    const[name,setName]=useState("Neha");
    return(
      <div>
        <h1>name</h1>
        <button onClick={()=>setName("Varsh")}>
            change
        </button>
      </div>
    );
}

