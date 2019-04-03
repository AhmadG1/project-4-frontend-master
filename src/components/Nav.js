import React from "react";

const authenticatedOptions = (changeActivePage, onSignout) => (
  <React.Fragment>
    <li
      className="nav-item"
      onClick={() => changeActivePage("change-password")}
    >
      <div className="nav-link">Change Password</div>
    </li>
    <li className="nav-item" onClick={() => onSignout()}>
      <div className="nav-link">Sign Out</div>
    </li>
    <li><button onClick={() => changeActivePage("create-recipe")}> Create Recipe </button></li>
  </React.Fragment>
);

const unauthenticatedOptions = changeActivePage => (
  <React.Fragment>
    <li><h1 onClick={() => changeActivePage("home")}> Recipes </h1></li>
    <li className="nav-item" onClick={() => changeActivePage("sign-in")}>
      <div className="nav-link">Sign In</div>
    </li>
    <li className="nav-item" onClick={() => changeActivePage("sign-up")}>
      <div className="nav-link">Sign Up</div>
    </li>
  </React.Fragment>
);

const Nav = ({ user, changeActivePage, onSignout }) => (
  <nav className="navbar navbar-expand-lg navbar-light ">

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto ">
  
        {user
          ? authenticatedOptions(changeActivePage, onSignout)
          : unauthenticatedOptions(changeActivePage)}
     
      </ul>
    </div>
  </nav>
);

export default Nav;
