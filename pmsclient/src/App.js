import React from 'react';
import Login from "./components/Login"
import Sidebar from './components/Sidebar';
 import { BrowserRouter as Router} from 'react-router-dom';


const App = () => {
  return(
    <Router>
        <Sidebar />
        <Login />
    </Router>

  )
};

export default App;
