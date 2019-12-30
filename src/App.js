import React from 'react';

import './App.css';
import List from './List';
//import STORE from './store';
function App(props) {
  

  console.log("this is the props",props);
  const list = props.store.lists.map(list=>{
    return <List key={list.id} header={list.header} cards={list.cardIds.map(id=>{
      return props.store.allCards[id]
    })} />
  }) 
  
  return (
    <main className="App" >
    <header className="App-header">
      <h1>TrelloYes!</h1>
      </header>

    <div className="App-List">
    {list}
    


    </div>


    </main>
  );


}

export default App;
