import React from "react";
import { Blog } from "../components/Article";

export default class BlogPage extends React.Component {
  render() {
    const posts = this.props.data.allPrismicBlog.edges
    return <Blog posts={posts} />;
  }
}

export const GrowingQuery = graphql`
  query SectionQuery($section: String!) {
    allPrismicBlog(filter: { data: { section: { eq: $section } } }) {
      edges {
        node {
          id
          slugs
          data {
            tags1 {
              tag {
                document {
                  data {
                    tag
                  }
                }
              }
            }
            section
            title {
              html
              text
            }
            subtitle {
              html
              text
            }
            text {
              html
              text
            }
            date
            header_image {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 1400, quality: 85) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            image_creds {
              html
              text
            }
            author {
              document {
                id
                data {
                  name {
                    html
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
