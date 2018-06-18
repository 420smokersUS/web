import React from "react";
import styled from "react-emotion";
import { Flex, Box } from "grid-emotion";

const Main = styled.div`
  margin-top: 85px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

const Article = styled.div`
  section.title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  img {
  }
  section.moreInfo {
  }
`;

const snippet =
  "The main objective of any cannabis farmer is to grow and produce a high yield with of course a potent fragrant bud.";

const ArticleBig = () => (
  <Flex flexWrap="wrap" alignItems="center">
    <Article>
      <Box p={1} width={1}>
        <section className="title">Is Cannabis Good For Your Health?</section>
      </Box>
      <Flex flexWrap="wrap" alignItems="center">
        <Box p={1} width={1 / 2}>
          <Flex flexDirection="column">
            <Box p={1} height={3 / 4}>
              <div className="snippet">
                <p>{snippet}</p>
              </div>
            </Box>
            <Box p={1} height={1 / 4}>
              May 25, 2018 | News
            </Box>
          </Flex>
        </Box>
        <Box p={1} width={1 / 2}>
          <img src="https://420smokers.us/wp-content/uploads/2017/10/cannabis-garden.jpg" />
        </Box>
      </Flex>
    </Article>
  </Flex>
);

const ArticleSmall = () => (
  <Flex flexDirection="column" flexWrap="wrap" alignItems="center">
    <Article>
      <Box>
        <img src="https://420smokers.us/wp-content/uploads/2017/10/cannabis-garden.jpg" />
      </Box>
      <Box p={1}>
        <section className="title">Is Cannabis Good For Your Health?</section>
      </Box>
      <Flex flexWrap="wrap" alignItems="center">
        <Box p={1} height={1 / 2}>
          <Flex flexDirection="column">
            <Box p={1} height={3 / 4}>
              <div className="snippet">
                <p>{snippet}</p>
              </div>
            </Box>
            <Box p={1} height={1 / 4}>
              May 25, 2018 | News
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Article>
  </Flex>
);

export default class BlogPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Main className="">
          <Flex flexWrap="wrap" alignItems="center">
            <Box p={3} width={1 / 2}>
              <ArticleBig />
            </Box>
            <Box p={3} width={1 / 2}>
              <ArticleBig />
            </Box>
          </Flex>
          <Flex flexWrap="wrap" alignItems="center">
            <Box p={3} width={1 / 4}>
              <ArticleSmall />
            </Box>
            <Box p={3} width={1 / 4}>
              <ArticleSmall />
            </Box>
            <Box p={3} width={1 / 4}>
              <ArticleSmall />
            </Box>
            <Box p={3} width={1 / 4}>
              <ArticleSmall />
            </Box>
          </Flex>
        </Main>
      </React.Fragment>
    );
  }
}
