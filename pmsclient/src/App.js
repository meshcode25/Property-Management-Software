import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router} from 'react-router-dom';

/*
,Switch,Route 
*/
const App = () => {
  return(
    <Router>
      <Sidebar />
      
    </Router>

  )
};

export default App;
