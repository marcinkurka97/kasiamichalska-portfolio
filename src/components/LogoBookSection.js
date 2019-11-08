import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors, media } from 'utils';
import LogoBook from 'assets/images/znaki.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 70vh;
  background: ${colors.light};
  flex-direction: column;
  z-index: 5;

  ${media.tablet`
    height: 40vh;
  `}
`;

const LogoBookTitle = styled.h2`
  position: relative;
  width: 90vw;
  left: 10vw;
  font-size: 50px;
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.dark};
  font-style: italic;

  &:after {
    content: '';
    position: absolute;
    top: -3vh;
    right: 5vw;
    width: 50vw;
    height: 200%;
    background: ${colors.lead};
    z-index: -1;
  }

  ${media.tablet`
    width: 80vw;
    left: 10vw;
    font-size: 40px;
    margin: 20px 0 20px 0;
    padding: 10px 20px 10px 0;
    text-align: center;

      &:after {
        display: none;
      }
  `}

  ${media.phone`
    width: 80vw;
    left: 10vw;
    font-size: 40px;
    margin: 0 0 20px 0;
    padding: 10px 20px 10px 0;
    text-align: right;

    &:after {
      display: none;
    }
`}
`;

const LogoBookImage = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${LogoBook});
  background-size: cover;
  background-position: center center;
`;

const LogoBookSection = () => (
  <SectionTemplateWhite>
    <LogoBookTitle>księgi znaku</LogoBookTitle>
    <LogoBookImage />
  </SectionTemplateWhite>
);

export default LogoBookSection;
