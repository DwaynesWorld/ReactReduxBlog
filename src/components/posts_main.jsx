import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostsMain extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post Item</div>;
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostsMain);
