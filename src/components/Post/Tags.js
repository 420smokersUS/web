import React from "react";
import styled from "react-emotion";

const TagButton = styled.a`
  border-style: solid;
  border-width: 0.125rem;
  border-radius: 0.5rem;
  display: inline-block;
  color: black;
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0.5rem;
`;

const Tags = props => (
  <React.Fragment>
    Tags: {props.tags.map(tag => <TagButton src="/link/to/tag">{tag}</TagButton>)}
  </React.Fragment>
);

export default Tags;
