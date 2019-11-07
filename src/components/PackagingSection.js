import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors, media } from 'utils';
import Lines from 'assets/images/skosy.svg';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 80vh;
  background: ${colors.light};
  flex-direction: column;
  z-index: 5;
  justify-content: flex-start;
`;

const PackagingTitle = styled.h1`
  position: relative;
  width: 80vw;
  left: 20vw;
  font-size: 50px;
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.dark};
  font-style: italic;

  ${media.phone`
    width: 90vw;
    font-size: 35px;
    left: 0;
    text-align: center;
  `}
`;

const PackagingWrapper = styled.div`
  position: relative;
  height: 60%;
  width: 70vw;
  background: ${colors.lead};
  margin: auto auto;

  &:after {
    content: '';
    position: absolute;
    top: -15%;
    left: 15%;
    height: 130%;
    width: 70%;
    background-image: url(${Lines});
    background-size: cover;
    z-index: -1;
  }

  ${media.phone`
    width: 90vw;

    &:after {
      left: 10%;
      width: 80%;
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
