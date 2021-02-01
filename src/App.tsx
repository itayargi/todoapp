import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { Provider } from 'mobx-react';
import noteStore from './store';
import NoteList from './NoteList';
import NewNote from './NewNote';
import './App.css';



function App() {

  
  return (
    <Provider noteStore={noteStore}>
    <div className="App">
      
        <Container >
      <div id="todoLogo"></div>
       <h1 style={{textDecoration:"underLine"}}>Enter new note:</h1>
          <NewNote />
          
        <h2 style={{backgroundColor:"white",border:"solid" ,width:"150px", textDecoration:"underLine"}}>List of notes:</h2>
         <NoteList />
         
        </Container>
      </div>

    </Provider>


  );
}

export default App;
