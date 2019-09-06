import React from 'react';
import FighterJets from './component/FighterJets';
import Helicopters from './component/Helicopters'
import Missiles from './component/missiles'
import Tanks from './component/Tanks'
import Main from './component/Main'
import Rifles from './component/Rifles';

function App() {
  return (
    <div> 
      <Main/>
      <br/>
      <FighterJets/>
      <br/>
      <Helicopters/>
      <br/>
      <Missiles/>
      <br/>
      <Rifles/>
       <br/>
       <Tanks/>
       <br/>
       <h4>Copyright@ Indian Defence System</h4>
       <h4>Date : 06-Sept-2019</h4>
    </div>
       
  );
}

export default App;
