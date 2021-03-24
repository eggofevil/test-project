import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const UserPane = () => {
  const [authStatus, setAuthStatus] = useState(`false`);
  return (
    <Link className="header__nav-link header__nav-link--profile" to="/login">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  );
};

export default UserPane;
