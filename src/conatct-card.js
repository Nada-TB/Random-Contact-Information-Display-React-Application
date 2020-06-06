import React,{useState} from 'react';


function Contactcard (props){
    const [showAge, setShowAge]=useState(false);
    const handleClick =()=>{
        setShowAge(!showAge);
    }
    return(
        <div className="contact-card">
            <img src={props.image} alt="profile" />
            <div>
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                {showAge=== true? <p> Age: {props.age} ans</p>:null} {/*this part appears onclick and depends on showAge Value */}
                <button onClick={handleClick}>show me</button>
            </div>
        </div>
    );
};



export default Contactcard;