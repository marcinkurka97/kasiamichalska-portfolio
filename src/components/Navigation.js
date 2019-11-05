import React, { Component } from 'react';
import styled from 'styled-components';
import zindex from 'utils/zindex';
import Logo from 'assets/images/logo1.svg';
import SmoothScroll from 'smooth-scroll';
import { colors } from 'utils';

const NavigationWapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 24px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${zindex.level9};
`;

const StyledLogo = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledNavButtons = styled.div`
  margin-top: -50px;
  height: 60px;
  width: 90vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid black;

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    display: inline;
    padding: 0 0 0 60px;

    a {
      text-decoration: none;
      color: ${colors.dark};
      font-weight: 300;
      font-size: 22px;
      transition: 0.25s;

      &:hover {
        font-weight: 500;
      }
    }
  }
`;

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationWapper>
        <StyledLogo />
        <StyledNavButtons>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">o mnie</a>
            </li>
            <li>
              <a href="#works">prace</a>
            </li>
            <li>
              <a href="#contact">kontakt</a>
            </li>
          </ul>
        </StyledNavButtons>
      </NavigationWapper>
    );
  }
}

export default Navigation;
