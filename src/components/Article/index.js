import React from "react";
import { Flex, Box } from "grid-emotion";
import styled from "react-emotion";
import Img from "gatsby-image";
import Link from "gatsby-link";
import { Main, Newsletter, Giveaway } from "../Layout";

const Article = styled.div`
  section.title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0.5em;
  }
`;

const ArticleBig = ({ data: { title, text, header_image, date, section }, slugs }) => {
  console.log(slugs);
  return (
    <Flex flexWrap="wrap" alignItems="center">
      <Article>
        <Box p={1} width={1}>
          <Link to={`/${section}/${slugs}`}>
            <section className="title">{title.text}</section>
          </Link>
        </Box>
        <Flex flexWrap="wrap" alignItems="center">
          <Box p={1} width={[1, null, 1 / 2]}>
            <Link to={`/${section}/${slugs}`}>
              <Img sizes={header_image.localFile.childImageSharp.sizes} />
            </Link>
          </Box>
          <Box p={1} width={[1, null, 1 / 2]}>
            <Flex flexDirection="column">
              <Box p={1} height={3 / 4}>
                <div className="snippet">
                  <p>{`${text.text.slice(0, 250)}...`}</p>
                </div>
              </Box>
              <Box p={1} height={1 / 4}>
                {date} | <Link to={`/${section}`}>{section}</Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Article>
    </Flex>
  );
};

const ArticleSmall = ({ data: { title, text, header_image, date, section }, slugs }) => (
  <Flex className="" flexDirection="column" flexWrap="wrap" alignItems="center">
    <Article>
      <Box p={2}>
        <Link to={`/${section}/${slugs}`}>
          <Img sizes={header_image.localFile.childImageSharp.sizes} />
        </Link>
      </Box>
      <Box p={1}>
        <Link to={`/${section}/${slugs}`}>
          <section className="title">{title.text}</section>
        </Link>
      </Box>
      <Flex flexWrap="wrap" alignItems="center">
        <Box p={1} height={1 / 2}>
          <Flex flexDirection="column">
            <Box p={1} height={3 / 4}>
              <div className="snippet">
                <p>{`${text.text.slice(0, 200)}...`}</p>
              </div>
            </Box>
            <Box p={1} height={1 / 4}>
              {date} | <Link to={`/${section}`}>{section}</Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Article>
  </Flex>
);

const ArticleEl = ({ data, size, slugs }) => {
  const Component = size ? ArticleBig : ArticleSmall;
  console.log("Data", data);
  return <Component data={data} slugs={slugs} />;
};

export const Blog = ({ posts }) => {
  const smallArticleWidths = [1, 1 / 2, 1 / 2, 1 / 4]
  const bigArticleWidths = [1, null, null, 1 / 2]
  return (
    <React.Fragment>
      <Main className="">
        <Flex flexWrap="wrap" alignItems="center">
          <Box width={bigArticleWidths}>
            <ArticleEl size={true} data={posts[0].node.data} slugs={posts[0].node.slugs[0]} />
          </Box>
          <Box width={bigArticleWidths}>
            <ArticleEl size={true} data={posts[0].node.data} slugs={posts[0].node.slugs[0]} />
          </Box>
        </Flex>
        <hr />
        <Flex flexWrap="wrap" alignItems="center">
          <Box width={smallArticleWidths}>
            <ArticleEl data={posts[0].node.data} slugs={posts[0].node.slugs[0]} />
          </Box>
          <Box width={smallArticleWidths}>
            <ArticleEl data={posts[0].node.data} slugs={posts[0].node.slugs[0]} />
          </Box>
          <Box width={smallArticleWidths}>
            <ArticleEl data={posts[0].node.data} slugs={posts[0].node.slugs[0]} />
          </Box>
          <Box width={smallArticleWidths}>
            <ArticleEl data={posts[0].node.data} slugs={posts[0].node.slugs[0]} />
          </Box>
        </Flex>
      </Main>
      <Giveaway />
      <Newsletter />
    </React.Fragment>
  );
};
