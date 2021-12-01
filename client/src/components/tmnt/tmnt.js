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
    fetch("http://localhost:9000/tmnt/tmnt.png")
      .then(res => res.text())
      .then(res => this.setState({ apiResponseTmnt: res }));
  }

  componentWillMount() {
    this.callAPItmnt();
  }

  render() {
    return (
      <div className="tmnt">
        <header className="tmnt-header">
          
        </header>
        <p className="tmnt-intro">{this.state.apiResponseTmnt}</p>
        <p>Hi</p>
      </div>
    );
  }
}
