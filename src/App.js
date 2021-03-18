import React from "react";
import "./App.css";
import { CardList } from "./screen/CardList";
import { Form } from "./components/Form";

class App extends React.Component {
  state = {
    profile: [],
  };

  addNewProfie = (profileData) => {
    this.setState((prevState) => ({
      profile: [...prevState.profile, profileData],
    }));
  };
  render() {
    return (
      <>
        <header style={{ fontSize: "2rem", fontWeight: "large" }}>
          {this.props.title}
        </header>
        <Form onSubmit={this.addNewProfie} />
        <CardList profile={this.state.profile} />
      </>
    );
  }
}

// function App({ title }) {
//   return <header>{title}</header>;
// }

export default App;
