import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import PropTypes from 'prop-types';
import { colors, media } from 'utils';
import Poster1 from 'assets/images/afisz2-01.png';
import Poster2 from 'assets/images/plakat1v2.png';
import Poster3 from 'assets/images/plakat1-01.png';
import Poster4 from 'assets/images/pl36.png';
import Leaves from 'assets/images/leaves.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 100vh;
  background: ${colors.light};
  justify-content: flex-start;
`;

const PostersWrapper = styled.div`
  height: 100%;
  width: 80vw;
  background: ${colors.lead};
  z-index: 5;

  ${media.phone`
    position: absolute;
    right: 0;
    width: 85vw;
    display: flex;
    align-items: center;
    flex-direction: column;

    &:before {
      content: '';
      position: absolute;
      left: -60%;
      height: 100%;
      width: 60%;
      background-image: url(${Leaves});
      background-size: contain;
      z-index: -2;
    }
  `}
`;

const PostersTitle = styled.h1`
  position: relative;
  width: 75vw;
  left: 25vw;
  font-size: 50px;
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.dark};
  font-style: italic;

  ${media.phone`
    width: 100%;
    left: 0;
    font-size: 40px;
    margin: 10px 0;
    padding: 0;
    border: none;
    text-align: center;
  `}
`;

const PostersContainer = styled.div`
  position: relative;
  top: 7.5%;
  right: -40%;
  width: 60vw;
  height: 70vh;
  border: 1px solid ${colors.dark};

  &:before {
    content: '';
    position: absolute;
    left: -60%;
    height: 100%;
    width: 60%;
    background-image: url(${Leaves});
    background-size: contain;
    z-index: -2;
  }

  .posters {
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .poster1 {
    background-image: url(${Poster1});
    width: 90%;
    height: 90%;
    top: 15%;
    left: -2.5%;
    z-index: -1;
  }
  .poster2 {
    background-image: url(${Poster2});
    width: 80%;
    height: 80%;
    top: -5%;
    left: 25%;
    z-index: -2;
  }
  .poster3 {
    background-image: url(${Poster3});
    width: 75%;
    height: 75%;
    top: 30%;
    left: 45%;
    z-index: -1;
  }
  .poster4 {
    background-image: url(${Poster4});
    width: 100%;
    height: 100%;
    top: -5%;
    right: -65%;
    z-index: -2;
  }

  ${media.phone`
    width: 100vw;
    height: 80vh;
    right: 0;
    left: 0%;
    top: 2%;
   

    &:before {
      display: none;
    }

    .poster1 {
      width: 50%;
      height: 50%;
      top: 5%;
      left: 5%;
      z-index: -1;
    }
    .poster2 {
      width: 50%;
      height: 50%;
      top: 15%;
      left: 45%;
      z-index: -2;
    }
    .poster3 {
      width: 55%;
      height: 55%;
      top: 50%;
      left: 5%;
      z-index: -1;
    }
    .poster4 {
      width: 60%;
      height: 60%;
      top: 45%;
      right: 5%;
      z-index: 2;
    }
  `}
`;

const PostersSection = ({ id }) => (
  <SectionTemplateWhite id={id}>
    <PostersWrapper>
      <PostersTitle>plakaty</PostersTitle>
      <PostersContainer>
        <div className="posters poster1" />
        <div className="posters poster2" />
        <div className="posters poster3" />
        <div className="posters poster4" />
      </PostersContainer>
    </PostersWrapper>
  </SectionTemplateWhite>
);

PostersSection.propTypes = {
  id: PropTypes.string,
};

PostersSection.defaultProps = {
  id: 'contact',
};

export default PostersSection;
