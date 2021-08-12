import React from "react";
import { connect } from "react-redux";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import { removeContact } from "../../redux/contacts/contacts.operations";
import {
  getFilteredContacts,
  filterSelector,
  getLoader,
} from "../../redux/contacts/contacts.selectors";

const ContactList = ({ contacts, onDelete, loading }) => {
  return (
    <>
      {loading && (
        <Loader type="ThreeDots" color="#000" height={80} width={80} />
      )}
      <ul className={styles.contactsList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contact}>
            {contact.name}: {contact.number}
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    contacts: getFilteredContacts(state),
    filter: filterSelector(state),
    loading: getLoader(state),
  };
};

const mapDispatchToProps = {
  onDelete: removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
