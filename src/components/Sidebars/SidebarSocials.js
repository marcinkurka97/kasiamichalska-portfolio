import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, media } from 'utils';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledSidebar = styled.div`
  position: fixed;
  top: 70%;
  left: -6.5%;
  z-index: 1000;
  transform: rotate(-90deg);
  animation: ${FadeIn} 1.2s 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span:first-of-type {
      background: ${colors.dark};
      color: ${colors.light};
      font-weight: 700;
      padding: 5px 10px;
      font-size: 10px;
      text-transform: uppercase;
    }

    span:nth-child(2) {
      font-size: 20px;
      padding: 0 10px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
    }

    li {
      display: inline-block;
      margin: 6px 10px;
      font-size: 12px;
      font-weight: 600;

      a {
        text-decoration: none;
        color: ${colors.dark};
      }

      a:hover {
        opacity: 0.6;
      }
    }

    li:first-of-type {
      margin-left: 5px;
    }
  }

  ${media.tablet`
    height: 30px;
    top: 80vh;
    left: -12.5%;
  `}

  ${media.phone`
    display: none;
  `}
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <div>
        <span>Follow</span>
        <span>-</span>
        <ul>
          <li>
            <a href="https://www.behance.net/katmich">behance</a>
          </li>
          <li>
            <a href="https://www.instagram.com/kat_illustrations/">instagram</a>
          </li>
          <li>
            <a href="https://dribbble.com/cattleia">dribbble</a>
          </li>
          <li>
            <a href="https://www.artstation.com/cattleeia">artstation</a>
          </li>
        </ul>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
