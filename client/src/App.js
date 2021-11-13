import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
      apiResponseTmnt: ""
   };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  callAPItmnt() {
    fetch("http://localhost:9000/tmnt")
      .then(res => res.text())
      .then(res => this.setState({ apiResponseTmnt: res }));
  }

  componentWillMount() {
    this.callAPI();
    this.callAPItmnt();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.apiResponseTmnt}</p>
      </div>
    );
  }
}

export default App;
