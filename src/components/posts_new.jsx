import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field name="content" label="Content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }

  renderField = field => {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  };

  onSubmit = values => {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  };
}

const validate = values => {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters.";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories.";
  }

  if (!values.content) {
    errors.content = "Enter some content please.";
  }

  return errors;
};

var connectedPostNew = connect(
  null,
  { createPost }
)(PostsNew);

export default reduxForm({ validate, form: "PostNewForm" })(connectedPostNew);
