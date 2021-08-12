import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/auth/auth.operations";
// import { getIsAuthSelector } from "../../redux/auth/auth.selectors";

import styles from "./Login.module.css";

const InitialState = {
  email: "",
  password: "",
};
class Login extends Component {
  state = {
    ...InitialState,
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);

    this.setState({ ...InitialState });
  };

  render() {
    const { email, password } = this.state;
    
    return (
      <form className={styles.loginForm} onSubmit={this.onHandleSubmit}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            id="email"
            name="email"
            type="mail"
            className={styles.inputData}
            placeholder="Email*"
            value={email}
            onChange={this.onHandleChange}
            required
          />
        </label>
        <label htmlFor="password" className={styles.label}>
          Password
          <input
            id="password"
            name="password"
            type="password"
            className={styles.inputData}
            placeholder="Password*"
            value={password}
            onChange={this.onHandleChange}
            required
          />
        </label>
        <button type="submit" className={styles.submitBtn}>
          Log in
        </button>
      </form>
    );
  }
}


const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(Login);
