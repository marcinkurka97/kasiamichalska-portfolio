import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, media } from 'utils';

const slideIn = keyframes`
  0% {
    transform: translateY(500px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledSidebarScroll = styled.div`
  position: fixed;
  top: 77.5%;
  right: -3%;
  transform: rotate(-90deg);
  z-index: 1000;
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    width: 100%;
    height: 100%;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    text-decoration: none;
    font-size: 12px;
    color: ${colors.dark};
    font-weight: 700;
    transition: opacity 0.6s;
    animation: ${slideIn} 0.6s ease-in-out;

    span {
      font-size: 30px;
      transition: transform 0.6s;
    }
  }

  .btn-top {
    display: none;
    width: 120px;
    right: 40px;
  }

  .btn:hover {
    opacity: 0.6;
  }

  .btn-bot:hover > span {
    transform: translateX(-10px);
    transition: transform 0.6s;
  }

  .btn-top:hover > span {
    transform: translateX(10px);
    transition: transform 0.6s;
  }

  ${media.tablet`
    top: 86%;
    right: -4%;

    .btn-top {
      right: 30px;
    }
  `}

  ${media.phone`
    display: none;
  `}
`;

class SidebarScroll extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToBottom = () => {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  handleScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c >= 0.4 * window.innerHeight) {
      document.querySelector('.btn-bot').style.display = 'none';
      document.querySelector('.btn-top').style.display = 'flex';
    }

    if (c <= 0.4 * window.innerHeight) {
      document.querySelector('.btn-bot').style.display = 'flex';
      document.querySelector('.btn-top').style.display = 'none';
    }
  };

  render() {
    return (
      <StyledSidebarScroll>
        <button
          type="button"
          className="btn btn-bot"
          onClick={this.scrollToBottom}
        >
          <span>&#8592;</span>scroll to discover more
        </button>

        <button
          type="button"
          className="btn btn-top"
          onClick={this.scrollToTop}
        >
          scroll to top<span>&#8594;</span>
        </button>
      </StyledSidebarScroll>
    );
  }
}

export default SidebarScroll;
