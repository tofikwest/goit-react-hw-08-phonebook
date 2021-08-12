import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

import {
  getContacts,
  addContact,
} from "../../redux/contacts/contacts.operations";
import { getContactsSelector } from "../../redux/contacts/contacts.selectors";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  componentDidMount() {
    this.props.getContacts();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const contactExist = this.props.contacts.find(
      (contact) => contact.name === this.state.name
    );

    if (contactExist) {
      alert(`Contact <-- ${this.state.name} --> already exists`);
      return;
    }
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>
            <input
              className={styles.inputData}
              type="text"
              name="name"
              placeholder="Name:"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label>
            <input
              className={styles.inputData}
              type="tel"
              name="number"
              placeholder="Number:"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit" className={styles.addBtn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.prototypes = {
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: getContactsSelector(state),
});

const mapDispatchToProps = { getContacts, addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
