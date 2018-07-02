import React from "react";
import { Flex, Box } from "grid-emotion";
import { Main, Newsletter, Giveaway } from "../components/Layout";
import { ArticleBig, ArticleSmall } from "../components/Article";

export default class BlogPage extends React.Component {
  render() {
    const smallArticleWidths = [1, 1 / 2, 1 / 2, 1 / 4]
    const bigArticleWidths = [1, null, null, 1 / 2]
    return (
      <React.Fragment>
        <Main className="">
          <Flex flexWrap="wrap" alignItems="center">
            <Box width={bigArticleWidths}>
              <ArticleBig />
            </Box>
            <Box width={bigArticleWidths}>
              <ArticleBig />
            </Box>
          </Flex>
          <hr />
          <Flex flexWrap="wrap" alignItems="center">
            <Box width={smallArticleWidths}>
              <ArticleSmall />
            </Box>
            <Box width={smallArticleWidths}>
              <ArticleSmall />
            </Box>
            <Box width={smallArticleWidths}>
              <ArticleSmall />
            </Box>
            <Box width={smallArticleWidths}>
              <ArticleSmall />
            </Box>
          </Flex>
        </Main>
        <Giveaway />
        <Newsletter />
      </React.Fragment>
    );
  }
}
