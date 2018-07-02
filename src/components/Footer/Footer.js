import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { SocialIcon } from "react-social-icons";

const MainContainer = styled.div`
  z-index: 10000;
  width: 100%;
  background-color: black;
  padding: 1.2em;
  div.socialIcons {
    z-index: 1000;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-width: 0.13em;
    border-bottom-width: 0.13em;
    border-top-color: white;
    border-bottom-color: white;
    margin: auto;
    margin-bottom: 2em;
    padding: 1em;
    width: 60%;
    section.svgItems {
      color: white;
      margin-right: auto;
      margin-left: auto;
      // padding: 0.3em;
      display: table;
    }
  }
  div.moreInfo {
    margin: auto;
    width: 60%;
    color: white;
    section.menuItems {
      margin-right: auto;
      margin-left: auto;
      display: table;
      padding: 0.5em;
      border-spacing: 1.1em;
      div.moreInfoItem {
        display: table-cell;
        text-align: center;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 500;
      }
      div.verticalLine {
        border-left: 0.124em solid white;
        height: 15px;
        display: table-cell;
      }
      div.aboutUsItem {
        display: table-cell;
        text-align: center;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;
const Credits = styled.div`
  width: 100%;
  padding: 1.2em;
  div.credits {
    width: 60%;
    margin: auto;
    text-align: center;
    font-size: 12px;
    div.main {
      font-weight: bold;
      margin: 1em;
    }
  }
`;

const Footer = props => {
  const svgStyle = { height: 25, width: 25, margin: "0.5rem" };
  return (
    <React.Fragment>
      <footer className="">
        <MainContainer>
          <div className="socialIcons">
            <section className="svgItems">
              STAY CONNECTED:
              <SocialIcon
                url="https://facebook.com/420smokers.us"
                network="facebook"
                style={svgStyle}
                color="white"
              />
              <SocialIcon
                url="https://instagram.com/420smokers.us"
                network="instagram"
                style={svgStyle}
                color="white"
              />
              <SocialIcon
                url="https://twitter.com/420smokers.us"
                network="twitter"
                style={svgStyle}
                color="white"
              />
              <SocialIcon
                url="https://youtube.com/420smokers.us"
                network="youtube"
                style={svgStyle}
                color="white"
              />
            </section>
          </div>
          <div className="">
            <div className="moreInfo">
              <section className="menuItems">
                <div className="aboutUsItem">Home</div>
                <div className="aboutUsItem">About Us</div>
                <div className="aboutUsItem">Contact Us</div>
                <div className="aboutUsItem">Jobs</div>
                <div className="aboutUsItem">Advertise</div>
              </section>
            </div>
            <div className="moreInfo">
              <section className="menuItems">
                <div className="moreInfoItem">Reviews</div>
                <div className="verticalLine" />
                <div className="moreInfoItem">Headshops</div>
                <div className="verticalLine" />
                <div className="moreInfoItem">Growing</div>
                <div className="verticalLine" />
                <div className="moreInfoItem">News</div>
                <div className="verticalLine" />
                <div className="moreInfoItem">Lifestyle</div>
                <div className="verticalLine" />
                <div className="moreInfoItem">Studies</div>
              </section>
            </div>
          </div>
        </MainContainer>
        <Credits>
          <div className="credits">
            <div className="main">MARIJUANA PRODUCT REVIEWS, CRAFTED WITH LOVE FOR MARIJUANA LOVERS</div>
            © 420SMOKERS.US | ALL RIGHTS RESERVED
          </div>
        </Credits>
      </footer>
    </React.Fragment>
  );
};

// Footer.propTypes = {
//   html: PropTypes.string,
//   theme: PropTypes.object.isRequired
// };

export default Footer;
