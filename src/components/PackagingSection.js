import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors } from 'utils';
import Lines from 'assets/images/kreski.png';

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
    background-size: contain;
    z-index: -1;
  }
`;

const PackagingSection = () => (
  <SectionTemplateWhite>
    <PackagingTitle>projekty opakowań</PackagingTitle>
    <PackagingWrapper />
  </SectionTemplateWhite>
);

export default PackagingSection;
