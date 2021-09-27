
import './App.css';
import React from 'react'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar(name_lists)/Navbar';
import TableContent from './Components/Content/Table';
import {BrowserRouter, Route, Switch}  from "react-router-dom";





const App = (props) =>  {
const Content = () => {
  
}  
  let Routes = props.state.data000
  .map(tag => <Route 
    path={'/table' + tag.id}
    render={(tag) =><TableContent state={props.state} data={props.state.data + tag.id} />}/>) 
return (
  <BrowserRouter>
  <div className="app-wrapper">
<Header/> 
<Navbar
addTable={props.addTable} 
state={props.state}
Redact={props.Redact} 
Delete={props.Delete}/>
<div className='app-wrapper-content'>
<Switch>
{Routes}

</Switch>
</div>


  </div>
  </BrowserRouter>
)}




export default App;
