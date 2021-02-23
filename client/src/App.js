import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResponse: "",
    };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then((res) => res.text())
    .then(res => this.setState({apiResponse: res}))
    .catch(err => err)
  }

  componentDidMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <h1>"Hi {this.state.apiResponse}"</h1>
      </div>
    );
  }
}

export default App;
