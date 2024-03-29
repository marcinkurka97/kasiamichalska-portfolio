import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors, media } from 'utils';
import ThreeD1 from 'assets/images/3d.png';
import ThreeD2 from 'assets/images/mir.png';
import ThreeD3 from 'assets/images/donuuut.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 80vh;
  background: ${colors.light};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 5;

  ${media.tablet`
    height: 55vh;
  `}

  ${media.phone`
    flex-direction: column;
    height: 90vh;
  `}
`;

const ThreeDTitle = styled.h2`
  position: relative;
  right: 20%;
  top: -5%;
  height: 80%;
  font-size: 50px;
  border-left: 1px solid ${colors.dark};
  writing-mode: tb-rl;
  text-align: right;
  font-style: italic;

  &:after {
    content: '';
    position: absolute;
    width: 80vw;
    height: 1px;
    background: ${colors.dark};
    z-index: 10;
    top: 0;
    right: 61px;
  }

  ${media.laptop`
    right: 15%;
    padding: 0 10px;

    &:after {
      width: 100vw;
      right: 81px;
    }
  `}

  ${media.tablet`
    right: 0;
    height: 92%;
    padding: 0 10px;

    &:after {
      width: 100vw;
      right: 81px;
    }
  `}

  ${media.phone`
    writing-mode: lr-tb;
    border: none;
    border-bottom: 1px solid ${colors.dark}
    height: auto;
    order: 1;
    margin: 20px 0 0 0;
    top: 0;
    right: 20vw;
    width: 80vw;
    text-align: center;
    font-size: 40px;

    &:after {
      display: none;
    }
  `}
`;

const ThreeDWrapper = styled.div`
  position: relative;
  height: 70%;
  width: 70vw;
  background: ${colors.lead};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .threeDs {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 87.5%;
    width: 32.5%;
  }

  .threeD1 {
    background-image: url(${ThreeD3});
  }

  .threeD2 {
    width: 25%;
    background-image: url(${ThreeD2});
    background-position: 100% center;
  }

  .threeD3 {
    background-image: url(${ThreeD1});
  }

  ${media.tablet`
    width: 90vw;
    height: 50vh;
  `}

  ${media.phone`
    width: 100vw;
    height: 85%;
    order: 2;
    align-self: flex-start;
    flex-direction: column;

    .threeDs {
      height: 30%;
      width: 94%;
    }

    .threeD1 {
      background-position: center 40%;
    }

    .threeD3 {
      background-position: center 60%;
    }
  `}
`;

const ThreeDSection = () => (
  <SectionTemplateWhite>
    <ThreeDWrapper>
      <div className="threeDs threeD1" />
      <div className="threeDs threeD2" />
      <div className="threeDs threeD3" />
    </ThreeDWrapper>
    <ThreeDTitle>grafiki 3d</ThreeDTitle>
  </SectionTemplateWhite>
);

export default ThreeDSection;
