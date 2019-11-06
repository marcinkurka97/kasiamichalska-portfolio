import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors } from 'utils';
import ThreeD1 from 'assets/images/3d.png';
import ThreeD2 from 'assets/images/mir.png';
import ThreeD3 from 'assets/images/donuuut.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 80vh;
  background: ${colors.light};
  flex-direction: row;
  justify-content: space-between;
  z-index: 5;
`;

const ThreeDTitle = styled.h1`
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
    height: 80%;
    width: 32.5%;
  }

  .threeD1 {
    background-image: url(${ThreeD1});
  }

  .threeD2 {
    width: 25%;
    background-image: url(${ThreeD2});
    background-position: 70% center;
  }

  .threeD3 {
    background-image: url(${ThreeD3});
  }
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
