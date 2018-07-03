import React from "react";
import { Blog } from "../components/Article";

export default class BlogPage extends React.Component {
  render() {
    const tagPosts = this.props.pathContext.posts;
    return <Blog posts={tagPosts} />;
  }
}
