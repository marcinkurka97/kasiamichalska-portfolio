import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'components/SectionTemplate';
import { colors } from 'utils';
import zIndex from 'utils/zindex';
import HeroImg from 'assets/images/profile.png';
// import HeroImg2 from 'assets/images/profile2.jpg';
import DotsSVG from 'assets/images/KROPKI.svg';

const HeroWhiteBox = styled.div`
  position: relative;
  top: 5%;
  width: 35vw;
  height: 35vw;
  background: ${colors.light};
  z-index: ${zIndex.level5};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 12%;
  left: -35%;
  width: 25vw;
  height: 25vw;
  background-image: url(${HeroImg});
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 18%;
    left: -12%;
    width: 100%;
    height: 100%;
    background-image: url(${DotsSVG});
    background-size: contain;
    z-index: -1;
  }
`;

const HeroQuote = styled.div`
  width: 80%;
  position: relative;
  right: -50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  q {
    font-size: 40px;
    text-align: center;
    font-weight: 800;
    font-style: italic;
  }

  p {
    width: 100%;
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    padding: 0 20px;
  }
`;

const HeroSection = () => (
  <SectionTemplate>
    <HeroWhiteBox>
      <HeroImage />
      <HeroQuote>
        <q>
          There are three responses to a piece of design – yes, no, and WOW!
          <br />
          Wow is the one to aim for.
        </q>
        <p> - Milton Glaser</p>
      </HeroQuote>
    </HeroWhiteBox>
  </SectionTemplate>
);

export default HeroSection;
