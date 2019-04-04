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
        background: "url(" + this.props.recipe.image + ") no-repeat center" ,
        height: "300px",
        
    }
    return (
      <div>
        <style>{'body { background: url(https://www.setaswall.com/wp-content/uploads/2017/06/Blur-Wallpapers-25-1680-x-1050.jpg) no-repeat center center fixed; background-size: cover; }'}</style>
          <div style={customStyle}></div>
          <h1>{this.props.recipe.title}</h1>
          <h3>{this.props.recipe.description}</h3>
          <div>{this.props.recipe.body}</div>
          <button className="btn btn-secondary" onClick={() => this.props.changeActivePage("edit-recipe")}> Edit Recipe </button>
          <button className="btn btn-secondary" onClick={() => this.props.changeActivePage("home")}> Back </button>
          <button className="btn btn-secondary" onClick={this.handleSubmit}> Delete </button>
      </div>
    );
  }
}

export default ShowRecipe;