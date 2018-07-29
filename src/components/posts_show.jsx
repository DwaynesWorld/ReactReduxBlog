import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      //Could be stale
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  render() {
    const { post } = this.props;

    if (!post) return <div>Loading!!!</div>;

    return (
      <div>
        <Link to="/">All Posts</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onClickDelete}
        >
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }

  onClickDelete = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  };
}

export default connect(
  ({ posts }, ownProps) => {
    const { id } = ownProps.match.params;
    return { post: posts[id] };
  },
  { fetchPost, deletePost }
)(PostsShow);
