import "./PostAddForm.css";
import React from "react";

export default class PostAddForm extends React.Component {
  state = {
    text: ""
  };
  onValueChange = this.onValueChange.bind(this);
  onSubmit = this.onSubmit.bind(this);

  onValueChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ""
    });
  }

  render() {
    const { text } = this.state;
    return (
      <form className="botton-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          pleceholder="Whet are you thinking about"
          className="form-control new-post-label"
          value={text}
          onChange={this.onValueChange}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add Post
        </button>
      </form>
    );
  }
}
