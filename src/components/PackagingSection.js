import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors, media } from 'utils';
import Lines from 'assets/images/skosy.svg';
import Packages from 'assets/images/plansza.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 80vh;
  background: ${colors.light};
  flex-direction: column;
  z-index: 5;
  justify-content: flex-start;

  ${media.tablet`
    height: 60vh;
  `}
  ${media.phone`
    height: 55vh;
  `}
`;

const PackagingTitle = styled.h2`
  position: relative;
  width: 80vw;
  left: 20vw;
  font-size: 50px;
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.dark};
  font-style: italic;

  ${media.tablet`
    width: 100vw;
    font-size: 35px;
    left: 0;
    text-align: center;
  `}

  ${media.phone`
    width: 100vw;
    font-size: 35px;
    left: 0;
    text-align: center;
  `}
`;

const PackagingWrapper = styled.div`
  position: relative;
  height: 80%;
  width: 60vw;
  background-image: url(${Packages});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin: auto auto;

  &:before {
    content: '';
    position: absolute;
    top: 15%;
    left: -10%;
    height: 70%;
    width: 50%;
    background-image: url(${Lines});
    background-size: contain;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 15%;
    right: -25%;
    height: 70%;
    width: 50%;
    background-image: url(${Lines});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }

  ${media.tablet`
    width: 90vw;

    &:after {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
    }

    &:before {
      display: none;
    }
  `}

  ${media.phone`
    width: 90vw;
    height: 100%;

    &:after {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
    }

    &:before {
      display: none;
    }
  `}
`;

const PackagingSection = () => (
  <SectionTemplateWhite>
    <PackagingTitle>projekty opakowań</PackagingTitle>
    <PackagingWrapper />
  </SectionTemplateWhite>
);

export default PackagingSection;
