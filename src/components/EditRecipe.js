import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { setUser } from "../services/AuthService";

class EditRecipe extends Component {
  state = {
    formData: {
      title : null,
      description: null,
      image: null
    },
    err: null
  };

handleSubmit = e => {
    e.preventDefault();
    let url = `${apiUrl}/api/recipe/${this.props.id}`;
    console.log(url);
    console.log(this.state.formData);
    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({recipe: this.state.formData})
    })
      .then(res => res.json())
      .then(data => {
          console.log(data)
        {
          this.props.changeActivePage('show-recipe')
          console.log(this.props.changeActivePage, "s");
        }
      })
      .catch(e => console.log(e));
};

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>Edit Recipe</h1>
        {this.state.err ? (
          <div className="alert alert-warning"> {this.state.err} </div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title </label>
            <input
              name="title"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Description</label>
            <input
              name="description"
              className="form-control"
              type="description"
              onChange={this.handleChange}
            />

            <label>Image URL</label>
            <input
              name="image"
              className="form-control"
              type="text"
              onChange={this.handleChange}
            />

            <label>Body</label>
            <input
              name="description"
              className="form-control"
              type="description"
              onChange={this.handleChange}
            />
          </div>

          <button type="" className="btn btn-primary">
           Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditRecipe;