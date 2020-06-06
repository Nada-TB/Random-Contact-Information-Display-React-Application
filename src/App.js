import React,{useState, useEffect} from 'react';
import './style.css';
import Contactcard from './conatct-card.js';

function App() {
  const [contacts, setContacts]=useState([]);
  useEffect(()=>{
    const https= new XMLHttpRequest();
    https.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
      let response = JSON.parse(this.response); 
      setContacts(response.results);
    }
}

https.open('GET', 'https://randomuser.me/api/?inc=name,email,dob, picture&&results=4');
https.send();
    
  },[]);


  return(
    <>
    <h1>Random contacts list using randomuser API</h1>
    {contacts.map( element =>(
      <Contactcard name={element.name.last +" "+ element.name.first}
      email={element.email} 
      age={element.dob.age}
      image={element.picture.large}
      />
    ))}
    
    <footer><p>Created by Nada TEBBA. June 2020</p></footer>
    </>
  )
};

export default App;
