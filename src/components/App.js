import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../redux/auth/auth.operations";
import Header from "./header/Header";
import Main from "./main/Main";

class App extends Component {
componentDidMount() {
  this.props.getCurrentUser()
}

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
const mapDispatchToProps = {
  getCurrentUser,
};


export default connect(null, mapDispatchToProps)(App);
