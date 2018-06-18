import React from "react";
import Link from "gatsby-link";
import styled from "react-emotion";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import FaSearch from "@fortawesome/fontawesome-free-solid/faSearch";
import Logo from "../../../static/icons/420smokers.png";

const HeaderContainer = styled.header`
  width: 100%;
  background: #ffffff;
  color: #000000;
  border-bottom: 4px solid black;
  z-index: 9999;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
  position: fixed;
  top: 0;
  height: 80px;
`;

const FlContainer = styled.nav`
  position: relative;
  display: table;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 1em;
  padding-bottom: 1em;
`;

// const MenuIcon = styled(FontAwesomeIcon)`
//   position: relative;
//   display: block;
//   float: left;
//   width: 22px;
//   height: 63px;
//   margin-top: 0;
//   padding: 0;
//   background-color: transparent !important;
//   overflow: hidden;
// `;

// const MenuText = styled.div`
//   display: block;
//   float: left;
//   position: relative;
//   padding: 0 20px;
//   text-transform: uppercase;
//   span {
//     display: block;
//     font-size: 24px;
//     line-height: 64px;
//   }
// `;

const TopLogo = styled.div`
  float: left;
  margin-right: 20px;
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  width: 10%;
  img {
    max-height: 44px;
    display: table-cell;
    vertical-align: middle;
  }
`;

const TopMenu = styled.div`
  float: left;
  text-transform: uppercase;
  display: table-cell;
  vertical-align: middle;
  width: 75%;
  li {
    position: relative;
    display: inline-block;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  float: left;
  height: 100%;
  width: 13%;
  display: table-cell;
  vertical-align: middle;
  svg {
    float: right;
  }
  div {
    float: left;
    width: 3rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <FlContainer>
      {/* <div className="mobile-menu"> */}
      {/* <MenuIcon size="lg" icon={faBars} />
        <MenuText>
          <span>menu</span>
        </MenuText> */}
      {/* </div> */}
      <TopLogo>
        <Link to="/">
          <img src={Logo} />
        </Link>
      </TopLogo>
      <TopMenu>
        <ul>
          <li>Reviews</li>
          <li>Headshops</li>
          <li>Growing</li>
          <li>News</li>
          <li>Lifestyle</li>
          <li>Studies</li>
        </ul>
      </TopMenu>
      <SearchContainer>
        <ul>
          <div></div>
          <FontAwesomeIcon size="lg" icon={FaSearch} />
        </ul>
      </SearchContainer>
    </FlContainer>
  </HeaderContainer>
);

export default Header;
