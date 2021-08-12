import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/auth/auth.operations";
import styles from "./Register.module.css";

const InitialState = {
  name: "",
  email: "",
  password: "",
};

class Register extends Component {
  state = {
    ...InitialState,
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);

    this.setState({ ...InitialState });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.onHandleSubmit} className={styles.registerForm}>
        <label htmlFor="" className={styles.label}>
          Name
          <input
            id="name"
            name="name"
            type="text"
            className={styles.inputData}
            placeholder="Name*"
            value={name}
            onChange={this.onHandleChange}
            required
          />
        </label>

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
          Sign up
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  register,
};

export default connect(null, mapDispatchToProps)(Register);
