import React from 'react';
import Card from './Card';
import './App.css';
import List from './List';
//import STORE from './store';
function App(props) {
  return (
    <main className="App" >
<header className="App-header">
      <h1>Trelloyes!</h1>
    </header>

    <div className="App-List">
    {props.STORE.lists.map(function(list){
   <List header={list.header} cards= />
    })}
 
    


    </div>


    </main>
  );
}

export default App;
