import React from 'react';
import profil from './profil.jpg';
import Ronaldo from './Ronaldo.jpg';
import Messi from './messi.jpg';
import Naymar from './naymar.jpg';
import IdHTML from './IdHTML';
import  './App.css';
class img { 
  constructor(avatarUrl, name,text) {
    this.avatarUrl = avatarUrl;
    this.name = name;
    this.text = text;
  }
  
}; 
var det = [new img(profil, "Chiheb", "Coach"),new img(Ronaldo, "Ronaldo", "Player"),
new img(Messi, "Messi", "Player"),new img(Naymar, "Naymar", "Player")

]; 
function App() {
  return (
    <div className="myapp">
      <header className="App-header">
       <h1>Notre équipe</h1>
      </header>
<div className="body">
      <div class="flex-container">
     {
     Array.from(det, x =>  <IdHTML avatarUrl={x.avatarUrl} name={x.name} text={x.text}/>)
    
     }

       </div>


 </div>
    </div>
    
  );
  
}

export default App;
