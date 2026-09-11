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

"event and forms"
import{ useState} from"React";
function App(){
    const[name,setName]=useState("neha")
function changename(){
    setName("varsh")
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>
                change name
            </button>
        </div>
    );
}
}
"list+key"
function App(){
    const Students=["Neha","Varsh","anu"]
    return(
        <div>
            {Students.map(Student) => (
            <h2 key={student}>{student}</h2>))
            </div>
    );
}
"conditional rendering"
function App(){
    
        const isLOggedin=true;
return(
    <div>
    {isLOggedin ? <h1>WElcome</h1>:<h2>please login</h2>}
    </div>

    );
}   

