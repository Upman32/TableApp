import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addTable, Delete, Redact, subscribe} from './Components/BLL/Store'


export let rerender = () => {

    ReactDOM.render(
      <React.StrictMode>
        <App addTable={addTable} state={state} Redact={Redact} Delete={Delete}/>
      </React.StrictMode>,
      document.getElementById('root')
    ); }

rerender(state)

subscribe(rerender);

reportWebVitals();
