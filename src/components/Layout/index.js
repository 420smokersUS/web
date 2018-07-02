import styled from "react-emotion";
import React from "react";

export const Main = styled.div`
  margin-top: 85px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
`;

const GiveawayContainer = styled.div`
  height: 30em;
  position: relative;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  svg {
    width: 100%;
    height: 100%;
  }
  div.paragraphText {
    position: absolute;
    height: 30em;
    display: table;
    max-width: 45%;
    margin-left: 12em;
    div {
      font-weight: 600;
      display: table-cell;
      vertical-align: middle;
      h1 {
        margin: 1em;
      }
      p {
        margin: 2em;
      }
      a.button {
        margin: 2em;
        background-color: #000;
        color: white;
        text-transform: uppercase;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        display: inline-block;
        text-decoration: none;
        opacity: 1;
      }
      .button:hover {
        opacity: 0.5;
      }
      .button:focus {
        opacity: 0.5;
      }
    }
  }
`;

const NewsletterContainer = styled.div`
  height: 30em;
  position: relative;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  display: table;
  width: 100%;
  div.container {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    p {
      font-weight: 600;
    }
    div.emailBox {
      height: 2em;
      border-top-style: solid;
      border-bottom-style: solid;
      border-width: 1px;
      // width: 60%;
      margin-right: auto;
      margin-left: auto;
      display: table;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      input {
        display: table-row;
        text-align: center;
        float: left;
        margin-right: 1em;
      }
      a.button {
        // margin-top: 1em;
        // margin-bottom: 1em;
        margin-left: 1em;
        background-color: #000;
        color: white;
        text-transform: uppercase;
        padding-left: 0.5em;
        padding-right: 0.5em;
        padding-top: 0.3em;
        padding-bottom: 0.3em;
        text-decoration: none;
        opacity: 1;
        float: right;
        display: table-row;
      }
      .button:hover {
        opacity: 0.5;
      }
      .button:focus {
        opacity: 0.5;
      }
      div.verticalLine {
        width: 3px;
        background-color: black;
        height: 100%;
        display: table-row;
        float: left;
      }
    }
  }
`;

export const Newsletter = () => (
  <NewsletterContainer>
    <div className="container">
      <h1>JOIN OUR SMOKE WELL, BE WELL CULTURE.</h1>
      <p>Stay up to date with the latest 420Smokers Content from the best Marijuana Site</p>
      <div className="emailBox">
        <form>
          <input value="ENTER YOUR EMAIL" />
          <div className="verticalLine" />
          <a className="button">Sign me up!</a>
        </form>
      </div>
    </div>
  </NewsletterContainer>
);

export const Giveaway = () => (
  <GiveawayContainer>
    <div className="paragraphText">
      <div>
        <h1>JOIN OUR GIVEAWAYS NOW!</h1>
        <p>
          Stay up to date with the latest 420Smokers Content from the best Marijuana Site We are
          always trying to give back to stoners. That for we launch weekly giveaways for you to try
          out now.
        </p>
        <a className="button">Join our giveaway!</a>
      </div>
    </div>
    <svg style={{ width: "100%", height: "100%" }}>
      <line x1="50%" y1="100%" x2="80%" y2="0" style={{ stroke: "rgb(0,0,0)", strokeWidth: 1 }} />
    </svg>
  </GiveawayContainer>
);
