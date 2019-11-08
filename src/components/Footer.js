import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { media } from 'utils';

const SectionTemplate = styled(StyledWrapper)`
  height: 10vh;
  z-index: 5;
  font-size: 12px;
  font-weight: 500;

  ${media.tablet`
    height: 5vh;
  `}

  ${media.phone`
    height: 7vh;
  `}
`;
const Footer = () => (
  <SectionTemplate>
    © 2019 Katarzyna Michalska. All rights reserved
  </SectionTemplate>
);

export default Footer;
