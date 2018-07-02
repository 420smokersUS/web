import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "react-emotion";
import { Flex, Box } from "grid-emotion";
import { Main, Newsletter, Giveaway } from "../components/Layout";
import { EADDRNOTAVAIL } from "constants";

const Header = styled(Box)`
  h2.title {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
`;

const Posts = styled(Box)`
  font-size: 10pt;
  div.title {
    margin-right: 2em;
    font-weight: 600;
    margin-bottom: 0.4em;
  }
  div.number {
    text-align: center;
  }
  hr {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  div.date {
    margin-right: 2em;
  }
`;

const TrendingContainer = styled(Box)`
  border-style: solid;
  border-width: 2px;
  height: 35em;
`;

const Post = props => (
  <Flex m={2} flexWrap="nowrap" alignItems="center">
    <Box width={1 / 6}>
      <div className="number">{`${props.number}.`}</div>
    </Box>
    <Box width={5 / 6} className="post">
      <div className="title">The real marijuana bible this real istanse.</div>
      <div className="date">May 25, 2018 | News</div>
      <hr />
    </Box>
  </Flex>
);

const postNumbers = [1, 2, 3, 4, 5, 6];
const posts = postNumbers.map(number => <Post key={number} number={number} />);

const BigArticle = styled(Box)`
  border-style: solid;
  border-width: 2px;
  height: 35em;
`;

const Title = styled.div`
  margin-top: 105px;
  margin-bottom: 2em;
  span.subtitle {
    font-weight: 600;
  }
`;

const FullHeightFlex = styled(Flex)`
  height: 100%;
  div.description {
    font-weight: 600;
    font-size: 10pt;
  }
`;

const marginDiv = css`
  margin-top: 2em;
`;

class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Main>
          <Title>
            <h1>READY TO LEARN MORE ABOUT MARIJUANA?</h1>
            <span className="subtitle">
              Find everything realated to marijuana on the latest News.
            </span>
          </Title>
          <Flex className="" flexWrap="nowrap" alignItems="center">
            <TrendingContainer m={1} p={2} width={[1, 1 / 3]}>
              <Flex flexDirection="column">
                <Header>
                  <h2 className="title">Trending</h2>
                </Header>
                <Posts height={3 / 4}>{posts}</Posts>
              </Flex>
            </TrendingContainer>
            <BigArticle p={2} m={1} width={[1, 2 / 3]} alignSelf="flex-end">
              <FullHeightFlex flexWrap="wrap" flexDirection="column-reverse">
                <Box mb={4} mx={4}>
                  <div className="date">May 25, 2018 | News</div>
                  <h2 className="title">Fighting for the Legalization in Paragauy and Columbia.</h2>
                  <div className="description">
                    Stay up to date with the latest product reviews, news, lifestlye, tips and much
                    more from 420Smokers to come from us.
                  </div>
                </Box>
              </FullHeightFlex>
            </BigArticle>
          </Flex>
        </Main>
        <div className={marginDiv}>
          <Giveaway />
          <Newsletter />
        </div>
      </React.Fragment>
    );
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.object.isRequired
// };

export default IndexPage;
