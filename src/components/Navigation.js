import React, { Component } from 'react';
import styled from 'styled-components';
import zindex from 'utils/zindex';
import Logo from 'assets/images/logo1.svg';
import { colors, media } from 'utils';

const NavigationWapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 24px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${zindex.level9};

  ${media.phone`
    padding: 0;
  `}
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;

  ${media.phone`
    height: 100px;
    width: 20vw;
    order: 2;
    margin: 10px 10px 0 0;
  `}
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

    button {
      padding: 0;
      background: none;
      border: none;
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

  ${media.phone`
    height: 50px;
    width: 80vw;
    margin: 0;
    justify-content: center;
    border: none;

    ul {
      display: flex;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        top: 150%;
        width: 100%;
        height: 1px;
        background: ${colors.dark}
      }
    }

    ul li {
      position: relative;
      padding: 0 10px;
      display: flex;
      left: -10px;
      
      button {
        font-size: 14px;
      }
    }
  `}
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollTo = element => {
    window.scroll({
      top: document.getElementById(element).offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <NavigationWapper>
        <LogoContainer />
        <StyledNavButtons>
          <ul>
            <li>
              <button type="button" onClick={() => this.scrollTo('home')}>
                home
              </button>
            </li>
            <li>
              <button type="button" onClick={() => this.scrollTo('about')}>
                o mnie
              </button>
            </li>
            <li>
              <button type="button" onClick={() => this.scrollTo('works')}>
                prace
              </button>
            </li>
            <li>
              <button type="button" onClick={() => this.scrollTo('contact')}>
                kontakt
              </button>
            </li>
          </ul>
        </StyledNavButtons>
      </NavigationWapper>
    );
  }
}

export default Navigation;
