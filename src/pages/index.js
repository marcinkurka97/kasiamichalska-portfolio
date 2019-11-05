import React from 'react';
import { colors } from 'utils';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import Navigation from 'components/Navigation';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import PostersSection from 'components/PostersSection';
import IllustrationsSection from 'components/IllustrationsSection';
import LogosSection from 'components/LogosSection';
import BooksSection from 'components/BooksSection';
import SidebarScroll from 'components/Sidebars/SidebarScroll';
import SidebarSocials from 'components/Sidebars/SidebarSocials';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.light};
    color: ${colors.dark};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.light};
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

const StyledSectionsWrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <title>Kasia Michalska portfolio</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Some content." />
        </Helmet>
        <GlobalStyle />
        <Navigation />
        <SidebarScroll />
        <SidebarSocials />
        <StyledSectionsWrapper>
          <HeroSection id="home" />
          <AboutSection id="about" />
          <PostersSection id="works" />
          <IllustrationsSection />
          <LogosSection />
          <BooksSection />
        </StyledSectionsWrapper>
      </>
    );
  }
}
