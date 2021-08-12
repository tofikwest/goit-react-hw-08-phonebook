import React from "react";
import { connect } from "react-redux";
import styles from "./UserMenu.module.css";

import defaultAvatar from "../../images/avatar.png";
import { logOut } from "../../redux/auth/auth.operations";
import { getNameSelector } from "../../redux/auth/auth.selectors";

const UserMenu = ({ name, avatar, onLogout }) => {
  return (
    <div className={styles.userContainer}>
      <span className={styles.userTitle}>Welcome, {name}! </span>{" "}
      <img src={avatar} alt="" width="33" className={styles.avatarImg} />
      <button type="button" onClick={onLogout} className={styles.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getNameSelector(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
