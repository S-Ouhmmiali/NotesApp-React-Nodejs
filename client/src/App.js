import React, { Fragment } from 'react';
import './App.css';


//Components : 
import InputNote from './components/InputNote';
import ListNotes from './components/ListNotes';

function App() {
  return (

    <Fragment> 
       
      <div>
        <InputNote/>
    
        <ListNotes/>


      </div>
        
    </Fragment>
  );
}

export default App;
