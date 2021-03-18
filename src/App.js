import React from "react";
import "./App.css";
import Card from "./screen/Card";
class App extends React.Component {
  render() {
    return (
      <>
        <header>{this.props.title}</header>
        <Card />
      </>
    );
  }
}

// function App({ title }) {
//   return <header>{title}</header>;
// }

export default App;
