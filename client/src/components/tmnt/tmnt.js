import React, {Component} from "react";
import logo from '../../logo.svg';
import './tmnt.css';

export class tmnt extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponseTmnt: ""
   };
  }

  callAPItmnt() {
    fetch("http://localhost:9000/tmnt")
      .then(res => res.text())
      .then(res => this.setState({ apiResponseTmnt: res }));
  }

  componentWillMount() {
    this.callAPItmnt();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">{this.state.apiResponseTmnt}</p>
      </div>
    );
  }
}
