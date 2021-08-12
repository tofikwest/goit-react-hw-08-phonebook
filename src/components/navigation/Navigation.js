import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthSelector } from "../../redux/auth/auth.selectors";
import styles from "./Navigation.module.css";

const Navigation = ({isAuth}) => {
  return (
    <div className={styles.thumb}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Main
          </NavLink>
        </li>
        <li className={styles.item}>
          {isAuth && (
            <NavLink
              to="/contacts"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: getIsAuthSelector(state),
});


export default connect(mapStateToProps)(Navigation);
