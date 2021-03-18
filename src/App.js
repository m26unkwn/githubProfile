import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <header>{this.props.title}</header>
      // }
    );
  }
}

// function App({ title }) {
//   return <header>{title}</header>;
// }

export default App;
