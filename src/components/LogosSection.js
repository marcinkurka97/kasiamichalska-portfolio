import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors, media } from 'utils';
import Logo1 from 'assets/images/polaroid.svg';
import Logo2 from 'assets/images/pizzaDuet.svg';
import Logo3 from 'assets/images/pizzaCheesey.svg';
import Logo4 from 'assets/images/symBio.svg';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 80vh;
  width: 50vw;
  background: ${colors.light};
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  z-index: 5;
  align-self: flex-start;

  ${media.tablet`
    height: 65vh;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
  `}

  ${media.phone`
    width: 100vw;
    justify-content: space-between;
    align-items: center;
  `}
`;

const LogosTitle = styled.h2`
  position: relative;
  width: 45vw;
  text-align: left;
  font-size: 50px;
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.dark};
  font-style: italic;

  ${media.tablet`
    margin: 0;
    width: 80vw;
    right: 10vw;
    text-align: center;
  `}

  ${media.phone`
    width: 80vw;
    right: 10vw;
    text-align: center;
    font-size: 40px;
    margin: 0;
  `}
`;

const LogosWrapper = styled.div`
  position: relative;
  height: 80vh;
  width: 50vw;
  background: ${colors.lead};
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    width: 100vw;
    height: 80%;
    `}

  ${media.phone`
    width: 100vw;
    height: 80%;
  `}
`;

const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 20px;

  .logos {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 13vw;
    height: 13vw;
  }

  .logo1 {
    background-image: url(${Logo1});
  }
  .logo2 {
    background-image: url(${Logo2});
  }
  .logo3 {
    background-image: url(${Logo3});
  }
  .logo4 {
    background-image: url(${Logo4});
  }

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 20px;

    .logos {
      width: 30vw;
      height: 30vw;
    }
  `}

  ${media.phone`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    .logos {
      width: 40vw;
      height: 40vw;
    }
  `}
`;

const LogosSection = () => (
  <SectionTemplateWhite>
    <LogosTitle>logo</LogosTitle>
    <LogosWrapper>
      <LogosContainer>
        <div className="logos logo1" />
        <div className="logos logo2" />
        <div className="logos logo3" />
        <div className="logos logo4" />
      </LogosContainer>
    </LogosWrapper>
  </SectionTemplateWhite>
);

export default LogosSection;
