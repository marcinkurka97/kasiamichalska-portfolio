import React from 'react';
import { colors, media } from 'utils';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import AnimationPage from 'components/AnimationPage';
import Navigation from 'components/Navigation';
import SidebarScroll from 'components/Sidebars/SidebarScroll';
import SidebarSocials from 'components/Sidebars/SidebarSocials';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import PostersSection from 'components/PostersSection';
import IllustrationsSection from 'components/IllustrationsSection';
import LogosSection from 'components/LogosSection';
import BooksSection from 'components/BooksSection';
import LogoBookSection from 'components/LogoBookSection';
import PackagingSection from 'components/PackagingSection';
import ThreeDSection from 'components/ThreeDSection';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

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

const SectionCombined = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `}
`;

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.FADE,
};

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
          <meta
            name="description"
            content="Hej, jestem Kasia, jestem studentką grafiki i freelancerem. Od 9 do 15
                  robię wszystko to, czego ode mnie oczekują. A później zaczynam tworzyć
                  DESIGN."
          />
        </Helmet>
        <GlobalStyle />
        <AnimationPage />
        <Navigation />
        <SidebarScroll />
        <SidebarSocials />
        <StyledSectionsWrapper>
          <HeroSection id="home" />
          <AboutSection id="about" />
          <PostersSection id="works" />
          <IllustrationsSection />
          <SectionCombined>
            <BooksSection />
            <LogosSection />
          </SectionCombined>
          <LogoBookSection />
          <PackagingSection />
          <ThreeDSection />
          <AlertProvider template={AlertTemplate} {...options}>
            <Contact id="contact" />
          </AlertProvider>
          <Footer />
        </StyledSectionsWrapper>
      </>
    );
  }
}
