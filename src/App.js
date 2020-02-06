import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {AdminComponent} from './Components/Admin/AdminComponent';
import {LoginComponent} from './Components/Login/LoginComponent'
import {POCComponent} from './Components/POC/POCComponent'
import {PMOComponent} from './Components/PMO/PMOComponent'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginComponent}/>
        <Route exact path="/admin" component={AdminComponent}/>
        <Route exact path="/poc" component={POCComponent}/>
        <Route exact path="/pmo" component={PMOComponent}/>
      </Router>
    </div>
  );
}

export default App;
