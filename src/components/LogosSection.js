import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors } from 'utils';
import Logo1 from 'assets/images/polaroid.png';
import Logo2 from 'assets/images/pizzaDuet.png';
import Logo3 from 'assets/images/pizzaCheesey.png';
import Logo4 from 'assets/images/symBio.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 80vh;
  width: 50vw;
  background: ${colors.light};
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  z-index: 5;
  align-self: flex-start;
`;

const LogosTitle = styled.h1`
  position: relative;
  width: 45vw;
  text-align: left;
  font-size: 50px;
  margin: 0 0 60px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.dark};
  font-style: italic;
`;

const LogosWrapper = styled.div`
  position: relative;
  height: 80vh;
  width: 50vw;
  background: ${colors.lead};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
