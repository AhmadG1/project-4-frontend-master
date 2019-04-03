import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { setUser } from "../services/AuthService";

class ShowRecipe extends Component {
    state = {
        formData: {
          title : null,
          description: null,
          image: null
        },
        err: null
      };
    
      handleRequest = recipe => {
        let url = `${apiUrl}/api/recipe/${recipe.id}`;
    
        fetch(url, {
          mode: "cors",
          credentials: "include",
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ recipe: recipe })
        })
          .then(res => res.json())
          .then(data => {
            if (data.error) this.setState({ err: data.error });
            else {
              this.props.changeActivePage('home')
            }
          })
          .catch(e => console.log(e));
      };
      handleSubmit = e => {
        e.preventDefault();
        this.handleRequest(this.props.recipe);
      };


  render() {
    const customStyle = {
        background: "url(" + this.props.recipe.image + ")",
    }
    return (
      <div>
          <div style={customStyle}></div>
          <div>{this.props.recipe.title}</div>
          <div>{this.props.recipe.description}</div>
          <div>{this.props.recipe.body}</div>
          <button onClick={() => this.props.changeActivePage("edit-recipe")}> Edit Recipe </button>
          <button onClick={() => this.props.changeActivePage("home")}> Back </button>
          <button onClick={this.handleSubmit}> Delete </button>
      </div>
    );
  }
}

export default ShowRecipe;