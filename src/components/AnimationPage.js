import React from 'react';
import styled, { keyframes } from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { media } from 'utils';
import LogoAnimation from './LogoAnimation';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const SectionTemplate = styled(StyledWrapper)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 999999999;
  animation: ${FadeOut} 1.5s 4.5s ease-in both;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    animation: ${FadeIn} 3.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    ${media.phone`
      height: 60vw !important;
      width: 60vw !important;
    `}
  }
`;
const Footer = () => (
  <SectionTemplate>
    <LogoAnimation height={500} width={500} />
  </SectionTemplate>
);

export default Footer;
