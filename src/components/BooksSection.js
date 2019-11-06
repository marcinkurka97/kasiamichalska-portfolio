import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors } from 'utils';
import Book1 from 'assets/images/book1.png';
import Book2 from 'assets/images/book2.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 80vh;
  width: 50vw;
  background: ${colors.light};
  justify-content: flex-end;
  flex-direction: row;
  z-index: 5;
`;

const BooksTitle = styled.h1`
  margin: 0 30px 0 0;
  position: relative;
  height: 60vh;
  top: -3%;
  font-size: 50px;
  border-left: 1px solid ${colors.dark};
  writing-mode: tb-rl;
  text-align: right;
  font-style: italic;

  &:after {
    content: '';
    position: absolute;
    width: 50vw;
    height: 1px;
    background: ${colors.dark};
    z-index: 10;
    top: 0;
    right: 61px;
  }
`;

const BooksWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BooksContainer = styled.div`
  position: relative;
  width: 60%;
  height: 60%;
  left: 5%;
  border: 1px solid ${colors.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .books {
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
  }

  .book1 {
    width: 90%;
    left: -25%;
    background-image: url(${Book1});
  }
  .book2 {
    width: 60%;
    right: -20%;
    background-image: url(${Book2});
  }
`;

const BooksSection = () => (
  <SectionTemplateWhite>
    <BooksWrapper>
      <BooksContainer>
        <div className="books book1" />
        <div className="books book2" />
      </BooksContainer>
    </BooksWrapper>
    <BooksTitle>książki</BooksTitle>
  </SectionTemplateWhite>
);

export default BooksSection;
