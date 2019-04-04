import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ShowRecipe from "./components/ShowRecipe";
import CreateRecipe from "./components/CreateRecipe";
import EditRecipe from "./components/EditRecipe";
class App extends Component {
  state = {
    user: null,
    activePage: "home",
    activeRecipe: null 
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  setActiveRecipe = activeRecipe => {
    this.setState({ activeRecipe });
    this.changeActivePage("show-recipe")
  }

  onCreateRecipe = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("create-recipe");
  };

  onEditRecipe = (activePage, id ) => {
    this.setState({ user: getUser() });
    this.setState({ activePage: activePage, user: id});
    this.changeActivePage("edit-recipe");
  };

  changeActivePage = activePage => {
    this.setState({ activePage });
  };
  onSignin = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("home");
  };
  onSignout = () => {
    console.log("sign out");
    this.setState({ user: null });
    Signout();
  };
  render() {
    const { user, activePage } = this.state;
    return (
      <div>
        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />
            {activePage === "home" ? <Home changeActivePage={this.changeActivePage} setActiveRecipe={this.setActiveRecipe}/> : ""}

        <div className="container">
      
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "change-password" ? (
            <ChangePasswordForm changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "profile" ? <Profile changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "show-recipe" ? <ShowRecipe recipe= { this.state.activeRecipe} changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "create-recipe" ? <CreateRecipe changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "edit-recipe" ? <EditRecipe id={this.state.activeRecipe.id} changeActivePage={this.changeActivePage} /> : ""}
        </div>
      </div>
    );
  }
}

export default App;
