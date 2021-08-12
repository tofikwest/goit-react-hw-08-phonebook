import React from "react";
import { connect } from "react-redux";
import styles from "./Filtter.module.css";
import PropTypes from "prop-types";

import { filterSelector } from "../../redux/contacts/contacts.selectors";
import { filterContact } from "../../redux/contacts/contacts.actions";

const Filter = ({ filter, handleChange }) => {
  return (
    <label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Find contact by name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: filterSelector(state),
});

const mapDispatchToProps = {
  handleChange: (evt) => filterContact(evt.target.value),
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
