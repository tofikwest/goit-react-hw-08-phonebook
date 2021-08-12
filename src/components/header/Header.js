import React from "react";
import Navigation from "../navigation/Navigation";
import AuthNav from "../authNav/AuthNav";

import styles from "./Header.module.css";
import { getIsAuthSelector } from "../../redux/auth/auth.selectors";
import { connect } from "react-redux";
import UserMenu from "../userMenu/UserMenu";

const Header = ({ isAuth }) => {
  return (
    <div className={styles.thumb}>
      <Navigation /> {isAuth ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuthSelector(state),
});

export default connect(mapStateToProps)(Header);
