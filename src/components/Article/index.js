import React from "react";
import { Flex, Box } from "grid-emotion";
import styled from "react-emotion";

const Article = styled.div`
  section.title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0.5em;
  }
`;

const snippet =
  "The main objective of any cannabis farmer is to grow and produce a high yield with of course a potent fragrant bud.";

export const ArticleBig = () => (
  <Flex flexWrap="wrap" alignItems="center">
    <Article>
      <Box p={1} width={1}>
        <section className="title">Is Cannabis Good For Your Health?</section>
      </Box>
      <Flex flexWrap="wrap" alignItems="center">
        <Box p={1} width={[1, null, 1 / 2]}>
          <img src="https://420smokers.us/wp-content/uploads/2017/10/cannabis-garden.jpg" />
        </Box>
        <Box p={1} width={[1, null, 1 / 2]}>
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

export const ArticleSmall = () => (
  <Flex className="" flexDirection="column" flexWrap="wrap" alignItems="center">
    <Article>
      <Box p={2}>
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
