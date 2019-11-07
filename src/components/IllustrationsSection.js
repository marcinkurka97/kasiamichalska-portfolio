import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors, media } from 'utils';
import Illustration1 from 'assets/images/mohito.png';
import Illustration2 from 'assets/images/mis.png';
import Illustration3 from 'assets/images/hands.png';
import Illustration4 from 'assets/images/peaches.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 70vh;
  background: ${colors.light};
  justify-content: flex-start;

  ${media.phone`
    height: 80vh;
  `}
`;

const IllustrationsWrapper = styled.div`
  height: 100%;
  width: 80vw;
  background: ${colors.lead};
  z-index: 5;

  ${media.phone`
    height: 90%;
    width: 85vw;
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const IllustrationsTitle = styled.h1`
  position: relative;
  width: 75vw;
  text-align: right;
  font-size: 50px;
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.dark};
  font-style: italic;

  ${media.phone`
    font-size: 40px;
    width: 80%;
    text-align: center;
    margin: 0;
  `}
`;

const IllustrationsContainer = styled.div`
  position: relative;
  top: 10%;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;

  .illustrations {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 20vw;
    height: 20vw;
  }

  .illustration1 {
    background-image: url(${Illustration1});

    &:before {
      content: '';
      position: absolute;
      top: -5%;
      left: -5%;
      width: 100%;
      height: 100%;
      border: 1px solid ${colors.dark};
      z-index: -1;
    }
  }
  .illustration2 {
    background-image: url(${Illustration2});

    &:before {
      content: '';
      position: absolute;
      top: 5%;
      left: -5%;
      width: 100%;
      height: 100%;
      border: 1px solid ${colors.dark};
    }
  }
  .illustration3 {
    background-image: url(${Illustration3});

    &:before {
      content: '';
      position: absolute;
      top: -5%;
      right: -5%;
      width: 100%;
      height: 100%;
      border: 1px solid ${colors.dark};
    }
  }
  .illustration4 {
    background-image: url(${Illustration4});

    &:before {
      content: '';
      position: absolute;
      top: 5%;
      right: -5%;
      width: 100%;
      height: 100%;
      border: 1px solid ${colors.dark};
      z-index: -1;
    }
  }

  ${media.phone`
    top: 5%;
    width: 90%;
    height: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 30px;

    .illustrations {
      width: 100%;
      height: 100%;
    }
  `}
`;

const IllustrationsSection = () => (
  <SectionTemplateWhite>
    <IllustrationsWrapper>
      <IllustrationsTitle>ilustracje</IllustrationsTitle>
      <IllustrationsContainer>
        <div className="illustrations illustration1" />
        <div className="illustrations illustration2" />
        <div className="illustrations illustration3" />
        <div className="illustrations illustration4" />
      </IllustrationsContainer>
    </IllustrationsWrapper>
  </SectionTemplateWhite>
);

export default IllustrationsSection;
