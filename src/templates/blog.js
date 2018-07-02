import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
// import asyncComponent from "../components/AsyncComponent";
import Share from "../components/Post/Share";
import Tags from "../components/Post/Tags";
import themeObjectFromYaml from "../theme/theme.yaml";

// const Share = asyncComponent(() =>
//   import("../components/Post/Share")
//     .then(module => {
//       return module;
//     })
//     .catch(error => {})
// );

const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: left;
  h1 {
    max-width: 30em;
    font-weight: bold;
  }
  span.container {
    position: absolute;
    bottom: 0rem;
    left: 50%;
    transform: translate(-50%, -15%);
    background-color: white;
    padding-left: 3em;
    padding-right: 3em;
    width: 60%;
  }
  h3 {
    font-weight: 525;
  }
  div.details {
    margin-bottom: 0.5em;
  }
`;

const MainPart = styled.div`
  width: 100%;
  margin-top: 8em;
`;

const CenteredComponent = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 60%;
  display: table;
  div.author {
    display: table-cell;
    float: left;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  div.text2 {
    display: table-cell;
    float: left;
  }
  span.socialShareTop {
    float: right;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

// const BottomShare = styled.div`
//   position: relative;
//   width: 100%;
//   margin-top: 8em;
//   div.content {
//     position: absolute;
//     bottom: -1.5rem;
//     left: 50%;
//     transform: translate(-50%, 0%);
//     width: 60%;
//   }
// `;

// Ova treba da bide gatsby template
export default class BlogPage extends React.Component {
  render() {
    const {
      data: {
        prismicBlog: { data: data, uid: uid, slugs: slugs, id: id }
      }
      // uid: prismicBlog: { uid: uid }
    } = this.props;
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(data.date);
    const formattedDate = date.toLocaleDateString("en-US", options);
    return (
      <React.Fragment>
        <HeaderContainer>
          <Img sizes={data.header_image.localFile.childImageSharp.sizes} />
          <span className="container">
            <div dangerouslySetInnerHTML={{ __html: data.title.html }} />
            <h3>{data.subtitle.text}</h3>
            <div className="details">
              <span>{formattedDate}</span> &nbsp; | &nbsp; Image by:{" "}
              <span>{data.image_creds.text}</span>
            </div>
          </span>
        </HeaderContainer>
        <div className="">
          <MainPart>
            <CenteredComponent>
              <div className="author">
                <h3 className="author">By: {data.author.document[0].data.name.text}</h3>
                {formattedDate}
              </div>
              <span className="socialShareTop">
                <Share post={this.props.data.prismicBlog} theme={themeObjectFromYaml} />
              </span>
            </CenteredComponent>
            <CenteredComponent>
              <div dangerouslySetInnerHTML={{__html: data.text.html}} />
            </CenteredComponent>
            <CenteredComponent>
              <Tags tags={['tag1', 'tag2']} />
              <Share post={this.props.data.prismicBlog} theme={themeObjectFromYaml} />
            </CenteredComponent>
          </MainPart>
        </div>
      </React.Fragment>
    );
  }
}

export const SingleBlogQuery = graphql`
  query PrismicBlog($id: String!) {
    prismicBlog(id: { eq: $id }) {
      uid
      slugs
      id
      data {
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
`;
