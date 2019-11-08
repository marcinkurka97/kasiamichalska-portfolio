import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'components/SectionTemplate';
import PropTypes from 'prop-types';
import { colors, media } from 'utils';
import zIndex from 'utils/zindex';
import HeroImg from 'assets/images/profile.png';
import DotsSVG from 'assets/images/KROPKI.svg';

const StyledSectionTemplate = styled(SectionTemplate)`
  height: 100vh;

  ${media.tablet`
    height: 65vh;
    `}

  ${media.phone`
    height: 100vh;
    `}
`;

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

  ${media.tablet`
    width: 50vw;
    height: 50vw;
  `}

  ${media.phone`
    left: 7vw;
    top: -10%;
    width: 70vw;
    height: 70vw;
    flex-direction: column;
  `}
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

  ${media.tablet`
    width: 70%;
    height: 70%;
    left: -15%;
  `}

  ${media.phone`
    top: 10%;
    left: -10%;
    width: 70vw;
    height: 70vw;

    &:before {
      display: none;
    }
  `}
`;

const HeroQuote = styled.div`
  width: 80%;
  position: relative;
  right: -55%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  q {
    font-size: 40px;
    text-align: center;
    font-weight: 500;
    font-style: italic;
  }

  p {
    width: 100%;
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    padding: 0 20px;
  }

  ${media.tablet`
    width: 70%;
    right: -65%;

    q {
      font-size: 26px;
    }

    p {
      font-size: 20px;
    }
  `}

  ${media.phone`
    right: 0;
    top: 120%;
    width: 100%;
    left: -7vw;

    q {
      font-size: 20px;
      font-weight: 300;
    }
  
    p {
      font-size: 16px;
      font-weight: 800;
    }
  `}
`;

const HeroSection = ({ id }) => (
  <StyledSectionTemplate id={id}>
    <HeroWhiteBox>
      <HeroImage />
      <HeroQuote>
        <q>
          There are three responses to a piece of design –&nbsp;yes, no, and
          WOW!
          <br />
          Wow is the one to aim for.
        </q>
        <p> - Milton Glaser</p>
      </HeroQuote>
    </HeroWhiteBox>
  </StyledSectionTemplate>
);

HeroSection.propTypes = {
  id: PropTypes.string,
};

HeroSection.defaultProps = {
  id: 'home',
};

export default HeroSection;
