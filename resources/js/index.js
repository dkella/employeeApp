import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Example from "./components/Example";

if (document.getElementById('employeeApp')) {
  ReactDOM.render(<App />, document.getElementById('employeeApp'));
}
