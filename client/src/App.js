import React, {Component} from "react";
import { Route } from 'react-router';
import { tmnt } from './components/tmnt/tmnt';
import { testAPI } from './components/testAPI/testAPI';
//import { Layout } from '../components/Layout/Layout';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  static displayName = App.name;

  render () {
    return (
      <div>
        
        <testAPI />
      </div>
    );
  } 
}

console.log("React front-end app running at: http://localhost:3000");
 
export default App;
