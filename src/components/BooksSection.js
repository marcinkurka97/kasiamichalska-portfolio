import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors } from 'utils';
import Book1 from 'assets/images/book1.png';
import Book2 from 'assets/images/book2.png';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 90vh;
  background: ${colors.light};
  justify-content: flex-end;
`;

const BooksTitle = styled.h1`
  position: relative;
  top: -3%;
  height: 90%;
  font-size: 50px;
  margin: 20px 0;
  padding: 10px 20px;
  border-left: 1px solid ${colors.dark};
  margin-right: 50px;
  writing-mode: tb-rl;
  transform: rotate(180deg);
  text-align: right;
  font-style: italic;

  &:after {
    content: '';
    position: absolute;
    width: 45vw;
    height: 1px;
    background: ${colors.dark};
    z-index: 10;
    bottom: 0;
    right: 101px;
  }
`;

const BooksWrapper = styled.div`
  height: 100%;
  width: 65vw;
  background: ${colors.lead};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BooksContainer = styled.div`
  position: relative;
  width: 50%;
  height: 80%;
  border: 1px solid ${colors.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .books {
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 70%;
    height: 100%;
  }

  .book1 {
    width: 90%;
    left: -35%;
    background-image: url(${Book1});
  }
  .book2 {
    right: -25%;
    background-image: url(${Book2});
  }
`;

const BooksSection = () => (
  <SectionTemplateWhite>
    <BooksTitle>książki</BooksTitle>
    <BooksWrapper>
      <BooksContainer>
        <div className="books book1" />
        <div className="books book2" />
      </BooksContainer>
    </BooksWrapper>
  </SectionTemplateWhite>
);

export default BooksSection;
